# Car Attachment - Vehicle Investment Calculator

A modern React application for analyzing vehicle investment opportunities. This app helps users explore vehicle data, compare investments, and understand financial breakdowns for various car models.

## 📁 Project Structure

```
carattachment/
├── public/
│   └── index.html          # HTML entry point
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Header.jsx      # Header with search functionality
│   │   ├── CategorySummary.jsx     # Category cards with stats
│   │   ├── FiltersSection.jsx      # Filter controls
│   │   ├── CarCard.jsx     # Individual car card component
│   │   ├── CarGrid.jsx     # Grid layout for cars
│   │   └── DetailModal.jsx # Detailed car information modal
│   ├── data/
│   │   └── vehicleData.js  # Vehicle data and constants
│   ├── utils/
│   │   └── formatters.js   # Utility functions (currency formatting, etc.)
│   ├── App.jsx             # Main app component
│   ├── App.css             # Global styles and animations
│   └── main.jsx            # React entry point
├── package.json            # Project dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd carattachment
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This generates optimized files in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📋 Component Architecture

### Core Components

- **Header**: Search functionality and hero section
- **CategorySummary**: Category filters with average investment and profit statistics
- **FiltersSection**: Budget, transmission, and fuel type filters
- **CarCard**: Individual vehicle display card
- **CarGrid**: Grid layout and empty state handling
- **DetailModal**: Comprehensive vehicle details with financial breakdown

### Data & Utilities

- **vehicleData.js**: Centralized vehicle database with 24 car models
- **formatters.js**: Currency formatting, filter logic, and constants

## 🔧 Managing the App

### Adding New Vehicles

Edit `src/data/vehicleData.js`:
```javascript
{
  id: 25,
  name: 'NEW_CAR_MODEL',
  category: 'SUV',
  fuel: 'PETROL',
  transmission: 'Automatic',
  investment: 1000000,
  monthlyPayout: 30000,
  totalRevenue: 1080000,
  resaleValue: 400000,
  netProfit: 400000,
  breakdown: { /* costs breakdown */ }
}
```

### Adding New Filter Options

Edit `src/utils/formatters.js` to add new budget ranges, fuel types, or categories.

### Customizing Styling

- Global styles: `src/App.css`
- Tailwind configuration: `tailwind.config.js`
- Component styles: Use Tailwind classes directly in JSX files

## 📦 Dependencies

- **react**: ^18.2.0 - UI library
- **react-dom**: ^18.2.0 - React DOM renderer
- **lucide-react**: ^0.263.1 - Icon library
- **tailwindcss**: ^3.3.0 - Utility-first CSS framework
- **vite**: ^4.4.0 - Build tool and dev server

## 🎨 UI Features

- Responsive design (mobile, tablet, desktop)
- Interactive filters and search
- Detailed modal with financial breakdown
- Category-based statistics
- Smooth animations and transitions
- Currency formatting in INR

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔍 Search & Filter Features

- **Search**: Car name, fuel type, transmission
- **Category Filter**: Hatchback, Sedan, SUV, 7 Seater
- **Budget Filter**: ₹5L - ₹23L+ ranges
- **Transmission Filter**: Manual, Automatic
- **Fuel Type Filter**: Petrol, Diesel, EV

## 📖 Usage Example

```javascript
// Adding a custom filter
const handleCustomFilter = (cars, customCriteria) => {
  return cars.filter(car => car.investment > customCriteria.minBudget);
};
```

## 🤝 Contributing

When modifying the app:
1. Keep components small and focused
2. Use meaningful names for variables and functions
3. Add comments for complex logic
4. Follow existing code style and patterns

## 📄 License

This project is provided as-is for vehicle investment analysis.
