import React from 'react';

export default function About() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our Mission</h2>
          <p className="text-gray-600 mb-8">
            E-waste is one of the fastest-growing environmental problems globally. Through our service,
            we aim to connect recycling organizations with the general public, making e-waste disposal
            accessible and efficient while protecting our environment.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Environmental Impact</h3>
              <p className="text-gray-600">
                Proper e-waste disposal prevents harmful substances from contaminating our soil and water,
                while enabling the recovery of valuable materials for sustainable manufacturing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Sustainable Development</h3>
              <p className="text-gray-600">
                We contribute to SDG 12 by promoting responsible consumption and production through
                efficient e-waste management and recycling practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}