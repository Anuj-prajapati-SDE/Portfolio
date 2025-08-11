import React, { useState, useEffect } from 'react';
import './SiteConfigManager.css';

const SiteConfigManager = () => {
  const [config, setConfig] = useState({
    theme: {
      primaryColor: '#08afff',
      backgroundColor: '#ebebeb',
      backgroundBlack: '#1e1d1d',
      textColor: '#f3f3f3',
      textSecondaryColor: '#767676',
      themeTextColor: '#08afff'
    },
    site: {
      title: 'Anuj Prajapati - Portfolio',
      description: 'Full Stack Developer & UI/UX Designer',
      author: 'Anuj Prajapati',
      keywords: 'portfolio, developer, react, nodejs, mongodb',
      logo: 'Anuj Prajapati',
      favicon: '/favicon.ico'
    },
    layout: {
      showStars: true,
      enableAnimations: true,
      mobileBreakpoint: 768,
      showLoader: true,
      loaderDuration: 3000
    },
    seo: {
      metaTitle: 'Anuj Prajapati - Full Stack Developer Portfolio',
      metaDescription: 'Experienced Full Stack Developer specializing in MERN stack, creating innovative web solutions and user experiences.',
      ogTitle: 'Anuj Prajapati - Portfolio',
      ogDescription: 'Full Stack Developer & UI/UX Designer',
      ogImage: '/og-image.jpg',
      twitterCard: 'summary_large_image'
    },
    analytics: {
      googleAnalyticsId: '',
      googleTagManagerId: '',
      hotjarId: '',
      enableAnalytics: false
    },
    contact: {
      email: 'anuj@example.com',
      phone: '+91 XXXXXXXXXX',
      location: 'India',
      socialLinks: {
        linkedin: 'https://www.linkedin.com/in/anuj-prajapati-1775552a7',
        github: 'https://github.com/Anuj-prajapati-SDE',
        instagram: 'https://www.instagram.com/anuj_prajapati_.123/',
        twitter: ''
      }
    },
    performance: {
      enableLazyLoading: true,
      enableImageOptimization: true,
      enableCodeSplitting: true,
      enableServiceWorker: false
    },
    security: {
      enableCSP: false,
      enableHSTS: false,
      hideServerInfo: true
    }
  });

  const [activeTab, setActiveTab] = useState('theme');
  const [hasChanges, setHasChanges] = useState(false);
  const [saveStatus, setSaveStatus] = useState('');

  useEffect(() => {
    // Load saved configuration from localStorage or API
    const savedConfig = localStorage.getItem('portfolioConfig');
    if (savedConfig) {
      try {
        setConfig(JSON.parse(savedConfig));
      } catch (error) {
        console.error('Error loading saved configuration:', error);
      }
    }
  }, []);

  const handleConfigChange = (section, key, value) => {
    setConfig(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value
      }
    }));
    setHasChanges(true);
  };

  const handleNestedConfigChange = (section, parentKey, key, value) => {
    setConfig(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [parentKey]: {
          ...prev[section][parentKey],
          [key]: value
        }
      }
    }));
    setHasChanges(true);
  };

  const saveConfiguration = async () => {
    try {
      setSaveStatus('saving');
      
      // Save to localStorage (in real app, this would be an API call)
      localStorage.setItem('portfolioConfig', JSON.stringify(config));
      
      // Apply theme changes to CSS variables
      const root = document.documentElement;
      root.style.setProperty('--theme-text-color', config.theme.primaryColor);
      root.style.setProperty('--back-ground-color', config.theme.backgroundColor);
      root.style.setProperty('--background-black', config.theme.backgroundBlack);
      root.style.setProperty('--text-color', config.theme.textColor);
      root.style.setProperty('--text-2-color', config.theme.textSecondaryColor);
      
      // Update document title and meta tags
      document.title = config.site.title;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', config.site.description);
      }
      
      setTimeout(() => {
        setSaveStatus('saved');
        setHasChanges(false);
        setTimeout(() => setSaveStatus(''), 2000);
      }, 1000);
      
    } catch (error) {
      setSaveStatus('error');
      setTimeout(() => setSaveStatus(''), 3000);
    }
  };

  const resetConfiguration = () => {
    if (window.confirm('Are you sure you want to reset all configuration to defaults? This action cannot be undone.')) {
      localStorage.removeItem('portfolioConfig');
      window.location.reload();
    }
  };

  const exportConfiguration = () => {
    const dataStr = JSON.stringify(config, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'portfolio-config.json';
    link.click();
  };

  const importConfiguration = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedConfig = JSON.parse(e.target.result);
          setConfig(importedConfig);
          setHasChanges(true);
        } catch (error) {
          alert('Invalid configuration file');
        }
      };
      reader.readAsText(file);
    }
  };

  const tabs = [
    { id: 'theme', label: 'Theme & Colors', icon: '🎨' },
    { id: 'site', label: 'Site Settings', icon: '⚙️' },
    { id: 'layout', label: 'Layout', icon: '📐' },
    { id: 'seo', label: 'SEO', icon: '🔍' },
    { id: 'contact', label: 'Contact', icon: '📧' },
    { id: 'analytics', label: 'Analytics', icon: '📊' },
    { id: 'performance', label: 'Performance', icon: '⚡' },
    { id: 'security', label: 'Security', icon: '🔒' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'theme':
        return <ThemeSettings config={config} onConfigChange={handleConfigChange} />;
      case 'site':
        return <SiteSettings config={config} onConfigChange={handleConfigChange} />;
      case 'layout':
        return <LayoutSettings config={config} onConfigChange={handleConfigChange} />;
      case 'seo':
        return <SEOSettings config={config} onConfigChange={handleConfigChange} />;
      case 'contact':
        return <ContactSettings config={config} onConfigChange={handleConfigChange} onNestedChange={handleNestedConfigChange} />;
      case 'analytics':
        return <AnalyticsSettings config={config} onConfigChange={handleConfigChange} />;
      case 'performance':
        return <PerformanceSettings config={config} onConfigChange={handleConfigChange} />;
      case 'security':
        return <SecuritySettings config={config} onConfigChange={handleConfigChange} />;
      default:
        return null;
    }
  };

  return (
    <div className="site-config-manager">
      <div className="config-header">
        <div className="header-info">
          <h2>Site Configuration</h2>
          <p>Manage global settings and appearance of your portfolio</p>
        </div>
        <div className="header-actions">
          <button onClick={exportConfiguration} className="btn btn-secondary">
            📤 Export
          </button>
          <label htmlFor="import-config" className="btn btn-secondary">
            📥 Import
            <input
              id="import-config"
              type="file"
              accept=".json"
              onChange={importConfiguration}
              style={{ display: 'none' }}
            />
          </label>
          <button onClick={resetConfiguration} className="btn btn-danger">
            🔄 Reset
          </button>
          <button 
            onClick={saveConfiguration} 
            className={`btn btn-primary ${saveStatus}`}
            disabled={!hasChanges || saveStatus === 'saving'}
          >
            {saveStatus === 'saving' && '⏳ Saving...'}
            {saveStatus === 'saved' && '✅ Saved'}
            {saveStatus === 'error' && '❌ Error'}
            {!saveStatus && '💾 Save Changes'}
          </button>
        </div>
      </div>

      <div className="config-content">
        <div className="config-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="config-panel">
          {renderTabContent()}
        </div>
      </div>

      {hasChanges && (
        <div className="changes-indicator">
          <span>You have unsaved changes</span>
          <button onClick={saveConfiguration} className="btn btn-primary btn-sm">
            Save Now
          </button>
        </div>
      )}
    </div>
  );
};

