import React from 'react';

export default function RevStreamWebsite() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <img src="/logo.png" alt="RevStream AI Logo" style={{ width: '150px', marginBottom: '1rem' }} />
      <h1>Turn Cold Leads Into Booked Calls with Zero Effort</h1>
      <p>AI-powered outbound lead generation. Done-for-you.</p>
      <div style={{ marginTop: '2rem' }}>
        <a href="https://calendly.com/ryan-revstreamai/ai-lead-engine-demo" target="_blank" rel="noopener noreferrer">
          <button style={{ marginRight: '1rem' }}>Book a Demo</button>
        </a>
        <a href="https://buy.stripe.com/dR616s1gg0WW97q8ww" target="_blank" rel="noopener noreferrer">
          <button>Get Started</button>
        </a>
      </div>
    </div>
  );
}
