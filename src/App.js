import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Courses from './sections/Courses';
import Format from './sections/Format';
import Gallery from './sections/Gallery';
import Reviews from './sections/Reviews';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Course3D from './pages/Course3D';
import CourseArduino from './pages/CourseArduino';
import CourseRobotics from './pages/CourseRobotics';
import CourseIT from './pages/CourseIT';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
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

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/course/3d" element={<Course3D />} />
          <Route path="/course/arduino" element={<CourseArduino />} />
          <Route path="/course/robotics" element={<CourseRobotics />} />
          <Route path="/course/it" element={<CourseIT />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
