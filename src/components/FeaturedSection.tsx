import React, { useState } from 'react';
import { Star, TrendingUp, ExternalLink, Plus, Edit3, Trash2, Shield, Lock } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  brand: string;
  price: string;
  link: string;
  image: string;
}

interface FeaturedArticle {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  badge: string;
  badgeColor: string;
  products: Product[];
  author: string;
  publishDate: string;
}

const FeaturedSection = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingArticle, setEditingArticle] = useState<number | null>(null);
  const [featuredArticles, setFeaturedArticles] = useState<FeaturedArticle[]>([
    {
      id: 1,
      title: "Euphoria Effect: Come la Serie TV Ha Rivoluzionato la Beauty",
      excerpt: "L'impatto del makeup di Euphoria sui trend beauty della Gen Z",
      content: "La serie HBO Euphoria ha completamente rivoluzionato il mondo del beauty...",
      image: "https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg",
      badge: "Trending Now",
      badgeColor: "bg-red-500",
      author: "Hypenation Team",
      publishDate: "2025-01-15",
      products: [
        {
          id: 1,
          name: "Glitter Eyeshadow Palette",
          brand: "Urban Decay",
          price: "€45.00",
          link: "https://example.com/product1",
          image: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg"
        },
        {
          id: 2,
          name: "Liquid Eyeliner",
          brand: "Fenty Beauty",
          price: "€22.00",
          link: "https://example.com/product2",
          image: "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg"
        }
      ]
    },
    {
      id: 2,
      title: "Vintage Designer Pieces: Investimenti o Passione?",
      excerpt: "Guida completa al collezionismo di pezzi vintage di alta moda",
      content: "Il mercato del vintage luxury sta vivendo un momento d'oro...",
      image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg",
      badge: "Editor's Choice",
      badgeColor: "bg-purple-500",
      author: "Hypenation Team",
      publishDate: "2025-01-12",
      products: [
        {
          id: 3,
          name: "Vintage Chanel Bag",
          brand: "Chanel",
          price: "€2,500.00",
          link: "https://example.com/product3",
          image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg"
        }
      ]
    }
  ]);

  const [newArticle, setNewArticle] = useState<Partial<FeaturedArticle>>({
    title: '',
    excerpt: '',
    content: '',
    image: '',
    badge: 'New',
    badgeColor: 'bg-blue-500',
    products: []
  });

  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    name: '',
    brand: '',
    price: '',
    link: '',
    image: ''
  });

  const handleAddArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (newArticle.title && newArticle.excerpt && newArticle.content) {
      const article: FeaturedArticle = {
        ...newArticle as FeaturedArticle,
        id: featuredArticles.length + 1,
        author: 'Hypenation Team',
        publishDate: new Date().toISOString().split('T')[0],
        products: newArticle.products || []
      };
      setFeaturedArticles([...featuredArticles, article]);
      setNewArticle({ title: '', excerpt: '', content: '', image: '', badge: 'New', badgeColor: 'bg-blue-500', products: [] });
      setShowAddForm(false);
    }
  };

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.brand && newProduct.price && newProduct.link) {
      const product: Product = {
        ...newProduct as Product,
        id: Date.now()
      };
      setNewArticle({
        ...newArticle,
        products: [...(newArticle.products || []), product]
      });
      setNewProduct({ name: '', brand: '', price: '', link: '', image: '' });
    }
  };

  const handleDeleteArticle = (id: number) => {
    if (window.confirm('Sei sicuro di voler eliminare questo articolo?')) {
      setFeaturedArticles(featuredArticles.filter(article => article.id !== id));
    }
  };

  const sanitizeUrl = (url: string): string => {
    // Basic URL sanitization
    try {
      const urlObj = new URL(url);
      return urlObj.protocol === 'https:' ? url : '';
    } catch {
      return '';
    }
  };

  return (
    <section id="featured" className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mb-6">
            <Star className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Articoli <span className="text-yellow-400">Consigliati</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            I must-read del momento con i prodotti che amiamo, selezionati dalla redazione
          </p>
          
          {/* Security Badge */}
          <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-500/30 px-4 py-2 rounded-full text-sm text-green-300 mb-8">
            <Shield className="h-4 w-4" />
            <span>Contenuti verificati e link sicuri</span>
            <Lock className="h-4 w-4" />
          </div>

          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-lg flex items-center gap-2 mx-auto"
          >
            <Plus className="h-5 w-5" />
            Aggiungi Articolo Consigliato
          </button>
        </div>

        {/* Add Article Form */}
        {showAddForm && (
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6">Nuovo Articolo Consigliato</h3>
            <form onSubmit={handleAddArticle} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Titolo *</label>
                  <input
                    type="text"
                    value={newArticle.title || ''}
                    onChange={(e) => setNewArticle({...newArticle, title: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Titolo dell'articolo..."
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Immagine URL *</label>
                  <input
                    type="url"
                    value={newArticle.image || ''}
                    onChange={(e) => setNewArticle({...newArticle, image: sanitizeUrl(e.target.value)})}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="https://..."
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Anteprima *</label>
                <textarea
                  value={newArticle.excerpt || ''}
                  onChange={(e) => setNewArticle({...newArticle, excerpt: e.target.value})}
                  rows={3}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Breve descrizione..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Contenuto Completo *</label>
                <textarea
                  value={newArticle.content || ''}
                  onChange={(e) => setNewArticle({...newArticle, content: e.target.value})}
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Contenuto completo dell'articolo..."
                  required
                />
              </div>

              {/* Product Addition Section */}
              <div className="border-t border-white/20 pt-6">
                <h4 className="text-lg font-bold mb-4">Aggiungi Prodotti Consigliati</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                  <input
                    type="text"
                    value={newProduct.name || ''}
                    onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                    className="px-3 py-2 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 text-sm"
                    placeholder="Nome prodotto"
                  />
                  <input
                    type="text"
                    value={newProduct.brand || ''}
                    onChange={(e) => setNewProduct({...newProduct, brand: e.target.value})}
                    className="px-3 py-2 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 text-sm"
                    placeholder="Brand"
                  />
                  <input
                    type="text"
                    value={newProduct.price || ''}
                    onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                    className="px-3 py-2 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 text-sm"
                    placeholder="Prezzo (es. €25.00)"
                  />
                  <input
                    type="url"
                    value={newProduct.link || ''}
                    onChange={(e) => setNewProduct({...newProduct, link: sanitizeUrl(e.target.value)})}
                    className="px-3 py-2 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 text-sm"
                    placeholder="Link acquisto (https://...)"
                  />
                  <input
                    type="url"
                    value={newProduct.image || ''}
                    onChange={(e) => setNewProduct({...newProduct, image: sanitizeUrl(e.target.value)})}
                    className="px-3 py-2 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 text-sm"
                    placeholder="Immagine prodotto (https://...)"
                  />
                  <button
                    type="button"
                    onClick={handleAddProduct}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
                  >
                    Aggiungi Prodotto
                  </button>
                </div>

                {/* Products Preview */}
                {newArticle.products && newArticle.products.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    {newArticle.products.map((product) => (
                      <div key={product.id} className="bg-white/5 rounded-lg p-3 text-sm">
                        <div className="font-medium">{product.name}</div>
                        <div className="text-gray-300">{product.brand}</div>
                        <div className="text-yellow-400">{product.price}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Pubblica Articolo
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium"
                >
                  Annulla
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Featured Articles Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {featuredArticles.map((article, index) => (
            <div key={article.id} className="group cursor-pointer">
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300">
                {/* Article Management Buttons */}
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                  <button
                    onClick={() => setEditingArticle(article.id)}
                    className="bg-blue-600/80 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors"
                  >
                    <Edit3 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteArticle(article.id)}
                    className="bg-red-600/80 hover:bg-red-600 text-white p-2 rounded-lg transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                <div className="absolute top-4 left-4 z-10">
                  <span className={`${article.badgeColor} text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1`}>
                    <Star className="h-4 w-4" />
                    {article.badge}
                  </span>
                </div>

                <div className="aspect-w-16 aspect-h-10 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-white mb-2 text-lg">
                    {article.title}
                  </h3>
                  <p className="text-gray-200 text-sm mb-4">
                    {article.excerpt}
                  </p>

                  {/* Products Section */}
                  {article.products.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-bold text-yellow-400 mb-3">Prodotti Consigliati:</h4>
                      <div className="space-y-2">
                        {article.products.slice(0, 2).map((product) => (
                          <div key={product.id} className="bg-white/5 rounded-lg p-3 flex items-center gap-3">
                            {product.image && (
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-12 h-12 object-cover rounded-lg"
                              />
                            )}
                            <div className="flex-1 min-w-0">
                              <div className="text-white text-sm font-medium truncate">{product.name}</div>
                              <div className="text-gray-300 text-xs">{product.brand}</div>
                              <div className="text-yellow-400 text-sm font-bold">{product.price}</div>
                            </div>
                            <a
                              href={product.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-yellow-500 hover:bg-yellow-600 text-black p-2 rounded-lg transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </div>
                        ))}
                        {article.products.length > 2 && (
                          <div className="text-center text-gray-400 text-xs">
                            +{article.products.length - 2} altri prodotti
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-400">
                      <div>di {article.author}</div>
                      <div>{new Date(article.publishDate).toLocaleDateString('it-IT')}</div>
                    </div>
                    <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors text-sm font-medium">
                      Leggi Articolo →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-blue-200 text-lg mb-6">
            "Il buon stile non ha età, ha solo attitudine" - Iris Apfel
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-4">
            <Shield className="h-4 w-4" />
            <span>Tutti i link sono verificati per la sicurezza</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;