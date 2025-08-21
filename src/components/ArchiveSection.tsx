import React from 'react';
import { Archive, Clock, Eye, Heart } from 'lucide-react';

const ArchiveSection = () => {
  const archiveArticles = [
    {
      id: 1,
      title: "Decostruzione del Luxury Streetwear",
      excerpt: "Un'analisi profonda di come i brand di lusso stanno interpretando lo streetwear",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg",
      date: "2025-01-10",
      views: 1234,
      likes: 89,
      category: "Luxury Fashion"
    },
    {
      id: 2,
      title: "Milano Fashion Week: I Highlight",
      excerpt: "Le collezioni che hanno definito la settimana della moda milanese",
      image: "https://images.pexels.com/photos/1496647/pexels-photo-1496647.jpeg",
      date: "2025-01-08",
      views: 2145,
      likes: 156,
      category: "Fashion Week"
    },
    {
      id: 3,
      title: "Gen Z e Fast Fashion: Amore o Odio?",
      excerpt: "Il complesso rapporto tra i giovani consumatori e la fast fashion",
      image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg",
      date: "2025-01-05",
      views: 1876,
      likes: 134,
      category: "Cultural Analysis"
    },
    {
      id: 4,
      title: "Tendenze Colore Primavera 2025",
      excerpt: "I colori che domineranno la prossima stagione secondo i trend forecaster",
      image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg",
      date: "2025-01-03",
      views: 987,
      likes: 78,
      category: "Color Trends"
    },
    {
      id: 5,
      title: "Inclusività nel Fashion: Progressi e Sfide",
      excerpt: "Come l'industria della moda sta affrontando temi di diversità e inclusione",
      image: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg",
      date: "2025-01-01",
      views: 1543,
      likes: 201,
      category: "Social Impact"
    },
    {
      id: 6,
      title: "Digital Fashion: Il Futuro è Virtuale?",
      excerpt: "Esplorando il mondo della moda digitale e degli NFT fashion",
      image: "https://images.pexels.com/photos/1661471/pexels-photo-1661471.jpeg",
      date: "2024-12-28",
      views: 2234,
      likes: 167,
      category: "Digital Innovation"
    }
  ];

  return (
    <section id="archive" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
            <Archive className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
            Archivio <span className="text-blue-600">Articoli</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Esplora tutti gli articoli precedenti del blog, organizzati per data e categoria
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {archiveArticles.map((article) => (
            <article key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="aspect-w-16 aspect-h-12 bg-gray-200 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <Clock className="h-3 w-3" />
                    {new Date(article.date).toLocaleDateString('it-IT')}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {article.views.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      {article.likes}
                    </span>
                  </div>
                  <button className="text-blue-600 font-medium hover:text-blue-800 text-sm">
                    Leggi →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-lg">
            Carica Altri Articoli
          </button>
        </div>
      </div>
    </section>
  );
};

export default ArchiveSection;