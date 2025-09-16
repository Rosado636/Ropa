'use client';

import { useState } from 'react';
import { Search, ShoppingBag, Menu, X, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((v) => !v);
  const toggleSearch = () => setIsSearchOpen((v) => !v);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button (hamburger) */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">Ropa</h1>
          </div>

          {/* Desktop navigation (visible ≥ md) */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-900 hover:text-gray-600 transition-colors font-medium"
            >
              New Arrivals
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-gray-600 transition-colors font-medium"
            >
              Women
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-gray-600 transition-colors font-medium"
            >
              Men
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-gray-600 transition-colors font-medium"
            >
              Accessories
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-gray-600 transition-colors font-medium"
            >
              Sale
            </a>
          </nav>

          {/* Right-side icons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleSearch}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              aria-label="Toggle search"
            >
              <Search size={20} />
            </button>

            <button
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              aria-label="Account"
            >
              <User size={20} />
            </button>

            <button
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>

        {/* Search bar (toggles) */}
        {isSearchOpen && (
          <div className="py-4 border-t border-gray-200">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>
        )}

        {/* Mobile navigation (visible < md) */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-gray-900 hover:text-gray-600 transition-colors font-medium"
              >
                New Arrivals
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-gray-600 transition-colors font-medium"
              >
                Women
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-gray-600 transition-colors font-medium"
              >
                Men
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-gray-600 transition-colors font-medium"
              >
                Accessories
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-gray-600 transition-colors font-medium"
              >
                Sale
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
