import React from 'react';
import { X, BarChart3, Info, Calendar, TrendingUp, IndianRupee, Shield, FileText } from 'lucide-react';
import { formatCurrency, calculateROI, calculateXIRR, calculateInterest } from '../utils/formatters';

export default function DetailModal({ car, onClose }) {
  if (!car) return null;

  const secondYearRenewal = (car.breakdown.docRenewal - 5500) / 2;
  const thirdYearRenewal = secondYearRenewal + 5500;

  const xirr = calculateXIRR(car.investment, car.monthlyPayout, car.resaleValue, car.breakdown.docRenewal);
  const roi = calculateROI(car.investment, car.netProfit);
  const interest = calculateInterest(car.investment, car.monthlyPayout);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative bg-slate-50 rounded-3xl w-full max-w-5xl max-h-[95vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 p-2 rounded-full transition-colors backdrop-blur-md"
        >
          <X size={20} />
        </button>

        {/* Hero Header */}
        <div className="bg-gradient-to-br from-brand-600 to-brand-500 p-8 text-white shrink-0">
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                 <div className="flex items-center gap-3 mb-3">
                   <span className="bg-white/20 text-slate-50 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border border-white/10">{car.category}</span>
                   <span className="bg-white/20 text-slate-50 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border border-white/10">{car.fuel}</span>
                   <span className="bg-white/20 text-slate-50 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border border-white/10">{car.transmission}</span>
                 </div>
                 <h2 className="text-4xl md:text-5xl font-black text-white mb-2">{car.name}</h2>
              </div>
              <div className="flex gap-6 text-right">
                 <div>
                    <p className="text-slate-200 text-sm font-semibold uppercase tracking-wider mb-1">Total Investment</p>
                    <p className="text-3xl font-black">{formatCurrency(car.investment)}</p>
                 </div>
                 <div className="pl-6 border-l border-brand-600">
                    <p className="text-green-300 text-sm font-semibold uppercase tracking-wider mb-1">Net Profit</p>
                    <p className="text-3xl font-black text-green-400">{formatCurrency(car.netProfit)}</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Dashboard Body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Yield Analytics */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col gap-4">
                 <h3 className="text-slate-800 font-bold uppercase tracking-wider text-sm flex items-center gap-2 mb-2">
                    <TrendingUp size={16} className="text-brand-500" /> Yield Analytics
                 </h3>
                 <div className="bg-green-50 rounded-xl p-4 border border-green-100/60 text-center">
                    <p className="text-green-700 text-xs font-bold uppercase tracking-wider mb-1">Annualized XIRR</p>
                    <p className="text-4xl font-black text-green-600">{xirr.toFixed(2)}%</p>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-center">
                       <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1">Total ROI (3Y)</p>
                       <p className="text-xl font-bold text-slate-800">{roi.toFixed(1)}%</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-center">
                       <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1">Annual ROI</p>
                       <p className="text-xl font-bold text-slate-800">{(roi/3).toFixed(1)}%</p>
                    </div>
                 </div>
              </div>

              {/* Card 2: Revenue & Interest */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col gap-4">
                 <h3 className="text-slate-800 font-bold uppercase tracking-wider text-sm flex items-center gap-2 mb-2">
                    <IndianRupee size={16} className="text-green-600" /> Revenue Flow
                 </h3>
                 <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                       <span className="text-slate-600 text-sm font-medium">Total Revenue (36m)</span>
                       <span className="font-bold text-slate-800">{formatCurrency(car.totalRevenue)}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                       <span className="text-slate-600 text-sm font-medium">Monthly Payout</span>
                       <span className="font-bold text-brand-600">{formatCurrency(car.monthlyPayout)}<span className="text-xs font-normal text-slate-400">/mo</span></span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                       <span className="text-slate-600 text-sm font-medium">Total Interest (3Y)</span>
                       <span className="font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-lg">+{formatCurrency(interest.total)}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                       <span className="text-slate-600 text-sm font-medium">Yearly Interest</span>
                       <span className="font-semibold text-green-600">+{formatCurrency(interest.yearly)}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3">
                       <span className="text-slate-600 text-sm font-medium">Est. Resale Value</span>
                       <span className="font-semibold text-slate-800">{formatCurrency(car.resaleValue)}</span>
                    </div>
                    <div className="pt-3 border-t border-slate-200 space-y-2">
                       <div className="flex justify-between items-center text-sm font-bold text-slate-800">
                          <span>Total Gross Revenue</span>
                          <span className="text-brand-600">{formatCurrency(car.totalRevenue + car.resaleValue)}</span>
                       </div>
                       <div className="flex justify-between items-center text-sm font-black text-slate-800">
                          <span>Total Net Revenue</span>
                          <span className="text-green-600">{formatCurrency((car.totalRevenue + car.resaleValue) - (secondYearRenewal + thirdYearRenewal))}</span>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Card 3: Costs & Renewals */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col gap-4">
                 <h3 className="text-slate-800 font-bold uppercase tracking-wider text-sm flex items-center gap-2 mb-2">
                    <FileText size={16} className="text-brand-500" /> Initial Costs & Renewals
                 </h3>
                 <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                       <span className="text-slate-500 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> Ex-Showroom</span>
                       <span className="font-medium text-slate-700">{formatCurrency(car.breakdown.exShowroom)}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                       <span className="text-slate-500 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> Road Tax (LTT)</span>
                       <span className="font-medium text-slate-700">{formatCurrency(car.breakdown.roadTax || 0)}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                       <span className="text-slate-500 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> Insurance (Approx)</span>
                       <span className="font-medium text-slate-700">{formatCurrency(car.breakdown.insurance || 0)}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                       <span className="text-slate-500 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> RTO</span>
                       <span className="font-medium text-slate-700">{formatCurrency(car.breakdown.rto || 0)}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                       <span className="text-slate-500 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> GPS Devices</span>
                       <span className="font-medium text-slate-700">{formatCurrency(car.breakdown.gps || 0)}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                       <span className="text-slate-500 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> Speed Governor</span>
                       <span className="font-medium text-slate-700">{formatCurrency(car.breakdown.speedGov || 0)}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm pb-3 border-b border-slate-100">
                       <span className="text-slate-500 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> 1st Yr Doc Renewal</span>
                       <span className="font-medium text-slate-700">{formatCurrency(car.breakdown.docRenewal)}</span>
                    </div>
                    
                    <div className="pt-2 space-y-3">
                       <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Future Renewals</p>
                       <div className="flex justify-between items-center text-sm">
                          <span className="text-brand-500/80 font-medium flex items-center gap-2">2nd Year</span>
                          <span className="font-semibold text-brand-600">-{formatCurrency(secondYearRenewal)}</span>
                       </div>
                       <div className="flex justify-between items-center text-sm">
                          <span className="text-brand-500/80 font-medium flex items-center gap-2">3rd Year</span>
                          <span className="font-semibold text-brand-600">-{formatCurrency(thirdYearRenewal)}</span>
                       </div>
                    </div>
                    <div className="pt-3 mt-1 border-t border-slate-200">
                       <div className="flex justify-between items-center text-sm font-bold text-slate-800">
                          <span>Total Inv + Expenses (3Y)</span>
                          <span>{formatCurrency(car.investment + secondYearRenewal + thirdYearRenewal)}</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
