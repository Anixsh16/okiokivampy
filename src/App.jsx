// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
