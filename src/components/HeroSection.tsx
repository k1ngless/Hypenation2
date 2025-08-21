import React from 'react';
import { Sparkles, TrendingUp, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
              Benvenuti su{' '}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                HYPENATION
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Il punto di riferimento per la moda della nuova generazione. 
              Scopri i trend più hot, le ultime novità e lo stile che definisce il futuro.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/80 transition-all duration-300">
              <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Trend Alert</h3>
              <p className="text-gray-600">I trend più caldi del momento, sempre prima di tutti gli altri</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/80 transition-all duration-300">
              <Zap className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Street Style</h3>
              <p className="text-gray-600">Catturiamo l'essenza dello stile urbano e della cultura giovanile</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/80 transition-all duration-300">
              <Sparkles className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Future Fashion</h3>
              <p className="text-gray-600">Anticipiamo il futuro della moda con visioni innovative</p>
            </div>
          </div>

          <div className="space-y-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg">
              Esplora il Blog
            </button>
            <p className="text-gray-500 text-sm">
              "La moda è l'armatura per sopravvivere alla realtà quotidiana" - Bill Cunningham
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;