import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OpenLetter from './pages/OpenLetter';
import TestPage from './pages/TestPage';
import SubjectsPage from './pages/SubjectsPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/open-letter" element={<OpenLetter />} />
            <Route path="/subjects" element={<SubjectsPage />} />
            <Route path="/tests/:company" element={<TestPage />} />
            <Route path="/tests/subject/:subjectId" element={<TestPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;