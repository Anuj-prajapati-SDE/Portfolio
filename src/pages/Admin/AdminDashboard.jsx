import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './AdminDashboard.css';
const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Apply theme to dashboard
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const handleLogout = async () => {
    const result = await logout();
    if (result.success) {
      navigate('/login');
    }
  };

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'components', label: 'Components', icon: '🧩' },
    { id: 'content', label: 'Content', icon: '📝' },
    { id: 'projects', label: 'Projects', icon: '💼' },
    { id: 'site-config', label: 'Site Config', icon: '⚙️' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'users', label: 'Users', icon: '👥' },
  ];

 

  if (!user) {
    return (
      <div className="admin-login-prompt">
        <h2>Please log in to access the admin dashboard.</h2>
        <button onClick={() => navigate('/login')} className="login-btn">
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className={`admin-dashboard ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarCollapsed ? 'collapsed' : ''} ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo">
            <span className="logo-icon">🎯</span>
            {!sidebarCollapsed && <span className="logo-text">Portfolio Admin</span>}
          </div>
          <button 
            className="sidebar-toggle desktop-only"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          >
            {sidebarCollapsed ? '→' : '←'}
          </button>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
              }}
              title={item.label}
            >
              <span className="nav-icon">{item.icon}</span>
              {!sidebarCollapsed && <span className="nav-label">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button 
            className="theme-toggle"
            onClick={() => setIsDarkMode(!isDarkMode)}
            title="Toggle Theme"
          >
            <span className="theme-icon">{isDarkMode ? '☀️' : '🌙'}</span>
            {!sidebarCollapsed && <span>Theme</span>}
          </button>
          <button 
            className="logout-btn"
            onClick={handleLogout}
            title="Logout"
          >
            <span className="logout-icon">🚪</span>
            {!sidebarCollapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        {/* Header */}
        <header className="admin-header">
          <button 
            className="mobile-menu-btn mobile-only"
            onClick={() => setMobileMenuOpen(true)}
          >
            ☰
          </button>
          <div className="header-title">
            <h1>{menuItems.find(item => item.id === activeTab)?.label || 'Dashboard'}</h1>
          </div>
          <div className="header-actions">
            <div className="user-info">
              <span className="user-avatar">👤</span>
              <div className="user-details">
                <span className="user-name">{user.name || 'Admin'}</span>
                <span className="user-email">{user.email}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="admin-content">
          
        </div>
      </main>
    </div>
  );
};
export default AdminDashboard;