import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Contact from './Components/Contact';
import Reservation from './Components/Reservation';
import Footer from './Components/Footer';
import Loading from './Components/Loading';

import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <Home activeSection={activeSection} setActiveSection={setActiveSection} />
      <Menu activeSection={activeSection} />
      <Contact activeSection={activeSection} />
      <Reservation activeSection={activeSection} />
      
      <Footer />
    </div>
  );
}

export default App;