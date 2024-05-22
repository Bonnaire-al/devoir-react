
import React from 'react';
import './style-card.css'

const Card = ({ imageSrc, imageAlt, title, text, linkHref, linkText, footer }) => {
  return (
    <div className="card col-md-3 me-5 mb-5 bloc6">
      <img src={imageSrc} className="card-img-top img-fluid img6" alt={imageAlt} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text fs-6">{text}</p>
        <a href={linkHref} className="btn btn-primary">{linkText}</a>
      </div>
      <div className="card-footer bg-transparent border-success">{footer}</div>
    </div>
  );
};

export default Card;
