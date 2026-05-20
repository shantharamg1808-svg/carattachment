import React from 'react';
import { Search, Car } from 'lucide-react';

export default function Header({ searchQuery, onSearchChange }) {
  return (
    <header className="bg-gradient-to-br from-brand-600 to-brand-500 text-white pt-10 pb-20 px-6 sm:px-10 rounded-b-[3rem] shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-4">
          <Car className="w-12 h-12 text-brand-400" />
        </div>

        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Find Your Perfect Vehicle Investment
          </h2>
          <p className="text-lg text-slate-200">
            Explore breakdown of investments, monthly payouts, and net profits across our fleet.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto mt-8">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-4 rounded-full border-0 bg-white shadow-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-brand-500 sm:text-lg transition-all"
              placeholder="Search car name, petrol, automatic..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