// Theme Settings Component
const ThemeSettings = ({ config, onConfigChange }) => (
  <div className="config-section">
    <h3>Theme & Color Scheme</h3>
    <div className="form-grid">
      <div className="form-group">
        <label className="form-label">Primary Color</label>
        <div className="color-input-group">
          <input
            type="color"
            value={config.theme.primaryColor}
            onChange={(e) => onConfigChange('theme', 'primaryColor', e.target.value)}
            className="color-input"
          />
          <input
            type="text"
            value={config.theme.primaryColor}
            onChange={(e) => onConfigChange('theme', 'primaryColor', e.target.value)}
            className="form-input"
          />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label">Background Color (Light)</label>
        <div className="color-input-group">
          <input
            type="color"
            value={config.theme.backgroundColor}
            onChange={(e) => onConfigChange('theme', 'backgroundColor', e.target.value)}
            className="color-input"
          />
          <input
            type="text"
            value={config.theme.backgroundColor}
            onChange={(e) => onConfigChange('theme', 'backgroundColor', e.target.value)}
            className="form-input"
          />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label">Background Color (Dark)</label>
        <div className="color-input-group">
          <input
            type="color"
            value={config.theme.backgroundBlack}
            onChange={(e) => onConfigChange('theme', 'backgroundBlack', e.target.value)}
            className="color-input"
          />
          <input
            type="text"
            value={config.theme.backgroundBlack}
            onChange={(e) => onConfigChange('theme', 'backgroundBlack', e.target.value)}
            className="form-input"
          />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label">Text Color</label>
        <div className="color-input-group">
          <input
            type="color"
            value={config.theme.textColor}
            onChange={(e) => onConfigChange('theme', 'textColor', e.target.value)}
            className="color-input"
          />
          <input
            type="text"
            value={config.theme.textColor}
            onChange={(e) => onConfigChange('theme', 'textColor', e.target.value)}
            className="form-input"
          />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label">Secondary Text Color</label>
        <div className="color-input-group">
          <input
            type="color"
            value={config.theme.textSecondaryColor}
            onChange={(e) => onConfigChange('theme', 'textSecondaryColor', e.target.value)}
            className="color-input"
          />
          <input
            type="text"
            value={config.theme.textSecondaryColor}
            onChange={(e) => onConfigChange('theme', 'textSecondaryColor', e.target.value)}
            className="form-input"
          />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label">Accent Color</label>
        <div className="color-input-group">
          <input
            type="color"
            value={config.theme.themeTextColor}
            onChange={(e) => onConfigChange('theme', 'themeTextColor', e.target.value)}
            className="color-input"
          />
          <input
            type="text"
            value={config.theme.themeTextColor}
            onChange={(e) => onConfigChange('theme', 'themeTextColor', e.target.value)}
            className="form-input"
          />
        </div>
      </div>
    </div>
    <div className="theme-preview">
      <h4>Preview</h4>
      <div className="preview-card" style={{
        backgroundColor: config.theme.backgroundBlack,
        color: config.theme.textColor,
        border: `1px solid ${config.theme.primaryColor}`
      }}>
        <h5 style={{ color: config.theme.primaryColor }}>Sample Heading</h5>
        <p style={{ color: config.theme.textColor }}>This is how your text will appear</p>
        <span style={{ color: config.theme.textSecondaryColor }}>Secondary text example</span>
      </div>
    </div>
  </div>
);

