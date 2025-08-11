import React, { useState } from 'react';
import { projectService } from '../../services/projectService';
import { validateProjectData } from '../../utils/projectUtils';
import './ProjectManager.css';

const ProjectManager = ({ onProjectAdded }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Web Development',
    image: '',
    video: '',
    technologies: '',
    features: '',
    links: {
      live: '',
      github: '',
      codepen: ''
    },
    duration: '',
    status: 'Completed',
    priority: 0,
    isActive: true
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.startsWith('links.')) {
      const linkField = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        links: {
          ...prev.links,
          [linkField]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Prepare data for submission
      const projectData = {
        ...formData,
        technologies: formData.technologies.split(',').map(tech => tech.trim()).filter(Boolean),
        features: formData.features.split(',').map(feature => feature.trim()).filter(Boolean),
        priority: parseInt(formData.priority) || 0
      };

      // Validate data
      const validation = validateProjectData(projectData);
      if (!validation.isValid) {
        setError(validation.errors.join(', '));
        setLoading(false);
        return;
      }

      // Create project
      await projectService.createProject(projectData);
      
      // Reset form
      setFormData({
        title: '',
        description: '',
        category: 'Web Development',
        image: '',
        video: '',
        technologies: '',
        features: '',
        links: {
          live: '',
          github: '',
          codepen: ''
        },
        duration: '',
        status: 'Completed',
        priority: 0,
        isActive: true
      });
      
      setIsOpen(false);
      
      // Notify parent component
      if (onProjectAdded) {
        onProjectAdded();
      }
      
      alert('Project added successfully!');
    } catch (err) {
      setError(err.message || 'Failed to add project');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      category: 'Web Development',
      image: '',
      video: '',
      technologies: '',
      features: '',
      links: {
        live: '',
        github: '',
        codepen: ''
      },
      duration: '',
      status: 'Completed',
      priority: 0,
      isActive: true
    });
    setError('');
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="project-manager-toggle"
      >
        Add New Project
      </button>
    );
  }

  return (
    <div className="project-manager-overlay">
      <div className="project-manager-modal">
        <div className="project-manager-header">
          <h2>Add New Project</h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="project-manager-close"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="project-manager-form">
          {error && (
            <div className="project-manager-error">
              {error}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="title">Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="4"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="category">Category *</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
              >
                <option value="Web Development">Web Development</option>
                <option value="App Development">App Development</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="status">Status</label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
              >
                <option value="Completed">Completed</option>
                <option value="In Progress">In Progress</option>
                <option value="On Hold">On Hold</option>
                <option value="Planned">Planned</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="duration">Duration</label>
              <input
                type="text"
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                placeholder="e.g., 3 months"
              />
            </div>

            <div className="form-group">
              <label htmlFor="priority">Priority</label>
              <input
                type="number"
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleInputChange}
                min="0"
                max="10"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="form-group">
            <label htmlFor="video">Video URL</label>
            <input
              type="url"
              id="video"
              name="video"
              value={formData.video}
              onChange={handleInputChange}
              placeholder="https://example.com/video.mp4"
            />
          </div>

          <div className="form-group">
            <label htmlFor="technologies">Technologies (comma-separated)</label>
            <input
              type="text"
              id="technologies"
              name="technologies"
              value={formData.technologies}
              onChange={handleInputChange}
              placeholder="React, Node.js, MongoDB"
            />
          </div>

          <div className="form-group">
            <label htmlFor="features">Features (comma-separated)</label>
            <textarea
              id="features"
              name="features"
              value={formData.features}
              onChange={handleInputChange}
              rows="3"
              placeholder="User Authentication, Real-time Updates, Mobile Responsive"
            />
          </div>

          <div className="form-group">
            <label>Project Links</label>
            <input
              type="url"
              name="links.live"
              value={formData.links.live}
              onChange={handleInputChange}
              placeholder="Live Project URL"
            />
            <input
              type="url"
              name="links.github"
              value={formData.links.github}
              onChange={handleInputChange}
              placeholder="GitHub Repository URL"
            />
            <input
              type="url"
              name="links.codepen"
              value={formData.links.codepen}
              onChange={handleInputChange}
              placeholder="CodePen URL"
            />
          </div>

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="isActive"
                checked={formData.isActive}
                onChange={handleInputChange}
              />
              Active (visible on website)
            </label>
          </div>

          <div className="form-actions">
            <button type="button" onClick={resetForm}>
              Reset
            </button>
            <button type="submit" disabled={loading}>
              {loading ? 'Adding...' : 'Add Project'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectManager;
