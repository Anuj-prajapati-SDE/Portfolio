import React from 'react';

const UserManager = () => {
  return (
    <div className="user-manager">
      <div className="user-header">
        <h2>User Management</h2>
        <p>Manage admin users and access permissions</p>
      </div>
      
      <div className="coming-soon">
        <div className="coming-soon-content">
          <div className="coming-soon-icon">👥</div>
          <h3>User Management Coming Soon!</h3>
          <p>
            Advanced user management features including role-based access control,
            user permissions, and admin account management.
          </p>
          <div className="features-preview">
            <div className="feature-item">🔐 Role Management</div>
            <div className="feature-item">👤 User Profiles</div>
            <div className="feature-item">🛡️ Permission Control</div>
            <div className="feature-item">📝 Activity Logs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManager;
