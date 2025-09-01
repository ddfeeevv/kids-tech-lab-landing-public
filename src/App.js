import React from 'react';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Courses from './sections/Courses';
import Format from './sections/Format';
import Gallery from './sections/Gallery';
import Reviews from './sections/Reviews';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />
      <Hero />
      <About />
      <Courses />
      <Format />
      <Gallery />
      <Reviews />
      <FAQ />
      <Contact />
    </div>
  );
}

export default App;
