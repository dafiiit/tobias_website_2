import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface NewsDetailProps {
  news: {
    date: string;
    title: string;
    description: string;
    image: string;
    content: string;
  };
  onBack: () => void;
}

export default function NewsDetail({ news, onBack }: NewsDetailProps) {
  return (
    <div className="glass rounded-xl overflow-hidden">
      <img src={news.image} alt={news.title} className="w-full h-64 object-cover" />
      <div className="p-8">
        <button 
          onClick={onBack}
          className="flex items-center text-blue-900 hover:text-blue-700 mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Zurück zur Übersicht
        </button>
        <span className="text-sm text-blue-900 font-semibold">{news.date}</span>
        <h2 className="text-2xl font-semibold text-blue-900 mt-2 mb-4">{news.title}</h2>
        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 mb-4">{news.description}</p>
          <p className="text-gray-600">{news.content}</p>
        </div>
      </div>
    </div>
  );
}