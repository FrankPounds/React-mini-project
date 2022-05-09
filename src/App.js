import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import InfoSection from './components/InfoSection';
import ViewSection from './components/ViewSection';
import Interior from './components/Interior';
import DesignSection from './components/DesignSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <InfoSection />
      <ViewSection />
      <Interior />
      <DesignSection />
      <Footer />
    </div>
  );
}

export default App;
