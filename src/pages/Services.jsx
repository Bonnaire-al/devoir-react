import React from 'react';
import TopPage from '../components/TopPage.jsx';
import './style2.css'
import loupe from '../img/loupe.png'
import ecran from '../img/ecran.png'
import page from '../img/page-web.png'


const Services = () => {
  return (
    <div>
      <TopPage title="MON OFFRE DE SERVICES" subtitle="Voici les prestations sur lesquelles je peux intervenir" />
      <div className="container ">
        <div className="row text-center justify-content-center">
          <div className="col-md-3 me-4 bloc5">
            <img src={ecran} alt="UX Design Logo" className="service-logo mb-3 img-fluid" />
            <h5 className="fs-5">UX DESIGN</h5>
            <p className="fs-6">Nous créons des expériences utilisateur exceptionnelles avec des designs intuitifs et attractifs.</p>
          </div>
          <div className="col-md-3 me-4  bloc5">
            <img src={page} alt="Web Development Logo" className="service-logo mb-3 img-fluid" />
            <h5 className="fs-5">DEVELOPPEMENT WEB</h5>
            <p className="fs-6">Développement de sites web modernes et performants, adaptés à vos besoins spécifiques.</p>
          </div>
          <div className="col-md-3 bloc5">
            <img src={loupe} alt="SEO Logo" className="service-logo mb-3 img-fluid" />
            <h5 className="fs-5">REFERENCEMENT</h5>
            <p className="fs-6">Optimisation pour les moteurs de recherche pour améliorer votre visibilité en ligne.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
