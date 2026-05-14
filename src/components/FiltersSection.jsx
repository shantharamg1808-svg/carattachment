import React from 'react';
import { Filter, Car } from 'lucide-react';
import { BUDGET_RANGES, TRANSMISSION_OPTIONS, FUEL_OPTIONS } from '../utils/formatters';

export default function FiltersSection({ filters, onFilterChange, filteredCount }) {
  const handleSelectChange = (filterKey, value) => {
    onFilterChange({ ...filters, [filterKey]: value });
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
      <div className="flex flex-wrap items-center gap-3 w-full">
        <span className="text-sm font-semibold text-slate-700 flex items-center gap-1.5 mr-2">
          <Filter size={18} className="text-indigo-500" /> Filters:
        </span>

        <div className="relative">
          <select
            className="bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block p-2.5 pl-3 pr-8 outline-none appearance-none cursor-pointer hover:bg-slate-100 transition-colors"
            value={filters.budget}
            onChange={(e) => handleSelectChange('budget', e.target.value)}
          >
            {BUDGET_RANGES.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>

        <div className="relative">
          <select
            className="bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block p-2.5 pl-3 pr-8 outline-none appearance-none cursor-pointer hover:bg-slate-100 transition-colors"
            value={filters.transmission}
            onChange={(e) => handleSelectChange('transmission', e.target.value)}
          >
            {TRANSMISSION_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option === 'All' ? 'All Transmissions' : option}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>

        <div className="relative">
          <select
            className="bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block p-2.5 pl-3 pr-8 outline-none appearance-none cursor-pointer hover:bg-slate-100 transition-colors"
            value={filters.fuel}
            onChange={(e) => handleSelectChange('fuel', e.target.value)}
          >
            {FUEL_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option === 'All' ? 'All Fuels' : option}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="text-sm text-slate-600 whitespace-nowrap bg-indigo-50 px-4 py-2 rounded-xl border border-indigo-100 font-medium w-full md:w-auto text-center md:text-left flex items-center justify-center gap-1.5">
        <Car size={16} className="text-indigo-500" />
        Showing <strong className="text-indigo-700 text-base">{filteredCount}</strong> vehicles
      </div>
    </div>
  );
}
