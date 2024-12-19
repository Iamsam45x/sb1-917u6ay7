import React from 'react';

export default function Contact() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Contact Us</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}