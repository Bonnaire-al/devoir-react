import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.css';


const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary my-custom-nav">
        <div className="container-fluid s1">
          <Link to="/" className="navbar-brand">
             <h1 className="logo">John Doe</h1>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/" className={`nav-link ${isActive('/')}`}>Accueil</Link>
              <Link to="/services" className={`nav-link ${isActive('/services')}`}>Services</Link>
              <Link to="/realisations" className={`nav-link ${isActive('/realisations')}`}>Réalisations</Link>
              <Link to="/blog" className={`nav-link ${isActive('/blog')}`}>Blog</Link>
              <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Me Contacter</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
