import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Foote';
import Accueil from './pages/Home';
import Services from './pages/Services';
import Realisations from './pages/Réalisations';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Mention from './pages/Mention';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/services" element={<Services />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Mention-legale" element={<Mention />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

