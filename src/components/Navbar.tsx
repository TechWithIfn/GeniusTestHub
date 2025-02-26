import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600';
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Brain className="h-10 w-10 text-blue-600" />
              <span className="ml-3 text-2xl font-bold text-gray-900">GeniusTestHub</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className={`inline-flex items-center px-3 py-2 text-base font-medium ${isActive('/')}`}>
              Home
            </Link>
            <Link to="/about" className={`inline-flex items-center px-3 py-2 text-base font-medium ${isActive('/about')}`}>
              About
            </Link>
            <Link to="/contact" className={`inline-flex items-center px-3 py-2 text-base font-medium ${isActive('/contact')}`}>
              Contact
            </Link>
            <Link to="/open-letter" className={`inline-flex items-center px-3 py-2 text-base font-medium ${isActive('/open-letter')}`}>
              Open Letter
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/contact')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/open-letter"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/open-letter')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Open Letter
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;