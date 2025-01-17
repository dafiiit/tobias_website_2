import React from 'react';
import { Menu, Facebook, Twitter, Instagram, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-900">Über mich</a>
            <a href="#vision" className="text-gray-700 hover:text-blue-900">Vision</a>
            <a href="#program" className="text-gray-700 hover:text-blue-900">Programm</a>
            <a href="#news" className="text-gray-700 hover:text-blue-900">Aktuelles</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-900">Kontakt</a>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-900"><Facebook size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-blue-900"><Twitter size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-blue-900"><Instagram size={20} /></a>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Über mich</a>
            <a href="#vision" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Vision</a>
            <a href="#program" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Programm</a>
            <a href="#news" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Aktuelles</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Kontakt</a>
          </div>
        </div>
      )}
    </nav>
  );
}