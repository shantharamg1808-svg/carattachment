import React from 'react';
import { ChevronRight, Fuel, Settings2, TrendingUp } from 'lucide-react';
import { formatCurrency, calculateXIRR, calculateROI, calculateInterest } from '../utils/formatters';

export default function CarCard({ car, onSelect }) {
  const xirr = calculateXIRR(car.investment, car.monthlyPayout, car.resaleValue, car.breakdown.docRenewal);
  const roi = calculateROI(car.investment, car.netProfit);
  const interest = calculateInterest(car.investment, car.monthlyPayout);

  return (
    <div
      onClick={() => onSelect(car)}
      className="bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-brand-300 transition-all cursor-pointer group flex flex-col overflow-hidden"
    >
      <div className="p-6 pb-5 border-b border-slate-100">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
              {car.name}
            </h3>
            <p className="text-sm text-slate-500 font-medium">{car.category}</p>
          </div>
          <div className="flex flex-col gap-1.5 items-end">
            <span className="inline-flex items-center gap-1.5 bg-slate-50/80 text-brand-600 text-[11px] font-semibold px-2 py-0.5 rounded-full border border-slate-100/50">
              <Fuel size={12} /> {car.fuel}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 text-[11px] font-semibold px-2 py-0.5 rounded-full border border-slate-200/60">
              <Settings2 size={12} /> {car.transmission}
            </span>
          </div>
        </div>

        {/* Simple Metrics */}
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100/60 mb-1 space-y-3">
          <div className="flex justify-between items-center">
             <span className="text-sm text-slate-500 font-medium">Total Investment</span>
             <span className="font-bold text-slate-900">{formatCurrency(car.investment)}</span>
          </div>
          <div className="flex justify-between items-center">
             <span className="text-sm text-slate-500 font-medium">Monthly Payout</span>
             <span className="font-bold text-green-600">{formatCurrency(car.monthlyPayout)}</span>
          </div>
        </div>
      </div>

      {/* Highlighted Footer */}
      <div className="bg-brand-500 px-6 py-4 flex justify-between items-center group-hover:bg-brand-600 transition-colors">
        <div>
           <p className="text-slate-200 text-[11px] uppercase tracking-wider font-semibold mb-0.5 flex items-center gap-1">
             <TrendingUp size={12} /> Annual XIRR
           </p>
           <p className="font-bold text-emerald-400 text-lg">{xirr.toFixed(2)}%</p>
        </div>
        <div className="text-brand-300 group-hover:translate-x-1 transition-transform flex items-center gap-1 text-sm font-medium">
           View Details <ChevronRight size={18} />
        </div>
      </div>
    </div>
  );
}
