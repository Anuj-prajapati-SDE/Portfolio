import React from 'react';
import './ProjectsManager.css';

const ProjectsManager = () => {
  return (
    <div className="projects-manager">
      <div className="projects-header">
        <div className="header-info">
          <h2>Projects Manager</h2>
          <p>Manage your portfolio projects, categories, and showcase settings</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-primary">
            ➕ Add New Project
          </button>
        </div>
      </div>

      <div className="projects-content">
        <div className="projects-stats">
          <div className="stat-card">
            <div className="stat-icon">💼</div>
            <div className="stat-content">
              <h3>5</h3>
              <p>Total Projects</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div className="stat-content">
              <h3>3</h3>
              <p>Completed</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🚧</div>
            <div className="stat-content">
              <h3>2</h3>
              <p>In Progress</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📂</div>
            <div className="stat-content">
              <h3>3</h3>
              <p>Categories</p>
            </div>
          </div>
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <div className="project-header">
              <h3>BlissCamp</h3>
              <span className="project-status completed">Completed</span>
            </div>
            <div className="project-content">
              <p>A comprehensive website for tourists and travelers to discover amazing destinations.</p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
              </div>
            </div>
            <div className="project-actions">
              <button className="btn btn-sm btn-secondary">✏️ Edit</button>
              <button className="btn btn-sm btn-primary">👁️ View</button>
              <button className="btn btn-sm btn-danger">🗑️ Delete</button>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3>HostelEase</h3>
              <span className="project-status in-progress">In Progress</span>
            </div>
            <div className="project-content">
              <p>Management application for hostel students and administrators.</p>
              <div className="project-tech">
                <span className="tech-tag">Flutter</span>
                <span className="tech-tag">Firebase</span>
                <span className="tech-tag">Node.js</span>
              </div>
            </div>
            <div className="project-actions">
              <button className="btn btn-sm btn-secondary">✏️ Edit</button>
              <button className="btn btn-sm btn-primary">👁️ View</button>
              <button className="btn btn-sm btn-danger">🗑️ Delete</button>
            </div>
          </div>
        </div>
      </div>

      <div className="coming-soon">
        <div className="coming-soon-content">
          <div className="coming-soon-icon">🚀</div>
          <h3>Full Projects Manager Coming Soon!</h3>
          <p>
            Advanced project management features including CRUD operations, 
            category management, and project analytics will be available in the next update.
          </p>
          <div className="features-list">
            <div className="feature-item">
              <span className="feature-icon">✨</span>
              <span>Drag & Drop Project Ordering</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📊</span>
              <span>Project Analytics & Insights</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🔗</span>
              <span>Direct Integration with External APIs</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🎨</span>
              <span>Custom Project Templates</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsManager;
