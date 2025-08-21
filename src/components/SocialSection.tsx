import React from 'react';
import { Instagram, Music, ExternalLink, Users, Heart, MessageCircle } from 'lucide-react';

const SocialSection = () => {
  return (
    <section id="social" className="py-20 bg-gradient-to-r from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
            Seguici sui <span className="text-pink-600">Social</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Non perdere mai un update! Connettiti con noi sui social per contenuti esclusivi e behind the scenes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Instagram Card */}
          <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 p-8 rounded-3xl text-white hover:scale-105 transition-transform duration-300 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <Instagram className="h-12 w-12" />
              <ExternalLink className="h-6 w-6 opacity-70" />
            </div>
            <h3 className="text-2xl font-bold mb-3">@hypenation_official</h3>
            <p className="text-white/90 mb-6">
              Outfit del giorno, fashion hauls, street style e molto altro. 
              La moda quotidiana raccontata attraverso i nostri occhi.
            </p>
            <div className="flex items-center gap-6 mb-6 text-sm">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>24.5K followers</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="h-4 w-4" />
                <span>1.2K avg likes</span>
              </div>
            </div>
            <a 
              href="https://instagram.com/hypenation_official" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full font-bold hover:bg-white/30 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              Seguici su Instagram
            </a>
          </div>

          {/* TikTok Card */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 p-8 rounded-3xl text-white hover:scale-105 transition-transform duration-300 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <Music className="h-12 w-12" />
              <ExternalLink className="h-6 w-6 opacity-70" />
            </div>
            <h3 className="text-2xl font-bold mb-3">@hypenation</h3>
            <p className="text-white/90 mb-6">
              Fashion tips, style challenges, trend predictions e contenuti virali. 
              Il lato più dinamico e creativo del nostro brand.
            </p>
            <div className="flex items-center gap-6 mb-6 text-sm">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>89.2K followers</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="h-4 w-4" />
                <span>3.4K avg likes</span>
              </div>
            </div>
            <a 
              href="https://tiktok.com/@hypenation" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full font-bold hover:bg-white/30 transition-colors"
            >
              <Music className="h-5 w-5" />
              Seguici su TikTok
            </a>
          </div>
        </div>

        {/* Social Feed Preview */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">I Nostri Ultimi Post</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg",
              "https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg",
              "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg",
              "https://images.pexels.com/photos/1624535/pexels-photo-1624535.jpeg"
            ].map((image, index) => (
              <div key={index} className="aspect-square rounded-xl overflow-hidden group cursor-pointer">
                <img
                  src={image}
                  alt={`Social post ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-white/40">
            <MessageCircle className="h-8 w-8 text-purple-600 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-gray-900 mb-2">Hai una domanda di stile?</h4>
            <p className="text-gray-600 mb-4">
              Tagga @hypenation_official nelle tue foto o mandaci un DM per consigli personalizzati!
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform">
                Chiedi Consiglio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;