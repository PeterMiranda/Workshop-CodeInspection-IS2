import React from 'react';
import './UserSection.css';

export const UserSection = ({ isExpanded, user }) => {
  return (
    <div className="user-section">
      <div className="user-content">
        <div className="user-avatar">{user.avatar || '👨‍💼'}</div>
        {isExpanded && (
          <div className="user-info">
            <div className="user-name">{user.name}</div>
            <div className="user-role">{user.role}</div>
          </div>
        )}
      </div>
    </div>
  );
};