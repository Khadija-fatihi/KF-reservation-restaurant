import React, { useState } from 'react';

const Reservation = ({ activeSection }) => {
  const [reservationForm, setReservationForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationForm({
      ...reservationForm,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Merci ${reservationForm.name} ! Votre réservation a été enregistrée.`);
    setReservationForm({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      specialRequests: ''
    });
  };

  return (
    <section id="reserve" className={activeSection === 'reserve' ? 'section active' : 'section'}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Réservez Votre Table</h2>
          <p className="section-subtitle">Garantissez votre expérience culinaire</p>
        </div>
        
        <div className="reservation-content">
          <div className="reservation-info">
            <div className="info-card">
              <h3>✨ Pourquoi réserver chez nous ?</h3>
              <ul>
                <li>✓ Cuisine marocaine authentique</li>
                <li>✓ Ambiance chaleureuse</li>
                <li>✓ Service personnalisé</li>
                <li>✓ Produits frais et de qualité</li>
              </ul>
            </div>
            
            <div className="info-card">
              <h3>📞 Réservation par téléphone</h3>
              <p>+212 5 22 123 456</p>
              <p>Disponible du lundi au dimanche</p>
            </div>
          </div>
          
          <div className="reservation-form-container">
            <form className="reservation-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nom complet *</label>
                <input 
                  type="text" 
                  name="name"
                  value={reservationForm.name}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input 
                  type="email" 
                  name="email"
                  value={reservationForm.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label>Téléphone</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={reservationForm.phone}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Date *</label>
                  <input 
                    type="date" 
                    name="date"
                    value={reservationForm.date}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Heure *</label>
                  <input 
                    type="time" 
                    name="time"
                    value={reservationForm.time}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label>Nombre de personnes *</label>
                <select 
                  name="guests"
                  value={reservationForm.guests}
                  onChange={handleInputChange}
                  required
                >
                  <option value="1">1 personne</option>
                  <option value="2">2 personnes</option>
                  <option value="3">3 personnes</option>
                  <option value="4">4 personnes</option>
                  <option value="5">5 personnes</option>
                  <option value="6">6 personnes</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Demandes spéciales</label>
                <textarea 
                  name="specialRequests"
                  rows="3"
                  value={reservationForm.specialRequests}
                  onChange={handleInputChange}
                  placeholder="Allergies, anniversaire, etc."
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Confirmer la réservation</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;