import React from 'react';
import { Recycle, Calendar, MapPin, Award, ArrowRight } from 'lucide-react';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <About />
      <Contact />
    </div>
  );
}

export default App;