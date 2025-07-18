import React, { useState, useRef, useEffect } from 'react'
import './Projects.css'
import { projectService } from '../../services/projectService'
import { filterProjectsByCategory } from '../../utils/projectUtils'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(6);
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState(['All']);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch projects on component mount
  useEffect(() => {
    fetchProjects();
    fetchCategories();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      const fetchedProjects = await projectService.getProjects();
      setProjects(fetchedProjects);
    } catch (err) {
      setError('Failed to fetch projects. Please try again later.');
      console.error('Error fetching projects:', err);
      // Fallback to empty array
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const fetchedCategories = await projectService.getCategories();
      setCategories(fetchedCategories);
    } catch (err) {
      console.error('Error fetching categories:', err);
      // Keep default categories
    }
  };

  // Refresh projects when needed
  const refreshProjects = () => {
    fetchProjects();
  };

  // Helper functions for video playback
  const playVideo = (video) => {
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error('Error playing video:', error);
        });
      }
    }
  };

  const pauseVideo = (video) => {
    if (video) {
      try {
        video.pause();
        video.currentTime = 0;
      } catch (error) {
        console.error('Error pausing video:', error);
      }
    }
  };

  // Project component with video interactions
  const ProjectCard = ({ project }) => {
    const videoRef = useRef(null);
    
    const handleMouseEnter = () => {
      if (videoRef.current) {
        videoRef.current.style.opacity = 1;
        playVideo(videoRef.current);
      }
    };
    
    const handleMouseLeave = () => {
      if (videoRef.current) {
        videoRef.current.style.opacity = 0;
        pauseVideo(videoRef.current);
      }
    };
    
    const handleTouchStart = () => {
      if (videoRef.current) {
        videoRef.current.style.opacity = 1;
        playVideo(videoRef.current);
      }
    };
    
    const handleTouchEnd = () => {
      if (videoRef.current) {
        videoRef.current.style.opacity = 0;
        pauseVideo(videoRef.current);
      }
    };

    return (
      <div 
        className="portfolio-group relative overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="portfolio-media-wrapper relative">
          <img 
            src={project.image || project.imageUrl || "https://picsum.photos/600/400"} 
            alt={project.title} 
            className="portfolio-image portfolio-aspect-3-2 portfolio-object-cover" 
          />
          {project.video && (
            <video 
              ref={videoRef}
              src={project.video || project.videoUrl} 
              muted 
              loop 
              className="portfolio-video portfolio-aspect-3-2 portfolio-object-cover"
              style={{ opacity: 0 }}
            />
          )}
          <div className="portfolio-overlay-blur"></div>
        </div>
        <div className="portfolio-overlay portfolio-absolute portfolio-inset-0 portfolio-bg-gradient-to-t"></div>
        <div className="portfolio-absolute portfolio-bottom-0 portfolio-p-4">
          <p className="portfolio-category">{project.category}</p>
          <p className="portfolio-progress">{project.progress || project.status}</p>
          <h3 className="portfolio-text-xl portfolio-font-semibold portfolio-text-white">{project.title}</h3>
          <p className="portfolio-description">{project.description}</p>
          <div className="portfolio-links mt-4">
            <button 
              onClick={() => {
                const index = filteredProjects.findIndex(p => p.$id === project.$id || p.id === project.id);
                if (index !== -1) setActiveProject(index);
              }}
              className="portfolio-project-btn"
            >
              View Details 
            </button>
            {project.links?.live && (
              <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="portfolio-project-btn">
                <button>
                  Live Preview           
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }; 
 
  // Filter projects based on selected category
  const filteredProjects = filterProjectsByCategory(projects, selectedCategory);

  // Pagination logic
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Reset to first page when category changes
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // Pagination component
  const Pagination = () => {
    if (totalPages <= 1) return null;

    return (
      <div className="pagination-container">
        <button 
          className="pagination-btn"
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        
        <div className="pagination-numbers">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              className={`pagination-number ${currentPage === page ? 'active' : ''}`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
        </div>
        
        <button 
          className="pagination-btn"
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div className="portfolio-min-h-screen portfolio-bg-black portfolio-p-8">
      {/* Header with refresh button */}
      <div className="portfolio-header-section portfolio-mb-8">
        <h1 className="portfolio-text-4xl portfolio-font-bold portfolio-text-white portfolio-mb-4">
          My Projects
        </h1>
        <div className="portfolio-flex portfolio-items-center portfolio-justify-between">
          <p className="portfolio-text-gray-400">
            Explore my collection of projects across different categories
          </p>
          <button 
            onClick={refreshProjects}
            className="portfolio-refresh-btn portfolio-text-white portfolio-bg-gray-800 portfolio-px-4 portfolio-py-2 portfolio-rounded-lg hover:portfolio-bg-gray-700 transition-colors"
            disabled={loading}
          >
            {loading ? 'Refreshing...' : 'Refresh'}
          </button>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="portfolio-loading-container portfolio-flex portfolio-justify-center portfolio-items-center portfolio-py-20">
          <div className="portfolio-loading-spinner portfolio-border-4 portfolio-border-gray-300 portfolio-border-t-white portfolio-rounded-full portfolio-w-12 portfolio-h-12 portfolio-animate-spin"></div>
          <p className="portfolio-text-white portfolio-ml-4">Loading projects...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="portfolio-error-container portfolio-bg-red-900 portfolio-border portfolio-border-red-500 portfolio-text-red-100 portfolio-px-4 portfolio-py-3 portfolio-rounded portfolio-mb-8">
          <div className="portfolio-flex portfolio-items-center">
            <svg className="portfolio-w-5 portfolio-h-5 portfolio-mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>{error}</span>
          </div>
          <button 
            onClick={refreshProjects}
            className="portfolio-mt-2 portfolio-text-sm portfolio-underline hover:portfolio-no-underline"
          >
            Try again
          </button>
        </div>
      )}

      {/* Content - only show if not loading */}
      {!loading && (
        <>
          {/* Filter Buttons */}
          <div className="portfolio-mb-8 portfolio-flex portfolio-flex-wrap portfolio-gap-4">
            {categories.map(category => (
              <button
                key={category}
                className={selectedCategory === category 
                  ? 'portfolio-bg-white portfolio-text-black filterBtn' 
                  : 'portfolio-text-white portfolio-bg-black filterBtn'}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="portfolio-grid portfolio-gap-6 portfolio-sm-grid-cols-2 portfolio-lg-grid-cols-3">
              {currentProjects.map(project => (
                <ProjectCard key={project.$id || project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="portfolio-no-projects portfolio-text-center portfolio-py-20">
              <div className="portfolio-text-gray-400 portfolio-text-xl">
                No projects found in this category
              </div>
              <p className="portfolio-text-gray-500 portfolio-mt-2">
                Try selecting a different category or check back later
              </p>
            </div>
          )}
     
          {/* Pagination */}
          <Pagination />
        </>
      )}

      {/* Detailed Project Modal */}
      {activeProject !== null && filteredProjects[activeProject] && (
        <div className="project-modal-overlay" onClick={() => setActiveProject(null)}>
          <div className="project-modal background-shadow" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveProject(null)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            
            <div className="modal-content">
              <div className="modal-image">
                <img 
                  src={filteredProjects[activeProject]?.image || filteredProjects[activeProject]?.imageUrl || "https://picsum.photos/600/400"} 
                  alt={filteredProjects[activeProject]?.title} 
                />
              </div>
              
              <div className="modal-details">
                <div className="modal-header">
                  <h2>{filteredProjects[activeProject]?.title}</h2>
                  <div className="project-meta">
                    <span className="duration">
                      Duration: {filteredProjects[activeProject]?.duration || 'Not specified'}
                    </span>
                    <span className={`status ${filteredProjects[activeProject]?.status?.toLowerCase().replace(' ', '-')}`}>
                      {filteredProjects[activeProject]?.status || 'Unknown'}
                    </span>
                  </div>
                </div>
                
                <p className="modal-description">{filteredProjects[activeProject]?.description}</p>
                
                {filteredProjects[activeProject]?.features && filteredProjects[activeProject]?.features.length > 0 && (
                  <div className="features-section">
                    <h4>Key Features</h4>
                    <ul className="features-list">
                      {filteredProjects[activeProject]?.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {filteredProjects[activeProject]?.technologies && filteredProjects[activeProject]?.technologies.length > 0 && (
                  <div className="modal-technologies">
                    <h4>Technologies Used</h4>
                    <div className="tech-grid">
                      {filteredProjects[activeProject]?.technologies?.map((tech, index) => (
                        <span key={index} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="modal-actions">
                  {filteredProjects[activeProject]?.links?.live && (
                    <a 
                      href={filteredProjects[activeProject]?.links.live} 
                      className="modal-btn primary" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View Live Project
                    </a>
                  )}
                  {filteredProjects[activeProject]?.links?.github && (
                    <a 
                      href={filteredProjects[activeProject]?.links.github} 
                      className="modal-btn secondary" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;