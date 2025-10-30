import React from 'react';
import './MenuItem.css';

export const MenuItem = ({ icon: Icon, label, isExpanded, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`menu-item ${isActive ? 'menu-item--active' : ''}`}
      title={!isExpanded ? label : ''}
    >
      <span className="menu-item__icon">
        <Icon size={20} />
      </span>
      {isExpanded && <span className="menu-item__label">{label}</span>}
    </button>
  );
};