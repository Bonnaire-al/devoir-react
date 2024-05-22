import React from 'react';
import './style2.css';
import johnDoePhoto from '../img/photo.png';

export const Home = () => {
  return (
    <div>
      <section className="hero">
        <div className="container ">
          <div className="row align-items-center bloc1" >
            <div className="col-md-12 text-center ">
              <h1>Bonjour, je suis Jhon Doe</h1>
              <h2>Developpeurs full stack</h2>
              <a className="btn btn-primary text-center" href="#about" role="button">En savoir plus</a>
           </div>
         </div>
       </div>
      </section>
      <section id="about" className="about-section">
        <div className="container px-5 bloc2">
         <div className="row gx-4 bloc3">
           <div className="col-sm-12 col-md-6">
             <h2 >À propos</h2>
             <div className="text">
               <p>Je suis John Doe, un développeur web passionné avec une expertise en design et en développement de sites web modernes. <br />
               Je suis un développeur Web Full Stack passionné par la création de solutions innovantes et fonctionnelles pour répondre aux besoins des clients. <br /> 
               Avec une solide expérience dans le développement front-end, back-end et la gestion de bases de données, <br /> 
               je suis capable de concevoir et de mettre en œuvre des applications Web de haute qualité, de la conception initiale à la mise en production.
               </p>
             </div>
           </div>
           <div className="col-sm-12 col-md-6">
             <img src={johnDoePhoto} alt="John Doe" className="img-fluid img-thumbnail" />
             <h2>Mes Compétences</h2>
             <div className="progress">
               <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">HTML - 80%</div>
             </div>
             <div className="progress">
               <div className="progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">JavaScript - 70%</div>
             </div>
             <div className="progress">
               <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">React - 90%</div>
             </div>
             <div className="progress">
               <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">CSS - 80%</div>
             </div>
             <div className="progress">
               <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">Python - 80%</div>
             </div>
           </div>
         </div>
        </div>
      </section>
    </div>
  );
};

export default Home;