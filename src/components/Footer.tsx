import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              HYPENATION
            </h3>
          </div>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Il futuro della moda inizia qui. Siamo una community di creativi, sognatori e innovatori 
            che credono nel potere della moda di trasformare e ispirare.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-4">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" fill="currentColor" />
            <span>by the Hypenation Team</span>
            <Sparkles className="h-4 w-4 text-yellow-400" />
          </div>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm">
              © 2025 Hypenation. Tutti i diritti riservati. | 
              <span className="mx-2">Privacy Policy</span> | 
              <span className="mx-2">Terms of Service</span>
            </p>
            <p className="text-gray-600 text-xs mt-2">
              "La moda è architettura: è una questione di proporzioni." - Coco Chanel
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;