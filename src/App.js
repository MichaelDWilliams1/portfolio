import React from 'react'

import Navigation from './components/Navigation';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
   <Navigation />
 
   <Header />
   <Skills />
   <Projects />
    </div>
  );
}

export default App;
