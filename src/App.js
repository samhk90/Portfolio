import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import './index.css'; 
import Nav from './components/Nav';
import About from './components/About';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Project from './components/Project';
import SkillCard from './components/SkillCard';

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname === '/about' && <Nav />}
      {location.pathname === '/contact' && <Nav />}
      {location.pathname === '/resume' && <Nav />}
      {location.pathname=== '/project' && <Nav />}
      {location.pathname=== '/about' && <About />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<SkillCard />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;
