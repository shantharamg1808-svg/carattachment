import React, { useState, useMemo } from 'react';
import { VEHICLE_DATA } from './data/vehicleData';
import { checkBudgetRange } from './utils/formatters';
import Header from './components/Header';
import CategorySummary from './components/CategorySummary';
import FiltersSection from './components/FiltersSection';
import CarGrid from './components/CarGrid';
import DetailModal from './components/DetailModal';
import './App.css';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filters, setFilters] = useState({ transmission: 'All', fuel: 'All', budget: 'All' });
  const [selectedCar, setSelectedCar] = useState(null);

  const filteredData = useMemo(() => {
    return VEHICLE_DATA.filter((car) => {
      const matchesSearch =
        car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.fuel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.transmission.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'All' || car.category === selectedCategory;
      const matchesTrans = filters.transmission === 'All' || car.transmission === filters.transmission;
      const matchesFuel = filters.fuel === 'All' || car.fuel === filters.fuel;
      const matchesBudget = checkBudgetRange(car.investment, filters.budget);

      return matchesSearch && matchesCategory && matchesTrans && matchesFuel && matchesBudget;
    });
  }, [searchQuery, selectedCategory, filters]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setFilters({ transmission: 'All', fuel: 'All', budget: 'All' });
    setSelectedCategory('All');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-20">
        <CategorySummary selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />

        <FiltersSection
          filters={filters}
          onFilterChange={setFilters}
          filteredCount={filteredData.length}
        />

        <CarGrid
          filteredData={filteredData}
          onSelectCar={setSelectedCar}
          onClearFilters={handleClearFilters}
        />
      </main>

      <DetailModal car={selectedCar} onClose={() => setSelectedCar(null)} />
    </div>
  );
}
