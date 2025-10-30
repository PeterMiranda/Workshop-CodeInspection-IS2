import React from 'react';
import { Bell } from 'lucide-react';
import PropTypes from 'prop-types';
import './Header.css';

export const Header = ({ title = 'Mi Dashboard' }) => (
  <header className="header">
    <h1 className="header__title">{title}</h1>
    <button className="header__notification-btn" aria-label="Notificaciones">
      <Bell size={24} />
      <span className="header__notification-badge"></span>
    </button>
  </header>
);

Header.propTypes = {
  title: PropTypes.string,
};

