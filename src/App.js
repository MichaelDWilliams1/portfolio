import React from 'react'
import Header from './Header';
import Navigation from './components/Navigation';
import Skills from './components/Skills';

function App() {
  return (
    <div className="h-screen">
     <Navigation />
      <Header />
    <Skills />
    </div>
  );
}

export default App;
