import React from 'react';
import { Car } from 'lucide-react';
import CarCard from './CarCard';

export default function CarGrid({ filteredData, onSelectCar, onClearFilters }) {
  if (filteredData.length === 0) {
    return (
      <div className="col-span-full py-20 text-center text-slate-500 bg-white rounded-2xl border border-slate-200 shadow-sm">
        <Car className="w-16 h-16 mx-auto text-slate-300 mb-4" />
        <p className="text-xl font-medium text-slate-600">
          No vehicles found matching your criteria.
        </p>
        <button
          onClick={onClearFilters}
          className="mt-4 px-6 py-2 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium"
        >
          Clear all filters
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredData.map((car) => (
        <CarCard key={car.id} car={car} onSelect={onSelectCar} />
      ))}
    </div>
  );
}
