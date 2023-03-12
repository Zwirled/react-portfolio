import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div class="container">
          <Routes>
            <Route path="/react-portfolio/" element={<Home />} end={true} />
            <Route path="/react-portfolio/about" element={<About />} />
            <Route path="/react-portfolio/projects" element={<Projects />} />
            <Route path="/react-portfolio/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;