import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from "react";
import SearchBox from './components/search-box/SearchBox';
import SearchResultBox from './components/search-result-box/SearchResultBox';
import StatBox from './components/stat-box/StatBox';
import IProductData from './interfaces/IProductData';
import IStatData from './interfaces/IStatData';
import StatsService from './services/StatsService';
import ProductService from './services/ProductService';
import ProductHistory from './components/product-history/ProductHistory';

function HomePage() {
  const statsService = StatsService.getInstance();
  const productService = ProductService.getInstance();

  const [product, updateProduct] = useState<IProductData>(
    ProductService.dataTemplate,
  );

  const [statData, updateStatData] = useState<IStatData>(
    statsService.retrieveStats(),
  );

  const [productHistory, updateProductHistory] = useState<IProductData[]>(
    productService.retrieveProductHistory(),
  );

  return (
    <div className="container">
      <div>
        <StatBox statData={statData} updateStatData={updateStatData} />
        <SearchBox updateProduct={updateProduct} />
        <SearchResultBox
          searchResult={product}
          statData={statData}
          updateStatData={updateStatData}
          productHistory={productHistory}
          updateProductHistory={updateProductHistory}
        />
      </div>
      <ProductHistory history={productHistory} />
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
