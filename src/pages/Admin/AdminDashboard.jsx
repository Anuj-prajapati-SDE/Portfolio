import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './AdminDashboard.css';

// Component Management Imports
import ComponentManager from '../Admin/Components/ComponentManager/ComponentManager';
import SiteConfigManager from '../Admin/Components/SiteConfigManager/SiteConfigManager';
import ContentManager from '../Admin/Components/ContentManager/ContentManager';
import AnalyticsPanel from '../Admin/Components/AnalyticsPanel/AnalyticsPanel';
import UserManager from '../Admin/Components/UserManager/UserManager';
import ProjectsManager from '../Admin/Components/ProjectsManager/ProjectsManager';

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

  const renderActiveComponent = () => {
    switch(activeTab) {
      case 'overview':
        return <OverviewComponent user={user} />;
      case 'components':
        return <ComponentManager />;
      case 'content':
        return <ContentManager />;
      case 'projects':
        return <ProjectsManager />;
      case 'site-config':
        return <SiteConfigManager />;
      case 'analytics':
        return <AnalyticsPanel />;
      case 'users':
        return <UserManager />;
      default:
        return <OverviewComponent user={user} />;
    }
  };

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
          {renderActiveComponent()}
        </div>
      </main>
    </div>
  );
};

// Overview Component
const OverviewComponent = ({ user }) => {
  const [stats, setStats] = useState({
    totalComponents: 12,
    activeProjects: 5,
    totalVisitors: 1250,
    lastUpdate: new Date().toLocaleDateString()
  });

  return (
    <div className="overview-content">
      <div className="welcome-section">
        <h2>Welcome back, {user.name || 'Admin'}! 👋</h2>
        <p>Here's what's happening with your portfolio today.</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">🧩</div>
          <div className="stat-content">
            <h3>{stats.totalComponents}</h3>
            <p>Total Components</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">💼</div>
          <div className="stat-content">
            <h3>{stats.activeProjects}</h3>
            <p>Active Projects</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-content">
            <h3>{stats.totalVisitors}</h3>
            <p>Total Visitors</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📅</div>
          <div className="stat-content">
            <h3>{stats.lastUpdate}</h3>
            <p>Last Update</p>
          </div>
        </div>
      </div>

      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <div className="action-buttons">
          <button className="action-btn primary">
            <span>➕</span> Add New Project
          </button>
          <button className="action-btn secondary">
            <span>🎨</span> Update Theme
          </button>
          <button className="action-btn secondary">
            <span>📝</span> Edit Content
          </button>
          <button className="action-btn secondary">
            <span>📊</span> View Analytics
          </button>
        </div>
      </div>

      <div className="recent-activity">
        <h3>Recent Activity</h3>
        <div className="activity-list">
          <div className="activity-item">
            <span className="activity-icon">🆕</span>
            <div className="activity-content">
              <p>New project "BlissCamp" added</p>
              <span className="activity-time">2 hours ago</span>
            </div>
          </div>
          <div className="activity-item">
            <span className="activity-icon">✏️</span>
            <div className="activity-content">
              <p>About section content updated</p>
              <span className="activity-time">1 day ago</span>
            </div>
          </div>
          <div className="activity-item">
            <span className="activity-icon">🎨</span>
            <div className="activity-content">
              <p>Theme colors modified</p>
              <span className="activity-time">3 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;