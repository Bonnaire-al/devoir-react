import React from 'react';
import TopPage from '../components/TopPage.jsx';
import Card from '../components/Card.jsx'; 
import avocat from '../img/projet.avocat.jpg'; 
import appli from '../img/projet.appli.png'; 
import saas from '../img/projet.saas.jpg'; 

const Réalisations = () => {
  return (
    <div>
      <TopPage title="PORTFOLIO" subtitle="Voici quelques-unes de mes réalisations" />
      <div className="container">
        <div className="row text-center justify-content-center align-items-center g-4">
          <Card 
            imageSrc={avocat} 
            imageAlt="Homme d'affaire" 
            title="Site pour un cabinet" 
            text="Site vitrine pour un cabinet d'avocat spécialisé dans les contrats." 
            linkHref="https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070719/LEGISCTA000006165334/2021-10-10/" 
            linkText="voir" 
            footer="Wordpresse" 
          />
          <Card 
            imageSrc={appli} 
            imageAlt="Programmation" 
            title="Application de sécurité" 
            text="App de protection de données et Enregistrement téléphonique." 
            linkHref="https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070719/LEGISCTA000006165334/2021-10-10/" 
            linkText="voir" 
            footer="java/react" 
          />
          <Card 
            imageSrc={saas} 
            imageAlt="Réunion" 
            title="Saas pour un organisme" 
            text="Saas pour la gestion d'un organisme de formation, inscription/comptabilité/suivis..." 
            linkHref="https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070719/LEGISCTA000006165334/2021-10-10/" 
            linkText="voir" 
            footer="java/react" 
          />
        </div>
      </div>
    </div>
  );
};

export default Réalisations;
