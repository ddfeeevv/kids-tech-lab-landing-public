import React, { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Courses from './sections/Courses';
import Format from './sections/Format';
import Gallery from './sections/Gallery';
import Reviews from './sections/Reviews';
import FAQ from './sections/FAQ';
import Donations from './sections/Donations';
import Contact from './sections/Contact';
import Course3D from './pages/Course3D';
import CourseArduino from './pages/CourseArduino';
import CourseRobotics from './pages/CourseRobotics';
import CourseIT from './pages/CourseIT';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'course-3d':
        return <Course3D onBack={() => setCurrentPage('home')} />;
      case 'course-arduino':
        return <CourseArduino onBack={() => setCurrentPage('home')} />;
      case 'course-robotics':
        return <CourseRobotics onBack={() => setCurrentPage('home')} />;
      case 'course-it':
        return <CourseIT onBack={() => setCurrentPage('home')} />;
      default:
        return (
          <>
            <Hero />
            <About />
            <Courses onCourseSelect={setCurrentPage} />
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
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Navigation 
          showBackButton={currentPage !== 'home'} 
          onBack={() => setCurrentPage('home')} 
        />
        {renderPage()}
      </div>
    </LanguageProvider>
  );
}

export default App;
