import React from 'react';
import { Recycle } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-green-50">
      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-col items-center text-center">
          <Recycle className="w-16 h-16 text-green-600 mb-6" />
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            E-Waste Revive
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Sustainable Solutions for a Cleaner Future. Join us in our mission to properly collect and recycle electronic waste for a better environment.
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors">
            Schedule Pickup
          </button>
        </div>
      </div>
    </div>
  );
}