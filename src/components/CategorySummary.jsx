import React, { useMemo } from 'react';
import { VEHICLE_DATA } from '../data/vehicleData';
import { formatCurrency, CATEGORIES } from '../utils/formatters';

export default function CategorySummary({ selectedCategory, onCategoryChange }) {
  const categoryStats = useMemo(() => {
    const stats = {};
    CATEGORIES.forEach((cat) => {
      if (cat === 'All') return;
      const carsInCat = VEHICLE_DATA.filter((car) => car.category === cat);
      if (carsInCat.length === 0) return;
      const avgInvest =
        carsInCat.reduce((sum, car) => sum + car.investment, 0) / carsInCat.length;
      const avgReturn =
        carsInCat.reduce((sum, car) => sum + car.netProfit, 0) / carsInCat.length;
      stats[cat] = { avgInvest, avgReturn, count: carsInCat.length };
    });
    return stats;
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
      {CATEGORIES.filter((c) => c !== 'All').map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(selectedCategory === cat ? 'All' : cat)}
          className={`bg-white rounded-2xl p-5 shadow-sm border transition-all text-left group
            ${
              selectedCategory === cat
                ? 'border-indigo-500 ring-2 ring-indigo-500 ring-opacity-50'
                : 'border-slate-200 hover:border-indigo-300 hover:shadow-md'
            }`}
        >
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-lg text-slate-800">{cat}</h3>
            <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-full">
              {categoryStats[cat]?.count} Cars
            </span>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-slate-500 flex justify-between">
              <span>Avg Invest:</span>
              <span className="font-medium text-slate-700">
                {formatCurrency(categoryStats[cat]?.avgInvest || 0)}
              </span>
            </p>
            <p className="text-sm text-slate-500 flex justify-between">
              <span>Avg Profit:</span>
              <span className="font-medium text-emerald-600">
                {formatCurrency(categoryStats[cat]?.avgReturn || 0)}
              </span>
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}
