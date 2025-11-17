import React, { useState } from 'react';

const Contact = ({ activeSection }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Merci ${formData.name} ! Votre message a été envoyé.`);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className={activeSection === 'contact' ? 'section active' : 'section'}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contactez-Nous</h2>
          <p className="section-subtitle">Nous sommes à votre écoute pour toute question</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <h3>📍 Notre Adresse</h3>
              <p>123 Rue de la Gastronomie<br />Casablanca, Maroc</p>
            </div>
            
            <div className="contact-card">
              <h3>📞 Téléphone</h3>
              <p>+212 5 22 123 456</p>
            </div>
            
            <div className="contact-card">
              <h3>✉️ Email</h3>
              <p>info@kfrestaurant.com</p>
            </div>
            
            <div className="contact-card">
              <h3>🕒 Horaires</h3>
              <p>Lun-Jeu: 11h30-22h00<br />Ven-Dim: 11h30-23h00</p>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h3>Envoyez-nous un message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Votre nom</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label>Votre email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label>Sujet</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label>Votre message</label>
                <textarea 
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">Envoyer le message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;