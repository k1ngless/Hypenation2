import React, { useState } from 'react';
import { Plus, Edit3, Calendar, Tag } from 'lucide-react';

const TopicsSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [topics, setTopics] = useState([
    {
      id: 1,
      title: "Il Ritorno del Y2K: Trend o Nostalgia?",
      excerpt: "Analisi del fenomeno Y2K nella moda contemporanea e il suo impatto sulla Gen Z",
      category: "Trend Analysis",
      date: "2025-01-15"
    },
    {
      id: 2,
      title: "Sustainable Fashion: La Rivoluzione Verde",
      excerpt: "Come i brand stanno abbracciando la sostenibilità senza perdere lo stile",
      category: "Sustainability",
      date: "2025-01-12"
    }
  ]);

  const [newTopic, setNewTopic] = useState({
    title: '',
    excerpt: '',
    category: '',
    content: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTopic.title && newTopic.excerpt && newTopic.category) {
      setTopics([...topics, {
        ...newTopic,
        id: topics.length + 1,
        date: new Date().toISOString().split('T')[0]
      }]);
      setNewTopic({ title: '', excerpt: '', category: '', content: '' });
      setShowForm(false);
    }
  };

  return (
    <section id="topics" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
            I Miei <span className="text-purple-600">Topic</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Qui condivido le mie riflessioni sui trend, le novità del mondo fashion e tutto ciò che ispira il mio stile
          </p>
        </div>

        <div className="mb-12">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-lg flex items-center gap-2 mx-auto"
          >
            <Plus className="h-5 w-5" />
            Aggiungi Nuovo Topic
          </button>
        </div>

        {showForm && (
          <div className="bg-gray-50 rounded-2xl p-6 mb-12 border-2 border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Titolo</label>
                <input
                  type="text"
                  value={newTopic.title}
                  onChange={(e) => setNewTopic({...newTopic, title: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Inserisci il titolo del tuo topic..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Categoria</label>
                <select
                  value={newTopic.category}
                  onChange={(e) => setNewTopic({...newTopic, category: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Seleziona categoria</option>
                  <option value="Trend Analysis">Trend Analysis</option>
                  <option value="Street Style">Street Style</option>
                  <option value="Sustainability">Sustainability</option>
                  <option value="Brand Review">Brand Review</option>
                  <option value="Fashion Week">Fashion Week</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Anteprima</label>
                <textarea
                  value={newTopic.excerpt}
                  onChange={(e) => setNewTopic({...newTopic, excerpt: e.target.value})}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Breve descrizione del topic..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contenuto</label>
                <textarea
                  value={newTopic.content}
                  onChange={(e) => setNewTopic({...newTopic, content: e.target.value})}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Scrivi qui il contenuto completo del tuo articolo..."
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Pubblica
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Annulla
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {topics.map((topic) => (
            <div key={topic.id} className="bg-white rounded-2xl border-2 border-gray-100 p-6 hover:border-purple-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Tag className="h-3 w-3" />
                  {topic.category}
                </span>
                <span className="text-gray-500 text-sm flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {new Date(topic.date).toLocaleDateString('it-IT')}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{topic.title}</h3>
              <p className="text-gray-600 mb-4">{topic.excerpt}</p>
              <button className="text-purple-600 font-medium hover:text-purple-800 flex items-center gap-1">
                <Edit3 className="h-4 w-4" />
                Leggi di più
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;