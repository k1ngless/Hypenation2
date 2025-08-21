import React, { useState } from 'react';
import { Menu, X, Instagram, Music } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              HYPENATION
            </h1>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
              <a href="#topics" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">I Miei Topic</a>
              <a href="#archive" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Archivio</a>
              <a href="#featured" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Consigliati</a>
              <a href="#social" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Social</a>
              <a href="#contact" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Contatti</a>
            </div>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <a href="#home" className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium">Home</a>
            <a href="#topics" className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium">I Miei Topic</a>
            <a href="#archive" className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium">Archivio</a>
            <a href="#featured" className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium">Consigliati</a>
            <a href="#social" className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium">Social</a>
            <a href="#contact" className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium">Contatti</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;