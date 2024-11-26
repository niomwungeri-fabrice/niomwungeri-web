import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import for navigation
import '../styles/Landing.css';

function Landing() {
  const navigate = useNavigate(); // React Router hook for navigation

  const navigateToContact = () => {
    navigate('/contact'); // Navigate to the contact page
  };

  return (
    <main className="landing">
      <div className="intro">
        <h1>Welcome to Fabrice Niyomwungeri's Portfolio</h1>
        <p>Showcasing software development expertise and projects.</p>
        <a href="#projects" className="cta-button">Explore Projects</a>
      </div>
      <div className="personal-details">
        <h2>About Me</h2>
        <p><strong>Full Name:</strong> Fabrice NIYOMWUNGERI</p>
        <p><strong>Current Location:</strong> Edmonton, CA, 12828 65 str</p>
        <p><strong>Phone:</strong> +1 7802246644</p>
        <button className="contact-me-button" onClick={navigateToContact}>
          Contact Me
        </button>
      </div>
    </main>
  );
}

export default Landing;
