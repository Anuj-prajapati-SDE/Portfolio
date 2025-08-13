import React, { useState, useEffect } from 'react';
import ProjectManager from '../ProjectManager/ProjectManager';
import projectService from '../../../../services/projectService';
import './ProjectsManager.css';

const ProjectsManager = () => {
  const [projects, setProjects] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    completed: 0,
    inProgress: 0,
    categories: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showAddProject, setShowAddProject] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState(['All']);

  useEffect(() => {
    loadProjects();
    loadStats();
    loadCategories();
  }, []);

  const loadProjects = async () => {
    try {
      setLoading(true);
      const projectsData = await projectService.getProjects();
      setProjects(projectsData);
      setError('');
    } catch (err) {
      setError('Failed to load projects');
      console.error('Error loading projects:', err);
    } finally {
      setLoading(false);
    }
  };

  const loadStats = async () => {
    try {
      const statsData = await projectService.getProjectStats();
      setStats({
        total: statsData.total,
        completed: statsData.completed,
        inProgress: statsData.inProgress,
        categories: Object.keys(statsData.byCategory).length
      });
    } catch (err) {
      console.error('Error loading stats:', err);
    }
  };

  const loadCategories = async () => {
    try {
      const categoriesData = await projectService.getCategories();
      setCategories(categoriesData);
    } catch (err) {
      console.error('Error loading categories:', err);
    }
  };

  const handleProjectAdded = () => {
    loadProjects();
    loadStats();
    loadCategories();
    setShowAddProject(false);
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
    setShowAddProject(true);
  };

  const handleDeleteProject = async (projectId) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await projectService.deleteProject(projectId);
        loadProjects();
        loadStats();
        alert('Project deleted successfully!');
      } catch (err) {
        alert('Failed to delete project');
        console.error('Error deleting project:', err);
      }
    }
  };

  

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'completed': return 'completed';
      case 'in progress': return 'in-progress';
      case 'on hold': return 'on-hold';
      case 'planned': return 'planned';
      default: return 'unknown';
    }
  };

  return (
    <div className="projects-manager">
      <div className="projects-header">
        <div className="header-info">
          <h2>Projects Manager</h2>
          <p>Manage your portfolio projects, categories, and showcase settings</p>
        </div>
        <div className="header-actions">
          <button 
            className="btn btn-primary"
            onClick={() => setShowAddProject(true)}
          >
            ➕ Add New Project
          </button>
        </div>
      </div>

      {error && (
        <div className="error-message">
          <p>⚠️ {error}</p>
        </div>
      )}

      <div className="projects-content">
        <div className="projects-stats">
          <div className="stat-card">
            <div className="stat-icon">💼</div>
            <div className="stat-content">
              <h3>{stats.total}</h3>
              <p>Total Projects</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div className="stat-content">
              <h3>{stats.completed}</h3>
              <p>Completed</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🚧</div>
            <div className="stat-content">
              <h3>{stats.inProgress}</h3>
              <p>In Progress</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📂</div>
            <div className="stat-content">
              <h3>{stats.categories}</h3>
              <p>Categories</p>
            </div>
          </div>
        </div>

        <div className="projects-controls">
          <div className="search-controls">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="category-select"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading projects...</p>
          </div>
        ) : (
          <div className="projects-grid">
            {filteredProjects.length === 0 ? (
              <div className="no-projects">
                <div className="no-projects-icon">📝</div>
                <h3>No projects found</h3>
                <p>Start by adding your first project!</p>
              </div>
            ) : (
              filteredProjects.map(project => (
                <div key={project.id} className={`project-card ${!project.isActive ? 'inactive' : ''}`}>
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <div className="project-meta">
                      <span className={`project-status ${getStatusClass(project.status)}`}>
                        {project.status}
                      </span>
                      {!project.isActive && (
                        <span className="inactive-badge">Inactive</span>
                      )}
                    </div>
                  </div>
                  <div className="project-content">
                    <p>{project.description}</p>
                    <div className="project-details">
                      <span className="project-category">📁 {project.category}</span>
                      <span className="project-duration">⏱️ {project.duration}</span>
                    </div>
                    <div className="project-tech">
                      {project.technologies?.slice(0, 3).map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                      {project.technologies?.length > 3 && (
                        <span className="tech-tag">+{project.technologies.length - 3} more</span>
                      )}
                    </div>
                  </div>
                  <div className="project-actions">
                    <button 
                      className="btn btn-sm btn-secondary"
                      onClick={() => handleEditProject(project)}
                    >
                      ✏️ Edit
                    </button>
                    
                    {project.links?.live && (
                      <a 
                        href={project.links.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-primary"
                      >
                        🔗 View
                      </a>
                    )}
                    <button 
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDeleteProject(project.id)}
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {showAddProject && (
        <ProjectManager 
          onProjectAdded={handleProjectAdded}
          editingProject={editingProject}
          onClose={() => {
            setShowAddProject(false);
            setEditingProject(null);
          }}
        />
      )}
    </div>
  );
};

export default ProjectsManager;
