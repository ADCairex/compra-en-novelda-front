import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import ProductsPage from '@/pages/ProductsPage';
import CartPage from '@/pages/CartPage';
import Navigation from '@/components/layout/Navigation';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<ProductsPage />} />
          <Route path="/carrito" element={<CartPage />} />
        </Routes>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;