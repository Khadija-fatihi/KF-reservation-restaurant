import React, { useState } from 'react';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <h2 className='app-title'><img src="logo.png" alt="logo" className="app-icon" />
            KF Restaurant
          </h2>
        </div>
        
        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="nav-item">
            <a 
              href="#home" 
              className={activeSection === 'home' ? 'nav-link active' : 'nav-link'}
              onClick={() => handleNavClick('home')}
            >
              Accueil
            </a>
          </div>
          <div className="nav-item">
            <a 
              href="#menu" 
              className={activeSection === 'menu' ? 'nav-link active' : 'nav-link'}
              onClick={() => handleNavClick('menu')}
            >
              Menu
            </a>
          </div>
          <div className="nav-item">
            <a 
              href="#contact" 
              className={activeSection === 'contact' ? 'nav-link active' : 'nav-link'}
              onClick={() => handleNavClick('contact')}
            >
              Contact
            </a>
          </div>
          <div className="nav-item">
            <a 
              href="#reserve" 
              className={activeSection === 'reserve' ? 'nav-link active reserve-btn' : 'nav-link reserve-btn'}
              onClick={() => handleNavClick('reserve')}
            >
              Réserver
            </a>
          </div>
        </div>

        <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;