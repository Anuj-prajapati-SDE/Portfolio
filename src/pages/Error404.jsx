import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Error404.css';

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div className="error404-container">
      <div className="error404-content">
        <div className="error404-icon">🚫</div>
        <h1 className="error404-title">404</h1>
        <h2 className="error404-subtitle">Page Not Found</h2>
        <p className="error404-message">
          Sorry, the page you are looking for does not exist or has been moved.<br/>
          Please check the URL or return to the homepage.
        </p>
        <button className="error404-btn" onClick={() => navigate('/')}>Go Home</button>
      </div>
      <div className="error404-bg-stars">
        <div className="stars" id="stars" />
        <div className="stars" id="stars2" />
        <div className="stars" id="stars3" />
      </div>
    </div>
  );
};

export default Error404;
