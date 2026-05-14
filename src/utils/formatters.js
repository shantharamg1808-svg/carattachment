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
