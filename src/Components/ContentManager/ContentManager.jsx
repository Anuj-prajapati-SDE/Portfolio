import React, { useState, useEffect } from 'react';
import './ContentManager.css';

const ContentManager = () => {
  const [contentSections, setContentSections] = useState([]);
  const [activeSection, setActiveSection] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  useEffect(() => {
    // Initialize content sections
    const sections = [
      {
        id: 'hero',
        name: 'Hero Section',
        type: 'hero',
        lastModified: '2024-01-15',
        status: 'published',
        content: {
          mainTitle: 'Welcome to My Portfolio',
          subtitle: 'Full Stack Developer & UI/UX Designer',
          description: 'Creating amazing web experiences with modern technologies',
          ctaText: 'View My Work',
          backgroundImage: '',
          overlayOpacity: 0.7
        }
      },
      {
        id: 'about',
        name: 'About Me',
        type: 'about',
        lastModified: '2024-01-14',
        status: 'published',
        content: {
          title: 'About Me',
          introduction: 'I am a passionate Full Stack Developer with expertise in modern web technologies.',
          description: `I excel in Mern-stack development, crafting responsive and intuitive user interfaces 
                       with React.js, seamlessly integrated with robust back-end systems for high-performing 
                       web applications.`,
          image: 'pic-1.jpg',
          skills: [
            'React.js', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'HTML5', 'CSS3', 
            'Redux', 'Tailwind CSS', 'Bootstrap', 'Git', 'Docker'
          ],
          experience: '1+ Years',
          projects: '5+ Projects',
          clients: '100% Satisfaction'
        }
      },
      {
        id: 'services',
        name: 'Services',
        type: 'services',
        lastModified: '2024-01-13',
        status: 'published',
        content: {
          title: 'WHAT SERVICES I PROVIDE',
          subtitle: 'Blending Creativity with Functionality',
          description: `I am a passionate and dedicated Mern Stack developer, specializing in creating 
                       unique and effective design solutions. With extensive experience in web, apps, 
                       and branding, as well as effective UX/UI design.`,
          services: [
            {
              name: 'Web Development',
              description: 'Full-stack web application development',
              icon: '💻',
              features: ['Responsive Design', 'Modern Frameworks', 'Database Integration']
            },
            {
              name: 'UI/UX Design',
              description: 'User-centered design solutions',
              icon: '🎨',
              features: ['User Research', 'Prototyping', 'Interface Design']
            },
            {
              name: 'Mobile Development',
              description: 'Cross-platform mobile applications',
              icon: '📱',
              features: ['React Native', 'Flutter', 'Progressive Web Apps']
            }
          ],
          technologies: [
            { name: 'HTML5', icon: 'html5' },
            { name: 'CSS3', icon: 'css3' },
            { name: 'JavaScript', icon: 'javascript' },
            { name: 'React', icon: 'react' },
            { name: 'Node.js', icon: 'nodejs' },
            { name: 'MongoDB', icon: 'mongodb' }
          ]
        }
      },
      {
        id: 'experience',
        name: 'Experience',
        type: 'experience',
        lastModified: '2024-01-12',
        status: 'published',
        content: {
          title: 'Experience',
          experiences: [
            {
              position: 'Software Intern',
              company: 'Morling Global Private Limited',
              duration: 'January 2025 - Present',
              description: 'Developing scalable web applications using the MERN stack, optimizing performance, and ensuring seamless user experiences.',
              technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
              achievements: [
                'Built responsive web applications',
                'Optimized application performance',
                'Collaborated with cross-functional teams'
              ]
            }
          ],
          skills: [
            { category: 'Frontend', items: ['React', 'JavaScript', 'HTML/CSS', 'Redux'] },
            { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'REST APIs'] },
            { category: 'Tools', items: ['Git', 'Docker', 'VS Code', 'Postman'] },
            { category: 'Other', items: ['Agile', 'Problem Solving', 'Team Collaboration'] }
          ]
        }
      },
      {
        id: 'projects',
        name: 'Projects Showcase',
        type: 'projects',
        lastModified: '2024-01-11',
        status: 'published',
        content: {
          title: 'PROJECTS I WORKED ON 24-25',
          subtitle: 'Featured Work',
          description: 'A collection of my recent projects showcasing my skills and expertise',
          categories: ['All', 'Web Development', 'App Development', 'UI/UX Design'],
          featuredProjects: [
            {
              id: 'blisscamp',
              title: 'BlissCamp',
              category: 'Web Development',
              description: 'A comprehensive website for tourists and travelers',
              image: 'project-img-1.png',
              technologies: ['React', 'Node.js', 'MongoDB'],
              status: 'Completed',
              featured: true
            },
            {
              id: 'hostelease',
              title: 'HostelEase',
              category: 'App Development',
              description: 'Management application for hostel operations',
              image: 'project-img-2.png',
              technologies: ['Flutter', 'Firebase', 'Node.js'],
              status: 'In Progress',
              featured: true
            }
          ]
        }
      },
      {
        id: 'testimonials',
        name: 'Testimonials',
        type: 'testimonials',
        lastModified: '2024-01-10',
        status: 'published',
        content: {
          title: 'What Clients Say',
          subtitle: 'Client Testimonials',
          testimonials: [
            {
              id: 1,
              name: 'John Doe',
              position: 'CEO',
              company: 'Tech Company',
              content: 'Excellent work on our project. Highly recommended!',
              rating: 5,
              image: 'customer-img-1.jpeg'
            },
            {
              id: 2,
              name: 'Jane Smith',
              position: 'Project Manager',
              company: 'Digital Agency',
              content: 'Professional and reliable developer. Great communication!',
              rating: 5,
              image: 'customer-img-2.jpeg'
            }
          ]
        }
      },
      {
        id: 'contact',
        name: 'Contact Information',
        type: 'contact',
        lastModified: '2024-01-09',
        status: 'published',
        content: {
          title: 'Get In Touch',
          subtitle: "Let's Work Together",
          description: 'Feel free to reach out for collaborations or just a friendly hello!',
          contactInfo: {
            email: 'anuj@example.com',
            phone: '+91 XXXXXXXXXX',
            location: 'India',
            availability: 'Available for freelance work'
          },
          contactForm: {
            enabled: true,
            fields: ['name', 'email', 'message'],
            submitText: 'Send Message',
            successMessage: 'Thank you for your message! I\'ll get back to you soon.'
          },
          socialLinks: {
            linkedin: 'https://linkedin.com/in/anuj-prajapati',
            github: 'https://github.com/Anuj-prajapati-SDE',
            instagram: 'https://instagram.com/anuj_prajapati',
            twitter: ''
          }
        }
      },
      {
        id: 'footer',
        name: 'Footer Content',
        type: 'footer',
        lastModified: '2024-01-08',
        status: 'published',
        content: {
          thankYouMessage: 'Thanks for Coming',
          copyright: '© 2024-2025 ANUJ PRAJAPATI. All rights reserved.',
          links: [
            { text: 'Privacy Policy', url: '#privacy' },
            { text: 'Terms of Use', url: '#terms' }
          ],
          socialLinks: {
            linkedin: 'https://linkedin.com/in/anuj-prajapati',
            github: 'https://github.com/Anuj-prajapati-SDE',
            instagram: 'https://instagram.com/anuj_prajapati'
          }
        }
      }
    ];

    setContentSections(sections);
  }, []);

  const filteredSections = contentSections.filter(section => {
    const matchesSearch = section.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         section.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || section.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const handleEditSection = (section) => {
    setActiveSection({ ...section });
    setIsEditing(true);
  };

  const handleSaveSection = (updatedSection) => {
    setContentSections(prev =>
      prev.map(section =>
        section.id === updatedSection.id
          ? { ...updatedSection, lastModified: new Date().toISOString().split('T')[0] }
          : section
      )
    );
    setIsEditing(false);
    setActiveSection(null);
  };

  const handleDeleteSection = (sectionId) => {
    if (window.confirm('Are you sure you want to delete this content section?')) {
      setContentSections(prev => prev.filter(section => section.id !== sectionId));
    }
  };

  const handleStatusChange = (sectionId, newStatus) => {
    setContentSections(prev =>
      prev.map(section =>
        section.id === sectionId
          ? { ...section, status: newStatus, lastModified: new Date().toISOString().split('T')[0] }
          : section
      )
    );
  };

  const exportContent = () => {
    const contentData = {
      sections: contentSections,
      exportDate: new Date().toISOString(),
      version: '1.0.0'
    };
    
    const dataStr = JSON.stringify(contentData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'portfolio-content.json';
    link.click();
  };

  const importContent = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);
          if (data.sections) {
            setContentSections(data.sections);
          }
        } catch (error) {
          alert('Invalid content file');
        }
      };
      reader.readAsText(file);
    }
  };

  const sectionTypes = [...new Set(contentSections.map(section => section.type))];

  return (
    <div className="content-manager">
      <div className="content-header">
        <div className="header-info">
          <h2>Content Manager</h2>
          <p>Manage all content sections across your portfolio</p>
        </div>
        <div className="header-actions">
          <div className="filter-group">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="form-select"
            >
              <option value="all">All Types</option>
              {sectionTypes.map(type => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <div className="search-box">
            <input
              type="text"
              placeholder="Search content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input"
            />
          </div>
          <button onClick={exportContent} className="btn btn-secondary">
            📤 Export
          </button>
          <label htmlFor="import-content" className="btn btn-secondary">
            📥 Import
            <input
              id="import-content"
              type="file"
              accept=".json"
              onChange={importContent}
              style={{ display: 'none' }}
            />
          </label>
        </div>
      </div>

      <div className="content-grid">
        {filteredSections.map(section => (
          <div key={section.id} className={`content-card ${section.status}`}>
            <div className="content-card-header">
              <div className="content-info">
                <h3>{section.name}</h3>
                <div className="content-meta">
                  <span className={`content-type ${section.type}`}>
                    {section.type}
                  </span>
                  <span className="last-modified">
                    Last modified: {section.lastModified}
                  </span>
                </div>
              </div>
              <div className="content-status">
                <select
                  value={section.status}
                  onChange={(e) => handleStatusChange(section.id, e.target.value)}
                  className={`status-select ${section.status}`}
                >
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
            </div>

            <div className="content-preview">
              <ContentPreview section={section} />
            </div>

            <div className="content-actions">
              <button
                onClick={() => handleEditSection(section)}
                className="btn btn-primary btn-sm"
              >
                ✏️ Edit
              </button>
              <button
                onClick={() => handleDeleteSection(section.id)}
                className="btn btn-danger btn-sm"
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Content Editor Modal */}
      {isEditing && activeSection && (
        <ContentEditor
          section={activeSection}
          onSave={handleSaveSection}
          onCancel={() => {
            setIsEditing(false);
            setActiveSection(null);
          }}
        />
      )}

      <div className="content-stats">
        <div className="stat-item">
          <span className="stat-label">Total Sections:</span>
          <span className="stat-value">{contentSections.length}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Published:</span>
          <span className="stat-value">{contentSections.filter(s => s.status === 'published').length}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Drafts:</span>
          <span className="stat-value">{contentSections.filter(s => s.status === 'draft').length}</span>
        </div>
      </div>
    </div>
  );
};

// Content Preview Component
const ContentPreview = ({ section }) => {
  const renderPreview = () => {
    switch (section.type) {
      case 'hero':
        return (
          <div className="hero-preview">
            <h4>{section.content.mainTitle}</h4>
            <p>{section.content.subtitle}</p>
          </div>
        );
      case 'about':
        return (
          <div className="about-preview">
            <h4>{section.content.title}</h4>
            <p>{section.content.introduction?.substring(0, 100)}...</p>
          </div>
        );
      case 'services':
        return (
          <div className="services-preview">
            <h4>{section.content.title}</h4>
            <p>{section.content.services?.length || 0} services listed</p>
          </div>
        );
      case 'projects':
        return (
          <div className="projects-preview">
            <h4>{section.content.title}</h4>
            <p>{section.content.featuredProjects?.length || 0} featured projects</p>
          </div>
        );
      case 'testimonials':
        return (
          <div className="testimonials-preview">
            <h4>{section.content.title}</h4>
            <p>{section.content.testimonials?.length || 0} testimonials</p>
          </div>
        );
      default:
        return (
          <div className="default-preview">
            <h4>{section.name}</h4>
            <p>Content preview not available</p>
          </div>
        );
    }
  };

  return <div className="preview-content">{renderPreview()}</div>;
};

// Content Editor Modal
const ContentEditor = ({ section, onSave, onCancel }) => {
  const [editedSection, setEditedSection] = useState(JSON.parse(JSON.stringify(section)));

  const handleContentChange = (path, value) => {
    const pathArray = path.split('.');
    const newSection = { ...editedSection };
    let current = newSection.content;
    
    for (let i = 0; i < pathArray.length - 1; i++) {
      if (!current[pathArray[i]]) {
        current[pathArray[i]] = {};
      }
      current = current[pathArray[i]];
    }
    
    current[pathArray[pathArray.length - 1]] = value;
    setEditedSection(newSection);
  };

  const handleArrayAdd = (path, newItem) => {
    const pathArray = path.split('.');
    const newSection = { ...editedSection };
    let current = newSection.content;
    
    for (let i = 0; i < pathArray.length - 1; i++) {
      current = current[pathArray[i]];
    }
    
    if (!current[pathArray[pathArray.length - 1]]) {
      current[pathArray[pathArray.length - 1]] = [];
    }
    
    current[pathArray[pathArray.length - 1]].push(newItem);
    setEditedSection(newSection);
  };

  const handleArrayRemove = (path, index) => {
    const pathArray = path.split('.');
    const newSection = { ...editedSection };
    let current = newSection.content;
    
    for (let i = 0; i < pathArray.length - 1; i++) {
      current = current[pathArray[i]];
    }
    
    current[pathArray[pathArray.length - 1]].splice(index, 1);
    setEditedSection(newSection);
  };

  const renderContentEditor = () => {
    switch (section.type) {
      case 'hero':
        return (
          <HeroEditor
            content={editedSection.content}
            onChange={handleContentChange}
          />
        );
      case 'about':
        return (
          <AboutEditor
            content={editedSection.content}
            onChange={handleContentChange}
            onArrayAdd={handleArrayAdd}
            onArrayRemove={handleArrayRemove}
          />
        );
      case 'services':
        return (
          <ServicesEditor
            content={editedSection.content}
            onChange={handleContentChange}
            onArrayAdd={handleArrayAdd}
            onArrayRemove={handleArrayRemove}
          />
        );
      default:
        return (
          <div className="default-editor">
            <h4>Generic Content Editor</h4>
            <textarea
              value={JSON.stringify(editedSection.content, null, 2)}
              onChange={(e) => {
                try {
                  const parsed = JSON.parse(e.target.value);
                  setEditedSection(prev => ({ ...prev, content: parsed }));
                } catch (error) {
                  // Keep the invalid JSON for editing
                }
              }}
              className="form-textarea json-editor"
              rows={15}
            />
          </div>
        );
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content content-editor-modal">
        <div className="modal-header">
          <h3>Edit {section.name}</h3>
          <button onClick={onCancel} className="modal-close">✕</button>
        </div>

        <div className="modal-body">
          <div className="basic-info">
            <div className="form-group">
              <label className="form-label">Section Name</label>
              <input
                type="text"
                value={editedSection.name}
                onChange={(e) => setEditedSection(prev => ({ ...prev, name: e.target.value }))}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Status</label>
              <select
                value={editedSection.status}
                onChange={(e) => setEditedSection(prev => ({ ...prev, status: e.target.value }))}
                className="form-select"
              >
                <option value="published">Published</option>
                <option value="draft">Draft</option>
                <option value="archived">Archived</option>
              </select>
            </div>
          </div>

          {renderContentEditor()}
        </div>

        <div className="modal-footer">
          <button onClick={onCancel} className="btn btn-secondary">
            Cancel
          </button>
          <button onClick={() => onSave(editedSection)} className="btn btn-primary">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

// Specific content editors
const HeroEditor = ({ content, onChange }) => (
  <div className="content-editor">
    <h4>Hero Section Content</h4>
    <div className="form-group">
      <label className="form-label">Main Title</label>
      <input
        type="text"
        value={content.mainTitle || ''}
        onChange={(e) => onChange('mainTitle', e.target.value)}
        className="form-input"
      />
    </div>
    <div className="form-group">
      <label className="form-label">Subtitle</label>
      <input
        type="text"
        value={content.subtitle || ''}
        onChange={(e) => onChange('subtitle', e.target.value)}
        className="form-input"
      />
    </div>
    <div className="form-group">
      <label className="form-label">Description</label>
      <textarea
        value={content.description || ''}
        onChange={(e) => onChange('description', e.target.value)}
        className="form-textarea"
      />
    </div>
    <div className="form-group">
      <label className="form-label">CTA Button Text</label>
      <input
        type="text"
        value={content.ctaText || ''}
        onChange={(e) => onChange('ctaText', e.target.value)}
        className="form-input"
      />
    </div>
  </div>
);

const AboutEditor = ({ content, onChange, onArrayAdd, onArrayRemove }) => (
  <div className="content-editor">
    <h4>About Section Content</h4>
    <div className="form-group">
      <label className="form-label">Title</label>
      <input
        type="text"
        value={content.title || ''}
        onChange={(e) => onChange('title', e.target.value)}
        className="form-input"
      />
    </div>
    <div className="form-group">
      <label className="form-label">Introduction</label>
      <textarea
        value={content.introduction || ''}
        onChange={(e) => onChange('introduction', e.target.value)}
        className="form-textarea"
      />
    </div>
    <div className="form-group">
      <label className="form-label">Description</label>
      <textarea
        value={content.description || ''}
        onChange={(e) => onChange('description', e.target.value)}
        className="form-textarea"
        rows={5}
      />
    </div>
    <div className="form-group">
      <label className="form-label">Profile Image</label>
      <input
        type="text"
        value={content.image || ''}
        onChange={(e) => onChange('image', e.target.value)}
        className="form-input"
        placeholder="Image filename"
      />
    </div>
    <div className="form-group">
      <label className="form-label">Skills</label>
      <div className="array-editor">
        {(content.skills || []).map((skill, index) => (
          <div key={index} className="array-item">
            <input
              type="text"
              value={skill}
              onChange={(e) => {
                const newSkills = [...(content.skills || [])];
                newSkills[index] = e.target.value;
                onChange('skills', newSkills);
              }}
              className="form-input"
            />
            <button
              type="button"
              onClick={() => onArrayRemove('skills', index)}
              className="remove-item-btn"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => onArrayAdd('skills', '')}
          className="add-item-btn"
        >
          Add Skill
        </button>
      </div>
    </div>
  </div>
);

const ServicesEditor = ({ content, onChange, onArrayAdd, onArrayRemove }) => (
  <div className="content-editor">
    <h4>Services Section Content</h4>
    <div className="form-group">
      <label className="form-label">Title</label>
      <input
        type="text"
        value={content.title || ''}
        onChange={(e) => onChange('title', e.target.value)}
        className="form-input"
      />
    </div>
    <div className="form-group">
      <label className="form-label">Subtitle</label>
      <input
        type="text"
        value={content.subtitle || ''}
        onChange={(e) => onChange('subtitle', e.target.value)}
        className="form-input"
      />
    </div>
    <div className="form-group">
      <label className="form-label">Description</label>
      <textarea
        value={content.description || ''}
        onChange={(e) => onChange('description', e.target.value)}
        className="form-textarea"
        rows={4}
      />
    </div>
    
    <div className="services-list">
      <h5>Services</h5>
      {(content.services || []).map((service, index) => (
        <div key={index} className="service-item">
          <div className="form-group">
            <label className="form-label">Service Name</label>
            <input
              type="text"
              value={service.name || ''}
              onChange={(e) => {
                const newServices = [...(content.services || [])];
                newServices[index] = { ...service, name: e.target.value };
                onChange('services', newServices);
              }}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea
              value={service.description || ''}
              onChange={(e) => {
                const newServices = [...(content.services || [])];
                newServices[index] = { ...service, description: e.target.value };
                onChange('services', newServices);
              }}
              className="form-textarea"
            />
          </div>
          <button
            type="button"
            onClick={() => onArrayRemove('services', index)}
            className="remove-item-btn"
          >
            Remove Service
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => onArrayAdd('services', { name: '', description: '', icon: '💻', features: [] })}
        className="add-item-btn"
      >
        Add Service
      </button>
    </div>
  </div>
);

export default ContentManager;
