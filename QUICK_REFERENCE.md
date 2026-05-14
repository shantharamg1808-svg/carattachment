# ⚡ Quick Reference Guide

## 🚀 Common Commands

```bash
# Start development (auto-reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install dependencies
npm install

# Update dependencies
npm update

# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

---

## 📁 File Locations

| Task | File |
|------|------|
| Add new vehicle | `src/data/vehicleData.js` |
| Add category | `src/utils/formatters.js` |
| Change styling | `src/App.css` or component files |
| Modify search | `src/components/Header.jsx` |
| Update filters | `src/components/FiltersSection.jsx` |
| Change modal | `src/components/DetailModal.jsx` |

---

## 🧬 Component Import Template

```javascript
import React from 'react';
import { formatCurrency } from '../utils/formatters';
import { IconName } from 'lucide-react';

export default function ComponentName({ prop1, prop2 }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      {/* Component JSX */}
    </div>
  );
}
```

---

## 🎨 Common Tailwind Classes

### Colors
- **Indigo**: `indigo-*` (primary) - buttons, highlights
- **Slate**: `slate-*` (neutral) - text, backgrounds
- **Emerald**: `emerald-*` (success) - profits
- **Orange**: `orange-*` (warning) - future costs

### Spacing
- `p-4` = padding all sides
- `px-4` = padding left & right
- `py-4` = padding top & bottom
- `gap-4` = gap between flex items

### Responsive
- `sm:` - screens ≥ 640px
- `md:` - screens ≥ 768px
- `lg:` - screens ≥ 1024px

---

## 📝 Adding a New Vehicle - Step by Step

### Step 1: Open `src/data/vehicleData.js`

### Step 2: Add to array (following existing format):
```javascript
{
  id: 25,
  name: 'NEW_MODEL',
  category: 'SUV',
  fuel: 'PETROL',
  transmission: 'Manual',
  investment: 1000000,
  monthlyPayout: 30000,
  totalRevenue: 1080000,
  resaleValue: 400000,
  netProfit: 400000,
  breakdown: {
    exShowroom: 850000,
    insurance: 40000,
    roadTax: 70000,
    rto: 22000,
    gps: 27000,
    speedGov: 9000,
    docRenewal: 77400,
  }
}
```

### Step 3: Save and test
```bash
npm run dev  # See it live
```

---

## 🔍 State Management Flow

```
App.jsx State:
├── searchQuery        → Header
├── selectedCategory   → CategorySummary
├── filters            → FiltersSection
│   ├── budget
│   ├── transmission
│   └── fuel
├── selectedCar        → DetailModal
└── filteredData       → CarGrid
```

---

## 🐛 Debugging Tips

### Issue: Component not showing
```
1. Check imports in App.jsx
2. Verify component exists in src/components/
3. Check for typos in className
4. Open browser DevTools (F12)
```

### Issue: Styling not applying
```
1. Verify Tailwind class names (e.g., bg-slate-50)
2. Check for conflicting CSS in App.css
3. Rebuild: npm run build
4. Clear browser cache
```

### Issue: Filtering not working
```
1. Check formatters.js logic
2. Verify vehicle data in vehicleData.js
3. Check filter state in App.jsx
4. Use React DevTools to inspect state
```

---

## 🔄 Deployment Steps

### Step 1: Build
```bash
npm run build
```

### Step 2: Output
- Files generated in `dist/` folder
- Ready for production hosting

### Step 3: Deploy
- Upload `dist/` contents to hosting service
- Examples: Vercel, Netlify, GitHub Pages

---

## 📊 Customization Examples

### Change Primary Color (Indigo → Blue)
```bash
# Find & Replace in all component files:
- indigo- → blue-
```

### Add New Filter Option
```javascript
// In src/utils/formatters.js
export const NEW_OPTIONS = ['Option1', 'Option2'];

// In src/components/FiltersSection.jsx
<select value={filters.new} onChange={(e) => ...}>
  {NEW_OPTIONS.map(opt => <option key={opt}>{opt}</option>)}
</select>
```

### Hide Modal on Outside Click
```javascript
// Already implemented in DetailModal.jsx
<div onClick={() => setSelectedCar(null)}>
  {/* backdrop closes modal */}
</div>
```

---

## 📚 File Size Reference

| Item | Size |
|------|------|
| CSS (Tailwind) | 19.2 KB |
| JavaScript | 169 KB |
| HTML | 0.67 KB |
| **Total Build** | ~190 KB |

---

## ✅ Pre-Deployment Checklist

- [ ] All vehicles have correct data in `vehicleData.js`
- [ ] Filters working properly
- [ ] Modal displaying correctly
- [ ] Search functionality works
- [ ] Responsive on mobile/tablet/desktop
- [ ] No console errors (F12)
- [ ] Production build succeeds (`npm run build`)
- [ ] Images/assets optimized

---

## 🔗 Quick Links

- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **Lucide Icons**: https://lucide.dev
- **Vite**: https://vitejs.dev

---

## 💡 Pro Tips

1. **Use Vite's HMR** - Changes auto-reload (npm run dev)
2. **Tailwind IntelliSense** - Install VS Code extension
3. **React DevTools** - Debug state easily
4. **useMemo** - Prevents unnecessary recalculations
5. **Components** - Keep small and focused

---

## 🆘 Getting Help

### Documentation
- `README.md` - Quick start
- `PROJECT_GUIDE.md` - Comprehensive guide
- `FOLDER_STRUCTURE.md` - File organization

### Issues
1. Check existing documentation
2. Review similar components
3. Check browser console (F12)
4. Inspect React state with DevTools

---

**Version**: 1.0.0  
**Last Updated**: May 14, 2026
