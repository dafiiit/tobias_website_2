import React from 'react';

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80"
          alt="City Hall"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="backdrop-blur-lg bg-white/30 rounded-3xl p-8 md:p-12 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Tobias Scherf
          </h1>
          <p className="text-xl md:text-2xl text-white font-light mb-8">
            Unser Bürgermeister für alle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#vision" className="inline-block px-8 py-3 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors">
              Meine Vision
            </a>
            <a href="#contact" className="inline-block px-8 py-3 bg-white text-blue-900 rounded-full hover:bg-gray-100 transition-colors">
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}