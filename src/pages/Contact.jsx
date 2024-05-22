import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import TopPage from '../components/TopPage.jsx';
import './style2.css'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5fbh55h', 'template_kedcmpr', form.current, '553WhETy15P9Hlzx_')
      .then((result) => {
        alert('Message envoyé avec succès!');
      }, (error) => {
        alert('Une erreur est survenue, veuillez réessayer.');
      });
  };

  return (
    <div>
    <TopPage title="ME CONTACTER" subtitle="Pour me contacter vous pouvez utiliser ce formulaire" />
    <div className="container section3 my-5">
      <div className="row">
        <div className="col-md-6">
          <h2 className="text-center">Formulaire de contact</h2>
          <hr className="underline" />
          <form ref={form} onSubmit={sendEmail} className="mt-3">
            <div className="mb-2">
              <label htmlFor="name" className="form-label">Nom</label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="form-label">Adresse Email</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="mb-2">
              <label htmlFor="phone" className="form-label">Numéro de Téléphone</label>
              <input type="tel" className="form-control" id="phone" required />
            </div>
            <div className="mb-2">
              <label htmlFor="subject" className="form-label">Sujet</label>
              <input type="text" className="form-control" id="subject" required />
            </div>
            <div className="mb-2">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Envoyer</button>
          </form>
        </div>

        <div className="col-md-6">
          <h2 className="text-center">Mes coordonnées</h2>
          <hr className="underline" />
          <p className="mt-4">Adresse: 123 Rue Exemple, Ville, Pays</p>
          <p>Téléphone: (123) 456-7890</p>
          <p>Email: contact@example.com</p>
          <div className="mt-4">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0805054000456!2d-122.4217788846811!3d37.77492917975888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5f8d89ff%3A0x947ee9a5d93a0a1b!2s123%20Main%20St%2C%20San%20Francisco%2C%20CA%2094131%2C%20USA!5e0!3m2!1sen!2sin!4v1611282040532!5m2!1sen!2sin" 
              width="100%" 
              height="400" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>

    
    </div>
  )
};

export default Contact;
