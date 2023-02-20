import React from 'react'
import Header from './Header';
import Navigation from './components/Navigation';
import Skills from './components/Skills';
import Projects from './components/Projects';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="h-screen">
     <Navigation />
      <Header />
    <Skills />
    <Projects />
    </div>
  );
}

export default App;
