import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css'; 
import Nav from './components/Nav';
import About from './components/About';
import Banner from './components/Banner';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div>
        <Banner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
