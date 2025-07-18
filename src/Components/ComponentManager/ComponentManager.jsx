import React, { useState, useEffect } from 'react';
import './ComponentManager.css';

const ComponentManager = () => {
  const [components, setComponents] = useState([]);
  const [activeComponent, setActiveComponent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Initialize components data
  useEffect(() => {
    const portfolioComponents = [
      {
        id: 'navbar',
        name: 'Navigation Bar',
        description: 'Top navigation with menu and branding',
        isActive: true,
        settings: {
          showLogo: true,
          logoText: 'Anuj Prajapati',
          showDownloadCV: true,
          menuItems: ['home', 'about', 'services', 'projects', 'testimonials', 'contact'],
          backgroundColor: 'transparent',
          textColor: '#ffffff',
          accentColor: '#08afff'
        },
        content: {
          logoText: 'Anuj Prajapati',
          cvFileName: 'Anuj-prajapati-Resume.pdf'
        }
      },
      {
        id: 'hero',
        name: 'Hero Section',
        description: 'Main landing section with introduction',
        isActive: true,
        settings: {
          showStars: true,
          animationEnabled: true,
          backgroundStyle: 'gradient'
        },
        content: {
          title: 'Welcome to My Portfolio',
          subtitle: 'Full Stack Developer & UI/UX Designer',
          description: 'Creating amazing web experiences'
        }
      },
      {
        id: 'about',
        name: 'About Section',
        description: 'Personal information and introduction',
        isActive: true,
        settings: {
          showImage: true,
          imagePosition: 'right',
          backgroundEffect: true
        },
        content: {
          title: 'About Me',
          description: 'I am a passionate developer...',
          image: 'pic-1.jpg',
          skills: ['React', 'Node.js', 'MongoDB', 'Express']
        }
      },
      {
        id: 'services',
        name: 'Services Section',
        description: 'Services and technologies showcase',
        isActive: true,
        settings: {
          showExperienceBoxes: true,
          showTechStack: true,
          showServiceImages: true
        },
        content: {
          title: 'WHAT SERVICES I PROVIDE',
          subtitle: 'Blending Creativity with Functionality',
          description: 'I am a passionate and dedicated Mern Stack developer...',
          experienceData: [
            { label: '1+ Year of Experience', value: '1+' },
            { label: '5+ Successful Projects', value: '5+' },
            { label: '100% Secure code', value: '100%' },
            { label: '100% Professional & Quality Code', value: '100%' }
          ],
          technologies: [
            'HTML5', 'CSS3', 'JavaScript', 'React', 'Redux', 'Tailwind',
            'Bootstrap', 'Node.js', 'MongoDB', 'Git & GitHub', 'React Native',
            'C', 'C++', 'Java', 'SpringBoot', 'Docker'
          ]
        }
      },
      {
        id: 'about-explain',
        name: 'About Explain Section',
        description: 'Detailed skills and experience explanation',
        isActive: true,
        settings: {
          showAnimation: true,
          layout: 'cards'
        },
        content: {
          sections: [
            {
              title: 'Experience',
              content: 'Currently I\'m Software Intern – in Morling Global Private Limited...'
            },
            {
              title: 'Skill',
              content: 'I excel in Mern-stack development...'
            },
            {
              title: 'Freelancer',
              content: 'Focused on creating visually stunning interfaces...'
            }
          ],
          quote: 'Welcome to a world of innovation and learning! Let\'s build, grow, and explore technology together. 🚀'
        }
      },
      {
        id: 'scroll-slide',
        name: 'Scroll Slide Section',
        description: 'Interactive scrolling animation section',
        isActive: true,
        settings: {
          enableOnMobile: false,
          minWidth: 550,
          animationType: 'scroll'
        },
        content: {
          images: [],
          text: 'Scroll content here'
        }
      },
      {
        id: 'experience',
        name: 'Projects/Experience Section',
        description: 'Work experience and projects showcase',
        isActive: true,
        settings: {
          showProjectsGrid: true,
          enableFiltering: true,
          enablePagination: true
        },
        content: {
          title: 'PROJECTS I WORKED ON 24-25',
          subtitle: 'Y',
          projectsPerPage: 6,
          categories: ['All', 'Web Development', 'App Development']
        }
      },
      {
        id: 'testimonials',
        name: 'Testimonials Section',
        description: 'Client testimonials and reviews',
        isActive: true,
        settings: {
          autoSlide: true,
          slideInterval: 5000,
          showDots: true
        },
        content: {
          title: 'What Clients Say',
          testimonials: [
            {
              name: 'Client 1',
              role: 'CEO',
              company: 'Company Name',
              content: 'Excellent work!',
              image: 'customer-img-1.jpeg'
            }
          ]
        }
      },
      {
        id: 'contact',
        name: 'Contact Section',
        description: 'Contact form and information',
        isActive: true,
        settings: {
          showForm: true,
          showSocialLinks: true,
          enableEmailJS: true
        },
        content: {
          title: 'Get In Touch',
          email: 'anuj@example.com',
          phone: '+91 XXXXXXXXXX',
          socialLinks: {
            linkedin: 'https://linkedin.com/in/anuj-prajapati',
            github: 'https://github.com/Anuj-prajapati-SDE',
            instagram: 'https://instagram.com/anuj_prajapati'
          }
        }
      },
      {
        id: 'footer',
        name: 'Footer Section',
        description: 'Footer with links and copyright',
        isActive: true,
        settings: {
          showSocialLinks: true,
          showCopyright: true,
          showPrivacyLinks: true
        },
        content: {
          thankYouMessage: 'Thanks for Coming',
          copyright: '© 2024-2025 ANUJ PRAJAPATI. All rights reserved.',
          privacyPolicy: 'Privacy Policy',
          termsOfUse: 'Terms of Use'
        }
      },
      {
        id: 'loader',
        name: 'Loading Screen',
        description: 'Initial loading animation',
        isActive: true,
        settings: {
          showLoader: true,
          loadingDuration: 3000,
          animationType: 'fade'
        },
        content: {
          loaderText: 'Loading...',
          loaderIcon: 'spinner'
        }
      },
      {
        id: 'stars',
        name: 'Background Stars',
        description: 'Animated background elements',
        isActive: true,
        settings: {
          starsCount: 3,
          animationSpeed: 'slow',
          opacity: 0.8
        },
        content: {
          starLayers: ['stars', 'stars2', 'stars3']
        }
      }
    ];

    setComponents(portfolioComponents);
  }, []);

  const filteredComponents = components.filter(component =>
    component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    component.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleComponentToggle = (componentId) => {
    setComponents(prev =>
      prev.map(comp =>
        comp.id === componentId
          ? { ...comp, isActive: !comp.isActive }
          : comp
      )
    );
  };

  const handleEditComponent = (component) => {
    setActiveComponent(component);
    setIsEditing(true);
  };

  const handleSaveComponent = (updatedComponent) => {
    setComponents(prev =>
      prev.map(comp =>
        comp.id === updatedComponent.id ? updatedComponent : comp
      )
    );
    setIsEditing(false);
    setActiveComponent(null);
  };

  const handleDeleteComponent = (componentId) => {
    if (window.confirm('Are you sure you want to delete this component?')) {
      setComponents(prev => prev.filter(comp => comp.id !== componentId));
    }
  };

  const exportSettings = () => {
    const settingsData = {
      components: components,
      exportDate: new Date().toISOString(),
      version: '1.0.0'
    };
    
    const dataStr = JSON.stringify(settingsData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'portfolio-components-config.json';
    link.click();
  };

  const importSettings = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);
          if (data.components) {
            setComponents(data.components);
          }
        } catch (error) {
          alert('Invalid configuration file');
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="component-manager">
      <div className="component-header">
        <div className="header-info">
          <h2>Component Manager</h2>
          <p>Manage and configure all portfolio components</p>
        </div>
        <div className="header-actions">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search components..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input"
            />
          </div>
          <button onClick={exportSettings} className="btn btn-secondary">
            📤 Export Config
          </button>
          <label htmlFor="import-config" className="btn btn-secondary">
            📥 Import Config
            <input
              id="import-config"
              type="file"
              accept=".json"
              onChange={importSettings}
              style={{ display: 'none' }}
            />
          </label>
        </div>
      </div>

      <div className="components-grid">
        {filteredComponents.map(component => (
          <div key={component.id} className={`component-card ${!component.isActive ? 'inactive' : ''}`}>
            <div className="component-header-card">
              <div className="component-info">
                <h3>{component.name}</h3>
                <p>{component.description}</p>
              </div>
              <div className="component-status">
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={component.isActive}
                    onChange={() => handleComponentToggle(component.id)}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
            
            <div className="component-actions">
              <button
                onClick={() => handleEditComponent(component)}
                className="btn btn-primary btn-sm"
              >
                ✏️ Edit
              </button>
              <button
                onClick={() => handleDeleteComponent(component.id)}
                className="btn btn-danger btn-sm"
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Component Editor Modal */}
      {isEditing && activeComponent && (
        <ComponentEditor
          component={activeComponent}
          onSave={handleSaveComponent}
          onCancel={() => {
            setIsEditing(false);
            setActiveComponent(null);
          }}
        />
      )}

      <div className="component-stats">
        <div className="stat-item">
          <span className="stat-label">Total Components:</span>
          <span className="stat-value">{components.length}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Active Components:</span>
          <span className="stat-value">{components.filter(c => c.isActive).length}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Inactive Components:</span>
          <span className="stat-value">{components.filter(c => !c.isActive).length}</span>
        </div>
      </div>
    </div>
  );
};

// Component Editor Modal
const ComponentEditor = ({ component, onSave, onCancel }) => {
  const [editedComponent, setEditedComponent] = useState(JSON.parse(JSON.stringify(component)));

  const handleSettingChange = (key, value) => {
    setEditedComponent(prev => ({
      ...prev,
      settings: {
        ...prev.settings,
        [key]: value
      }
    }));
  };

  const handleContentChange = (key, value) => {
    setEditedComponent(prev => ({
      ...prev,
      content: {
        ...prev.content,
        [key]: value
      }
    }));
  };

  const handleSave = () => {
    onSave(editedComponent);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content component-editor-modal">
        <div className="modal-header">
          <h3>Edit {component.name}</h3>
          <button onClick={onCancel} className="modal-close">✕</button>
        </div>

        <div className="modal-body">
          <div className="editor-tabs">
            <div className="tab-content">
              <div className="form-section">
                <h4>Basic Settings</h4>
                <div className="form-group">
                  <label className="form-label">Component Name</label>
                  <input
                    type="text"
                    value={editedComponent.name}
                    onChange={(e) => setEditedComponent(prev => ({ ...prev, name: e.target.value }))}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Description</label>
                  <textarea
                    value={editedComponent.description}
                    onChange={(e) => setEditedComponent(prev => ({ ...prev, description: e.target.value }))}
                    className="form-textarea"
                  />
                </div>
              </div>

              <div className="form-section">
                <h4>Component Settings</h4>
                {Object.entries(editedComponent.settings || {}).map(([key, value]) => (
                  <div key={key} className="form-group">
                    <label className="form-label">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</label>
                    {typeof value === 'boolean' ? (
                      <label className="toggle-switch">
                        <input
                          type="checkbox"
                          checked={value}
                          onChange={(e) => handleSettingChange(key, e.target.checked)}
                        />
                        <span className="toggle-slider"></span>
                      </label>
                    ) : typeof value === 'number' ? (
                      <input
                        type="number"
                        value={value}
                        onChange={(e) => handleSettingChange(key, parseInt(e.target.value))}
                        className="form-input"
                      />
                    ) : (
                      <input
                        type="text"
                        value={value}
                        onChange={(e) => handleSettingChange(key, e.target.value)}
                        className="form-input"
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="form-section">
                <h4>Content Settings</h4>
                {Object.entries(editedComponent.content || {}).map(([key, value]) => (
                  <div key={key} className="form-group">
                    <label className="form-label">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</label>
                    {typeof value === 'string' ? (
                      value.length > 50 ? (
                        <textarea
                          value={value}
                          onChange={(e) => handleContentChange(key, e.target.value)}
                          className="form-textarea"
                        />
                      ) : (
                        <input
                          type="text"
                          value={value}
                          onChange={(e) => handleContentChange(key, e.target.value)}
                          className="form-input"
                        />
                      )
                    ) : Array.isArray(value) ? (
                      <textarea
                        value={JSON.stringify(value, null, 2)}
                        onChange={(e) => {
                          try {
                            const parsed = JSON.parse(e.target.value);
                            handleContentChange(key, parsed);
                          } catch (err) {
                            // Keep the text value for editing
                          }
                        }}
                        className="form-textarea"
                      />
                    ) : typeof value === 'object' ? (
                      <textarea
                        value={JSON.stringify(value, null, 2)}
                        onChange={(e) => {
                          try {
                            const parsed = JSON.parse(e.target.value);
                            handleContentChange(key, parsed);
                          } catch (err) {
                            // Keep the text value for editing
                          }
                        }}
                        className="form-textarea"
                      />
                    ) : (
                      <input
                        type="text"
                        value={value}
                        onChange={(e) => handleContentChange(key, e.target.value)}
                        className="form-input"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button onClick={onCancel} className="btn btn-secondary">
            Cancel
          </button>
          <button onClick={handleSave} className="btn btn-primary">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComponentManager;
