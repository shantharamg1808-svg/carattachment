export const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);
};

export const CATEGORIES = ['All', 'Hatchback', 'Sedan', 'SUV', '7 Seater'];

export const BUDGET_RANGES = [
  { value: 'All', label: 'All Budgets' },
  { value: '5-8', label: '₹5L - ₹8L' },
  { value: '8-10', label: '₹8L - ₹10L' },
  { value: '11-15', label: '₹11L - ₹15L' },
  { value: '15-20', label: '₹15L - ₹20L' },
  { value: '20-23', label: '₹20L - ₹23L+' },
];

export const TRANSMISSION_OPTIONS = ['All', 'Manual', 'Automatic'];
export const FUEL_OPTIONS = ['All', 'PETROL', 'DIESEL', 'EV'];

export const checkBudgetRange = (investment, budgetRange) => {
  if (budgetRange === 'All') return true;
  const inv = investment;
  switch (budgetRange) {
    case '5-8':
      return inv >= 500000 && inv <= 800000;
    case '8-10':
      return inv > 800000 && inv <= 1000000;
    case '11-15':
      return inv > 1000000 && inv <= 1500000;
    case '15-20':
      return inv > 1500000 && inv <= 2000000;
    case '20-23':
      return inv > 2000000 && inv <= 2400000;
    default:
      return true;
  }
};

export const calculateROI = (investment, netProfit) => {
  if (!investment) return 0;
  return (netProfit / investment) * 100;
};

export const calculateInterest = (investment, monthlyPayout) => {
  const total = (monthlyPayout * 36) - investment;
  const yearly = total / 3;
  return { total, yearly };
};

export const calculateXIRR = (investment, monthlyPayout, resaleValue, docRenewal) => {
  const secondYearRenewal = (docRenewal - 5500) / 2;
  const thirdYearRenewal = secondYearRenewal + 5500;

  // Build cash flows array (0 to 36 months)
  const cf = new Array(37).fill(0);
  cf[0] = -investment;
  for (let t = 1; t <= 36; t++) {
    cf[t] = monthlyPayout;
  }
  cf[12] -= secondYearRenewal;
  cf[24] -= thirdYearRenewal;
  cf[36] += resaleValue;

  // Solve for monthly IRR using Newton-Raphson
  let r = 0.01; // initial guess: 1% per month
  const maxIterations = 200;
  const precision = 1e-7;
  let converged = false;

  for (let i = 0; i < maxIterations; i++) {
    let f = 0;
    let df = 0;
    for (let t = 0; t <= 36; t++) {
      const term = Math.pow(1 + r, t);
      f += cf[t] / term;
      if (t > 0) {
        df += (-t * cf[t]) / (term * (1 + r));
      }
    }

    if (Math.abs(df) < 1e-12) break; // avoid division by zero

    const nextR = r - f / df;
    if (Math.abs(nextR - r) < precision) {
      r = nextR;
      converged = true;
      break;
    }
    r = nextR;
  }

  // Fallback to bisection if Newton-Raphson fails to converge or goes out of bounds
  if (!converged || isNaN(r) || r < -0.99 || r > 2.0) {
    let low = -0.99;
    let high = 2.0;
    for (let i = 0; i < 100; i++) {
      r = (low + high) / 2;
      let f = 0;
      for (let t = 0; t <= 36; t++) {
        f += cf[t] / Math.pow(1 + r, t);
      }
      if (Math.abs(f) < 1e-7) {
        converged = true;
        break;
      }
      if (f > 0) {
        low = r;
      } else {
        high = r;
      }
    }
  }

  // Annualize monthly rate: (1 + r)^12 - 1
  const xirr = Math.pow(1 + r, 12) - 1;
  return xirr * 100; // Return as percentage
};

