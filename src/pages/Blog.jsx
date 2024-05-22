import React from 'react';
import TopPage from '../components/TopPage.jsx';
import Card from '../components/Card.jsx'; 
import code from '../img/img-blog/code.HC.jpg'; 
import shop from '../img/img-blog/e-shop.jpg'; 
import program from '../img/img-blog/programation.jpg'; 
import recherche from '../img/img-blog/recherche.jpg'; 
import responsive from '../img/img-blog/reponsive.jpg'; 
import seo from '../img/img-blog/seo.jpg'; 

const Blog = () => {
  return (
    <div>
      <TopPage title="BLOG" subtitle="Retrouvez ici quelques articles sur le dev web" />
      <div className="container">
        <div className="row text-center justify-content-center align-items-center g-4">
          <Card 
            imageSrc={code} 
            imageAlt="code" 
            title="Coder en html/css " 
            text="Some quick example text to build on the card title and make up the bulk of the card's content." 
            linkHref="https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070719/LEGISCTA000006165334/2021-10-10/" 
            linkText="Lire la suite" 
            footer="Publier le 29/02/2024" 
          />
          <Card 
            imageSrc={shop} 
            imageAlt="ecran.shopping" 
            title="Vendre ses produits " 
            text="Some quick example text to build on the card title and make up the bulk of the card's content." 
            linkHref="https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070719/LEGISCTA000006165334/2021-10-10/" 
            linkText="Lire la suite" 
            footer="Publier le 29/02/2024" 
          />
          <Card 
            imageSrc={program} 
            imageAlt="programation" 
            title="Apprendre a coder" 
            text="Some quick example text to build on the card title and make up the bulk of the card's content." 
            linkHref="https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070719/LEGISCTA000006165334/2021-10-10/" 
            linkText="Lire la suite" 
            footer="Publier le 29/02/2024" 
          />
          <Card 
            id="se positioner"
            imageSrc={recherche} 
            imageAlt="pc.portable" 
            title="Se positionner " 
            text="Some quick example text to build on the card title and make up the bulk of the card's content." 
            linkHref="https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070719/LEGISCTA000006165334/2021-10-10/" 
            linkText="Lire la suite" 
            footer="WPublier le 29/02/2024" 
          />
          <Card 
            imageSrc={responsive} 
            imageAlt="different.ecran" 
            title="Responsive design" 
            text="Some quick example text to build on the card title and make up the bulk of the card's content." 
            linkHref="https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070719/LEGISCTA000006165334/2021-10-10/" 
            linkText="Lire la suite" 
            footer="Publier le 29/02/2024" 
          /><Card 
          imageSrc={seo} 
          imageAlt="seo" 
          title="Référencement" 
          text="Some quick example text to build on the card title and make up the bulk of the card's content." 
          linkHref="https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070719/LEGISCTA000006165334/2021-10-10/" 
          linkText="Lire la suite" 
          footer="Publier le 29/02/2024" 
        />
        </div>
      </div>
    </div>
  );
};

export default Blog;
