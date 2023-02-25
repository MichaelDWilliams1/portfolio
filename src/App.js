import React from 'react'
import Header from './components/Header';
import Navigation from './components/Navigation';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="h-screen">
     <Navigation />
      <Header />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    
    </div>
  );
}

export default App;
