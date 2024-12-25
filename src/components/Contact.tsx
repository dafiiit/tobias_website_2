import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-16">Kontakt</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="glass rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-blue-900 mb-6">Schreiben Sie mir</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-Mail</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Nachricht</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
              >
                Nachricht senden
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="glass rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-blue-900 mb-6">Kontaktdaten</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-900" />
                  <span>tobias.scherf@stadt.de</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-900" />
                  <span>+49 (0) 123 456789</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-900" />
                  <span>Rathaus, Marktplatz 1<br />12345 Stadt</span>
                </div>
              </div>
            </div>
            
            <div className="glass rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-blue-900 mb-6">Bürgersprechstunde</h3>
              <p className="text-gray-600">
                Jeden Donnerstag von 14:00 - 17:00 Uhr<br />
                Terminvereinbarung erwünscht
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}