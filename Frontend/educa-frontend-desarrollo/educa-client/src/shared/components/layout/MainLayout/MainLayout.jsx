import React from 'react';
import './MainLayout.css';

export const MainLayout = ({ children }) => {
  return (
    <main className="main-layout">
      {children}
    </main>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired, 
};

