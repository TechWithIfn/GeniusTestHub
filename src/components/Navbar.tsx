import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600';
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">GeniusTestHub</span>
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link to="/" className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive('/')}`}>
              Home
            </Link>
            <Link to="/about" className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive('/about')}`}>
              About
            </Link>
            <Link to="/contact" className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive('/contact')}`}>
              Contact
            </Link>
            <Link to="/open-letter" className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive('/open-letter')}`}>
              Open Letter
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;