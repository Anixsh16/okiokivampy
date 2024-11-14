import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="logo">AasPaas</a>
      <div className="menu">
        <a href="/home">Home</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
        <a href="/agents">Places</a>
      </div>
      <div className="actions">
        <a href="/"><button>Sign In</button></a>
        <a href="/"><button>Sign Up</button></a>
      </div>
    </nav>
  );
};

export default Navbar;
