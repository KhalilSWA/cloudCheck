import React from 'react'

import IntroSection from './components/intro/Intro'
import ContactSection from './components/contact-section/ContactSection'
import MapSection from './components/map/Map' 

import FooterSection from './components/footer/Footer'

import './App.css'


const location = {
  address: 'GoMyCode Hackerspace, 1 Place Tahar Haddad, 1 Tunis 1053, Tunis 1053',
  lat:  36.83581957039931,
  lng: 10.23882997024924,
} // our location object from earlier


function App() {
  return (
    <div className="App">
      <IntroSection />
      <ContactSection />
      <MapSection location={location} zoomLevel={17} /> {/* include it here */}
      
      <FooterSection />
    </div>
  )
}

export default App