// Site Settings Component
const SiteSettings = ({ config, onConfigChange }) => (
  <div className="config-section">
    <h3>Site Information</h3>
    <div className="form-grid">
      <div className="form-group">
        <label className="form-label">Site Title</label>
        <input
          type="text"
          value={config.site.title}
          onChange={(e) => onConfigChange('site', 'title', e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Site Description</label>
        <textarea
          value={config.site.description}
          onChange={(e) => onConfigChange('site', 'description', e.target.value)}
          className="form-textarea"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Author Name</label>
        <input
          type="text"
          value={config.site.author}
          onChange={(e) => onConfigChange('site', 'author', e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Keywords (comma separated)</label>
        <input
          type="text"
          value={config.site.keywords}
          onChange={(e) => onConfigChange('site', 'keywords', e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Logo Text</label>
        <input
          type="text"
          value={config.site.logo}
          onChange={(e) => onConfigChange('site', 'logo', e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Favicon Path</label>
        <input
          type="text"
          value={config.site.favicon}
          onChange={(e) => onConfigChange('site', 'favicon', e.target.value)}
          className="form-input"
        />
      </div>
    </div>
  </div>
);

// Layout Settings Component
const LayoutSettings = ({ config, onConfigChange }) => (
  <div className="config-section">
    <h3>Layout Configuration</h3>
    <div className="form-grid">
      <div className="form-group">
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={config.layout.showStars}
            onChange={(e) => onConfigChange('layout', 'showStars', e.target.checked)}
          />
          <span className="toggle-slider"></span>
        </label>
        <label className="form-label">Show Background Stars</label>
      </div>
      <div className="form-group">
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={config.layout.enableAnimations}
            onChange={(e) => onConfigChange('layout', 'enableAnimations', e.target.checked)}
          />
          <span className="toggle-slider"></span>
        </label>
        <label className="form-label">Enable Animations</label>
      </div>
      <div className="form-group">
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={config.layout.showLoader}
            onChange={(e) => onConfigChange('layout', 'showLoader', e.target.checked)}
          />
          <span className="toggle-slider"></span>
        </label>
        <label className="form-label">Show Loading Screen</label>
      </div>
      <div className="form-group">
        <label className="form-label">Mobile Breakpoint (px)</label>
        <input
          type="number"
          value={config.layout.mobileBreakpoint}
          onChange={(e) => onConfigChange('layout', 'mobileBreakpoint', parseInt(e.target.value))}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Loader Duration (ms)</label>
        <input
          type="number"
          value={config.layout.loaderDuration}
          onChange={(e) => onConfigChange('layout', 'loaderDuration', parseInt(e.target.value))}
          className="form-input"
        />
      </div>
    </div>
  </div>
);

// SEO Settings Component
const SEOSettings = ({ config, onConfigChange }) => (
  <div className="config-section">
    <h3>SEO Configuration</h3>
    <div className="form-grid">
      <div className="form-group">
        <label className="form-label">Meta Title</label>
        <input
          type="text"
          value={config.seo.metaTitle}
          onChange={(e) => onConfigChange('seo', 'metaTitle', e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Meta Description</label>
        <textarea
          value={config.seo.metaDescription}
          onChange={(e) => onConfigChange('seo', 'metaDescription', e.target.value)}
          className="form-textarea"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Open Graph Title</label>
        <input
          type="text"
          value={config.seo.ogTitle}
          onChange={(e) => onConfigChange('seo', 'ogTitle', e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Open Graph Description</label>
        <textarea
          value={config.seo.ogDescription}
          onChange={(e) => onConfigChange('seo', 'ogDescription', e.target.value)}
          className="form-textarea"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Open Graph Image</label>
        <input
          type="text"
          value={config.seo.ogImage}
          onChange={(e) => onConfigChange('seo', 'ogImage', e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Twitter Card Type</label>
        <select
          value={config.seo.twitterCard}
          onChange={(e) => onConfigChange('seo', 'twitterCard', e.target.value)}
          className="form-select"
        >
          <option value="summary">Summary</option>
          <option value="summary_large_image">Summary Large Image</option>
        </select>
      </div>
    </div>
  </div>
);

// Contact Settings Component
const ContactSettings = ({ config, onConfigChange, onNestedChange }) => (
  <div className="config-section">
    <h3>Contact Information</h3>
    <div className="form-grid">
      <div className="form-group">
        <label className="form-label">Email</label>
        <input
          type="email"
          value={config.contact.email}
          onChange={(e) => onConfigChange('contact', 'email', e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Phone</label>
        <input
          type="text"
          value={config.contact.phone}
          onChange={(e) => onConfigChange('contact', 'phone', e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Location</label>
        <input
          type="text"
          value={config.contact.location}
          onChange={(e) => onConfigChange('contact', 'location', e.target.value)}
          className="form-input"
        />
      </div>
    </div>
    
    <h4>Social Links</h4>
    <div className="form-grid">
      <div className="form-group">
        <label className="form-label">LinkedIn</label>
        <input
          type="url"
          value={config.contact.socialLinks.linkedin}
          onChange={(e) => onNestedChange('contact', 'socialLinks', 'linkedin', e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">GitHub</label>
        <input
          type="url"
          value={config.contact.socialLinks.github}
          onChange={(e) => onNestedChange('contact', 'socialLinks', 'github', e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Instagram</label>
        <input
          type="url"
          value={config.contact.socialLinks.instagram}
          onChange={(e) => onNestedChange('contact', 'socialLinks', 'instagram', e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Twitter</label>
        <input
          type="url"
          value={config.contact.socialLinks.twitter}
          onChange={(e) => onNestedChange('contact', 'socialLinks', 'twitter', e.target.value)}
          className="form-input"
        />
      </div>
    </div>
  </div>
);

// Analytics Settings Component
const AnalyticsSettings = ({ config, onConfigChange }) => (
  <div className="config-section">
    <h3>Analytics Configuration</h3>
    <div className="form-grid">
      <div className="form-group">
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={config.analytics.enableAnalytics}
            onChange={(e) => onConfigChange('analytics', 'enableAnalytics', e.target.checked)}
          />
          <span className="toggle-slider"></span>
        </label>
        <label className="form-label">Enable Analytics</label>
      </div>
      <div className="form-group">
        <label className="form-label">Google Analytics ID</label>
        <input
          type="text"
          value={config.analytics.googleAnalyticsId}
          onChange={(e) => onConfigChange('analytics', 'googleAnalyticsId', e.target.value)}
          className="form-input"
          placeholder="G-XXXXXXXXXX"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Google Tag Manager ID</label>
        <input
          type="text"
          value={config.analytics.googleTagManagerId}
          onChange={(e) => onConfigChange('analytics', 'googleTagManagerId', e.target.value)}
          className="form-input"
          placeholder="GTM-XXXXXXX"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Hotjar ID</label>
        <input
          type="text"
          value={config.analytics.hotjarId}
          onChange={(e) => onConfigChange('analytics', 'hotjarId', e.target.value)}
          className="form-input"
          placeholder="1234567"
        />
      </div>
    </div>
  </div>
);

// Performance Settings Component
const PerformanceSettings = ({ config, onConfigChange }) => (
  <div className="config-section">
    <h3>Performance Optimization</h3>
    <div className="form-grid">
      <div className="form-group">
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={config.performance.enableLazyLoading}
            onChange={(e) => onConfigChange('performance', 'enableLazyLoading', e.target.checked)}
          />
          <span className="toggle-slider"></span>
        </label>
        <label className="form-label">Enable Lazy Loading</label>
      </div>
      <div className="form-group">
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={config.performance.enableImageOptimization}
            onChange={(e) => onConfigChange('performance', 'enableImageOptimization', e.target.checked)}
          />
          <span className="toggle-slider"></span>
        </label>
        <label className="form-label">Enable Image Optimization</label>
      </div>
      <div className="form-group">
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={config.performance.enableCodeSplitting}
            onChange={(e) => onConfigChange('performance', 'enableCodeSplitting', e.target.checked)}
          />
          <span className="toggle-slider"></span>
        </label>
        <label className="form-label">Enable Code Splitting</label>
      </div>
      <div className="form-group">
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={config.performance.enableServiceWorker}
            onChange={(e) => onConfigChange('performance', 'enableServiceWorker', e.target.checked)}
          />
          <span className="toggle-slider"></span>
        </label>
        <label className="form-label">Enable Service Worker</label>
      </div>
    </div>
  </div>
);

// Security Settings Component
const SecuritySettings = ({ config, onConfigChange }) => (
  <div className="config-section">
    <h3>Security Configuration</h3>
    <div className="form-grid">
      <div className="form-group">
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={config.security.enableCSP}
            onChange={(e) => onConfigChange('security', 'enableCSP', e.target.checked)}
          />
          <span className="toggle-slider"></span>
        </label>
        <label className="form-label">Enable Content Security Policy</label>
      </div>
      <div className="form-group">
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={config.security.enableHSTS}
            onChange={(e) => onConfigChange('security', 'enableHSTS', e.target.checked)}
          />
          <span className="toggle-slider"></span>
        </label>
        <label className="form-label">Enable HSTS</label>
      </div>
      <div className="form-group">
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={config.security.hideServerInfo}
            onChange={(e) => onConfigChange('security', 'hideServerInfo', e.target.checked)}
          />
          <span className="toggle-slider"></span>
        </label>
        <label className="form-label">Hide Server Information</label>
      </div>
    </div>
  </div>
);

export default SiteConfigManager;
