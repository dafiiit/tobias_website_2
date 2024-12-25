import React from 'react';
import { Landmark } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Landmark className="w-8 h-8 text-blue-900" />
      <span className="text-xl font-bold text-blue-900">Tobias Scherf</span>
    </div>
  );
}