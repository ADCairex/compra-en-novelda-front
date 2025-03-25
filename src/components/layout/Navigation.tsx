import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ShoppingCart, Store } from 'lucide-react';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-top">
      <div className="flex justify-around py-3">
        <Link to="/" className="flex flex-col items-center">
          <Home size={24} />
          <span>Inicio</span>
        </Link>
        <Link to="/productos" className="flex flex-col items-center">
          <Store size={24} />
          <span>Productos</span>
        </Link>
        <Link to="/carrito" className="flex flex-col items-center">
          <ShoppingCart size={24} />
          <span>Carrito</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;