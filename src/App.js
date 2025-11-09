import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Format from './sections/Format';
import Gallery from './sections/Gallery';
import Reviews from './sections/Reviews';
import FAQ from './sections/FAQ';
import Donations from './sections/Donations';
import Contact from './sections/Contact';
import Course3D from './pages/Course3D';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'course-3d':
        return <Course3D onBack={() => setCurrentPage('home')} />;
      default:
        return (
          <>
            <Hero />
            <About />
            <Format />
            <Gallery />
            <Reviews />
            <FAQ />
            <Donations />
            <Contact />
          </>
        );
    }
  };

  return (
    <BrowserRouter>
      <LanguageProvider>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          <Navigation 
            showBackButton={currentPage !== 'home'} 
            onBack={() => setCurrentPage('home')} 
          />
          {renderPage()}
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
