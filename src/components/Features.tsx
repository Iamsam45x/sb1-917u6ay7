import React from 'react';
import { MapPin, Calendar, Award } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Interactive Map',
    description: 'Easily locate nearby e-waste collection points and schedule pickups from your location.'
  },
  {
    icon: Calendar,
    title: 'Seamless Scheduling',
    description: 'Book your e-waste collection at your convenience with our simple scheduling system.'
  },
  {
    icon: Award,
    title: 'Impact Certificate',
    description: 'Receive a certificate acknowledging your contribution to environmental conservation.'
  }
];

export default function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We make e-waste disposal easy, efficient, and environmentally responsible.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <feature.icon className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}