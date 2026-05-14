import React from 'react';
import { X, BarChart3, Info, Calendar } from 'lucide-react';
import { formatCurrency } from '../utils/formatters';

export default function DetailModal({ car, onClose }) {
  if (!car) return null;

  const secondYearRenewal = (car.breakdown.docRenewal - 5500) / 2;
  const thirdYearRenewal = secondYearRenewal + 5500;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div className="relative bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-200">
        {/* Left side - Highlights */}
        <div className="bg-indigo-900 text-white p-8 md:w-2/5 flex flex-col justify-between">
          <div>
            <button
              onClick={onClose}
              className="absolute top-4 left-4 p-2 bg-white/10 hover:bg-white/20 rounded-full md:hidden transition-colors"
            >
              <X size={20} className="text-white" />
            </button>
            <div className="mb-2 inline-flex items-center gap-2 bg-indigo-800/50 px-3 py-1 rounded-full text-sm font-medium text-indigo-200 border border-indigo-700">
              <span>{car.category}</span> • <span>{car.fuel}</span> • <span>{car.transmission}</span>
            </div>
            <h2 className="text-3xl font-bold mb-8 mt-2">{car.name}</h2>

            <div className="space-y-6">
              <div className="bg-indigo-800/40 p-4 rounded-xl border border-indigo-700/50">
                <p className="text-indigo-200 text-sm mb-1 uppercase tracking-wider font-semibold">
                  Total Investment
                </p>
                <p className="text-3xl font-black text-white">
                  {formatCurrency(car.investment)}
                </p>
              </div>

              <div className="bg-indigo-800/40 p-4 rounded-xl border border-indigo-700/50">
                <p className="text-indigo-200 text-sm mb-1 uppercase tracking-wider font-semibold flex items-center gap-2">
                  Monthly Payout{' '}
                  <span className="bg-indigo-500 text-white text-[10px] px-2 py-0.5 rounded-full">
                    36 Months
                  </span>
                </p>
                <p className="text-3xl font-black text-indigo-300">
                  {formatCurrency(car.monthlyPayout)}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-indigo-800/50">
            <p className="text-indigo-200 text-sm mb-1 flex items-center gap-2">
              <BarChart3 size={16} /> Expected Net Profit
            </p>
            <p className="text-4xl font-black text-emerald-400">
              {formatCurrency(car.netProfit)}
            </p>
          </div>
        </div>

        {/* Right side - Detailed Breakdown */}
        <div className="p-8 md:w-3/5 bg-slate-50 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-full hidden md:block transition-colors"
          >
            <X size={24} />
          </button>

          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <Info className="text-indigo-500" size={20} /> Financial Breakdown
          </h3>

          <div className="space-y-6">
            {/* Revenue Block */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-semibold text-slate-800 mb-4 text-sm uppercase tracking-wider">
                Revenue & Return
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                  <span className="text-slate-600">Total Revenue (36m)</span>
                  <span className="font-semibold text-slate-800">
                    {formatCurrency(car.totalRevenue)}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-1">
                  <span className="text-slate-600">Estimated Resale Value</span>
                  <span className="font-semibold text-slate-800">
                    {formatCurrency(car.resaleValue)}
                  </span>
                </div>
              </div>
            </div>

            {/* Costs Block */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-semibold text-slate-800 mb-4 text-sm uppercase tracking-wider">
                Initial Costs Breakdown
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Ex-Showroom</span>
                  <span className="font-medium text-slate-800">
                    {formatCurrency(car.breakdown.exShowroom)}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Road Tax (LTT)</span>
                  <span className="font-medium text-slate-800">
                    {formatCurrency(car.breakdown.roadTax)}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Insurance (Approx)</span>
                  <span className="font-medium text-slate-800">
                    {formatCurrency(car.breakdown.insurance)}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">RTO</span>
                  <span className="font-medium text-slate-800">
                    {formatCurrency(car.breakdown.rto)}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">GPS Devices</span>
                  <span className="font-medium text-slate-800">
                    {formatCurrency(car.breakdown.gps)}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Speed Governor</span>
                  <span className="font-medium text-slate-800">
                    {formatCurrency(car.breakdown.speedGov)}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center">
                <span className="text-sm font-medium text-slate-600">Total Investment Output</span>
                <span className="font-bold text-lg text-slate-900">
                  {formatCurrency(car.investment)}
                </span>
              </div>
            </div>

            {/* Future Renewals Block */}
            <div className="bg-orange-50 p-5 rounded-2xl border border-orange-200 shadow-sm">
              <h4 className="font-semibold text-orange-900 mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
                <Calendar size={18} /> Future Renewals (2nd & 3rd Year)
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm pb-2 border-b border-orange-100/50">
                  <span className="text-orange-800">2nd Year (Insurance + Permit)</span>
                  <span className="font-medium text-orange-900">{formatCurrency(secondYearRenewal)}</span>
                </div>
                <div className="flex justify-between items-center text-sm pb-2 border-b border-orange-100/50">
                  <span className="text-orange-800">3rd Year (Insurance + Permit + FC)</span>
                  <span className="font-medium text-orange-900">{formatCurrency(thirdYearRenewal)}</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-sm font-bold text-orange-900">Total Future Costs</span>
                  <span className="font-bold text-lg text-orange-900">
                    {formatCurrency(car.breakdown.docRenewal)}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
              <p className="text-xs text-indigo-800 text-center font-medium">
                Net Profit = (Total Revenue + Resale Value) - (Total Investment + Total Future
                Costs)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
