import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import SearchBox from './search-box/SearchBox';
import SearchResultBox from './search-result-box/SearchResultBox';
import StatBox from './stat-box/StatBox';
import IProductData from './interfaces/IProductData';
import IStatData from './interfaces/IStatData';

function HomePage() {
  const [product, updateProduct] = useState<IProductData>({
    generic_name_fr: '',
    generic_name_en: '',
    ingredients_text: '',
    nutriments: {
      'energy-kcal': 0,
    },
  });

  const [statData, updateStatData] = useState<IStatData>({
    calories: 0,
  });

  return (
    <div>
      <StatBox statData={statData} />
      <SearchBox updateProduct={updateProduct} />
      <SearchResultBox searchResult={product} statData={statData} updateStatData={updateStatData} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
