import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className="footer">
      <div className="container bloc">
        <div className="row">
          <article className="col-sm-12 col-md-6 col-lg-3 footer-column">
            <h4>John Doe</h4>
            <p>123 Main St, Anytown, USA <br />
              06.66.89.87.00</p>
            <div className="social-icons">
              <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </article>
          <article className="col-sm-12 col-md-6 col-lg-3 footer-column">
            <h4>Pages</h4>
            <ul className="list-unstyled">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/Mention-legale">Mention Legale</Link></li>
              
            </ul>
          </article>
          <article className="col-sm-12 col-md-6 col-lg-3 footer-column">
            <h4>Réalisations</h4>
            <ul className="list-unstyled">
              <li><Link to="/realisations">Project 1</Link></li>
              <li><Link to="/realisations">Project 2</Link></li>
              <li><Link to="/realisations">Project 2</Link></li>
            </ul>
          </article>
          <article className="col-sm-12 col-md-6 col-lg-3 footer-column">
            <h4>Articles de Blog</h4>
            <ul className="list-unstyled">
              <li><Link to="/blog">Post 1</Link></li>
              <li><Link to="/blog">Post 2</Link></li>
              <li><Link to="/blog/#se positioner">Post 3</Link></li>
            </ul>
          </article>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} John Doe. Tous droits réservés.</p>
        {showScrollTop && (
          <Link to="#" className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Haut de page
          </Link>
        )}
      </div>
    </footer>
  );
};

export default Footer;
