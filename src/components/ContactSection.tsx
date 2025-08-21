import React, { useState } from 'react';
import { Mail, MessageSquare, Send, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Messaggio inviato con successo! Ti risponderemo presto.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
            <Mail className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Contatta <span className="text-purple-400">Hypenation</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hai una domanda, una proposta di collaborazione o semplicemente vuoi dire ciao? 
            Siamo qui per te!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Parliamo di Moda!</h3>
              <p className="text-gray-300 text-lg mb-8">
                Che tu sia un brand, un influencer, un fotografo o semplicemente un appassionato di moda, 
                ci piacerebbe conoscerti e scoprire come possiamo collaborare insieme.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <p className="text-gray-300">hello@hypenation.com</p>
                  <p className="text-gray-400 text-sm">Rispondiamo entro 24 ore</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-pink-600 p-3 rounded-lg">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Collaborazioni</h4>
                  <p className="text-gray-300">partnerships@hypenation.com</p>
                  <p className="text-gray-400 text-sm">Per proposte business e partnership</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Sede</h4>
                  <p className="text-gray-300">Milano, Italia</p>
                  <p className="text-gray-400 text-sm">Il cuore della moda italiana</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/30 rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-3">Interessato alle collaborazioni?</h4>
              <p className="text-gray-300 text-sm mb-4">
                Stiamo sempre cercando nuovi talenti, brand innovativi e creatori di contenuti 
                che condividano la nostra passione per la moda della nuova generazione.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-600/20 border border-purple-500/30 px-3 py-1 rounded-full text-sm">Brand Partnership</span>
                <span className="bg-pink-600/20 border border-pink-500/30 px-3 py-1 rounded-full text-sm">Content Creator</span>
                <span className="bg-blue-600/20 border border-blue-500/30 px-3 py-1 rounded-full text-sm">Photographer</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Il tuo nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="la.tua@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Oggetto *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                >
                  <option value="">Seleziona un oggetto</option>
                  <option value="collaboration">Proposta di Collaborazione</option>
                  <option value="feedback">Feedback sul Blog</option>
                  <option value="question">Domanda di Stile</option>
                  <option value="press">Richiesta Stampa</option>
                  <option value="other">Altro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Messaggio *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Racconta la tua idea, facci una domanda o semplicemente salutaci..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Invia Messaggio
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;