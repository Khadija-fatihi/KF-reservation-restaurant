import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>KF Restaurant</h3>
            <p>Découvrez l'authenticité des saveurs marocaines dans un cadre chaleureux.</p>
          </div>
          
          <div className="footer-section">
            <h4>Horaires</h4>
            <p>Lundi - Jeudi: 11h30 - 22h00</p>
            <p>Vendredi - Dimanche: 11h30 - 23h00</p>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p>📍 123 Rue de la Gastronomie, Casablanca</p>
            <p>📞 +212 5 22 123 456</p>
            <p>✉️ info@kfrestaurant.com</p>
          </div>
          
          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Inscrivez-vous pour recevoir nos actualités</p>
            <div className="newsletter-form">
              <input  type="email" placeholder="Votre email" />
              <button type="submit">S'inscrire</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2023 KF Restaurant. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;