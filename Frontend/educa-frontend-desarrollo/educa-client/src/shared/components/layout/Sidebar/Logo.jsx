import React from 'react';
import './Logo.css';

export const Logo = ({ isExpanded }) => {
  return (
    <div className="logo-container">
      <div className="logo-icon">S.</div>
      {isExpanded && <span className="logo-text">Solinal.</span>}
    </div>
  );
};