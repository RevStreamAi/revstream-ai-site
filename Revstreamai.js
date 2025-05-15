import React from 'react';
import './index.css';
import logo from '../public/logo.png';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="RevStream AI Logo" className="logo" />
      <h1>Innovative AI Solutions for Business</h1>
      <p>Transform your outbound process into a fully automated pipeline.<br/>Cold leads. Warm replies. Hot results.</p>
      <div className="buttons">
        <a href="https://calendly.com/ryan-revstreamai/ai-lead-engine-demo" target="_blank" rel="noopener noreferrer">
          <button>Book a Demo</button>
        </a>
        <a href="https://buy.stripe.com/dR616s1gg0WW97q8ww" target="_blank" rel="noopener noreferrer">
          <button>Get Started</button>
        </a>
      </div>
    </div>
  );
}

export default App;
