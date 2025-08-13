import React, { useState, useEffect } from 'react';
import projectService from '../../../../services/projectService';
import { validateProjectData } from '../../../../utils/projectUtils';
import { checkDatabaseConnection } from '../../../../scripts/databaseSetup';
checkDatabaseConnection();
import './ProjectManager.css';

const ProjectManager = ({ onProjectAdded, editingProject, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
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

  useEffect(() => {
    if (editingProject) {
      setFormData({
        title: editingProject.title || '',
        description: editingProject.description || '',
        category: editingProject.category || 'Web Development',
        image: editingProject.image || '',
        video: editingProject.video || '',
        technologies: Array.isArray(editingProject.technologies) 
          ? editingProject.technologies.join(', ') 
          : '',
        features: Array.isArray(editingProject.features) 
          ? editingProject.features.join(', ') 
          : '',
        links: {
          live: editingProject.links?.live || '',
          github: editingProject.links?.github || '',
          codepen: editingProject.links?.codepen || ''
        },
        duration: editingProject.duration || '',
        status: editingProject.status || 'Completed',
        priority: editingProject.priority || 0,
        isActive: editingProject.isActive !== undefined ? editingProject.isActive : true
      });
    }
  }, [editingProject]);

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

      // Debug: Log the data being sent
      console.log('Project data before sending:', projectData);
      console.log('Links object:', projectData.links);
      console.log('Links type:', typeof projectData.links);

      // Validate data
      const validation = validateProjectData(projectData);
      if (!validation.isValid) {
        setError(validation.errors.join(', '));
        setLoading(false);
        return;
      }

      if (editingProject) {
        // Update existing project
        console.log('Editing project object:', editingProject);
        console.log('Available ID fields:', {
          id: editingProject.id,
          $id: editingProject.$id,
          _id: editingProject._id
        });
        
        const projectId = editingProject.$id || editingProject.id || editingProject._id;
        if (!projectId) {
          throw new Error('Project ID is missing. Cannot update project.');
        }
        
        await projectService.updateProject(projectId, projectData);
        alert('Project updated successfully!');
      } else {
        // Create new project
        await projectService.createProject(projectData);
        alert('Project added successfully!');
      }
      
      // Reset form
      resetForm();
      setIsOpen(false);
      
      // Notify parent component
      if (onProjectAdded) {
        onProjectAdded();
      }
      
      if (onClose) {
        onClose();
      }
      
    } catch (err) {
      setError(err.message || `Failed to ${editingProject ? 'update' : 'add'} project`);
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

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="project-manager-overlay">
      <div className="project-manager-modal">
        <div className="project-manager-header">
          <h2>{editingProject ? 'Edit Project' : 'Add New Project'}</h2>
          <button 
            onClick={handleClose}
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
            <button type="button" onClick={handleClose}>
              Cancel
            </button>
            <button type="submit" disabled={loading}>
              {loading 
                ? (editingProject ? 'Updating...' : 'Adding...') 
                : (editingProject ? 'Update Project' : 'Add Project')
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectManager;
