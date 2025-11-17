import React from 'react';

const Home = ({ activeSection, setActiveSection }) => {
  return (
    <section id="home" className={activeSection === 'home' ? 'section active' : 'section'}>
      <div className="hero">
        <div className="hero-content">
          <h1>Bienvenue au KF Restaurant</h1>
          <p>Découvrez l'authenticité des saveurs marocaines dans une ambiance chaleureuse</p>
          <div>
            <button 
              className="cta-button"
              onClick={() => setActiveSection('reserve')}
            >
              Réserver une table 

            </button>
            <button 
              className="cta-button"
              onClick={() => setActiveSection('menu')}
            >
              Voir le menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;