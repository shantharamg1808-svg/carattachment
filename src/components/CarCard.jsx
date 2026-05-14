import React from 'react';
import { ChevronRight, Fuel, Settings2 } from 'lucide-react';
import { formatCurrency } from '../utils/formatters';

export default function CarCard({ car, onSelect }) {
  return (
    <div
      onClick={() => onSelect(car)}
      className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-xl hover:border-indigo-200 transition-all cursor-pointer group flex flex-col justify-between"
    >
      <div>
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
              {car.name}
            </h3>
            <p className="text-sm text-slate-500">{car.category}</p>
          </div>
          <div className="flex flex-col gap-1 items-end">
            <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded-md">
              <Fuel size={12} /> {car.fuel}
            </span>
            <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-700 text-xs font-medium px-2 py-1 rounded-md">
              <Settings2 size={12} /> {car.transmission}
            </span>
          </div>
        </div>

        <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-100 mb-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-600">Total Investment</span>
            <span className="font-bold text-slate-900">{formatCurrency(car.investment)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-600">Monthly Payout</span>
            <span className="font-bold text-indigo-600">{formatCurrency(car.monthlyPayout)}</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-end pt-4 border-t border-slate-100 mt-2">
        <div>
          <p className="text-xs text-slate-500 mb-1">Estimated Net Profit</p>
          <p className="font-black text-emerald-600 text-lg">
            {formatCurrency(car.netProfit)}
          </p>
        </div>
        <div className="text-indigo-600 group-hover:translate-x-1 transition-transform">
          <ChevronRight size={24} />
        </div>
      </div>
    </div>
  );
}
