import React, { useState, useRef, useEffect, useMemo, useCallback, memo } from 'react'
import './Projects.css' // Assuming you have a CSS file for styling 
import projectService from '../../services/projectService'
// Import fallback images
import Project_1 from '../../assets/project-img-1.png'
import Project_2 from '../../assets/project-img-2.png'
import Project_3 from '../../assets/project-img-3.png'
import Project_4 from '../../assets/project-img-4.png'
import Video_1 from '../../assets/Video/project_v1.mp4'
import Video_3 from '../../assets/Video/project_v3.mp4' 
import Video_4 from '../../assets/Video/project_v4.mp4' 

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(6); 
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState(['All']);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Fallback projects data (used only when no data from Appwrite)
  const fallbackProjects = [
    {
      id: '1', 
      title: 'Code Quest',
      category: 'Web Development',
      image: Project_1,
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      video: Video_1,
      description: 'CodeQuest envisions a world where every aspiring programmer has a platform to hone their skills, compete globally, and transform their potential into reality',
      links: {
        live: 'https://codequest-frontend.onrender.com/',
        github: '', 
        codepen: 'https://github.com/NK2552003/BlissCampIndia'
      },
      features: [
        "User Authentication & Authorization",
        "User Roles and Functionality",
        "User Dashboard",
        "Teacher Dashboard",
        "Responsive and User-Friendly UI",
        "Admin Dashboard",
        "Responsive and User-Friendly UI"
      ],
      duration: "3 months",
      status: "Completed",
      progress: 'Completed',
      isActive: true
    },
    {
      id: '2',
      title: "Skill Vedaa",
      category: 'Web Development',
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: Project_2,
      video:  "",
      description: 'An animated moving boy using pure CSS, HTML & JS',
      links: {
        live: 'https://codepen.io/rlaqxvbr-the-bashful/pen/MYgpywe',
        github: 'https://github.com/NK2552003/lil-me-male-version-',
        codepen: 'https://codepen.io/rlaqxvbr-the-bashful/pen/MYgpywe'
      },
      features: [
        "User Authentication & Authorization",
        "Payment Gateway Integration",
        "Real-time Order Tracking",
        "Admin Dashboard",
        "Product Management System"
      ],
      duration: "3 months",
      status: "Completed",
      progress: 'Completed',
      isActive: true
    },
    {
      id: "3",
      title: 'Waft Education ',
      technologies: ["React", "Javascript", "Bootstrap"],
      category: 'Web Development',
      image: Project_3,
      video: Video_3,
      description: 'At Waft Education Social Trust, our mission has always been to empower lives through education, skill development, and community-driven initiatives.',
      links: {
        live: 'https://wafteducation.org/',
        github: '',
        codepen: ''
      },
      features: [
        "User Authentication & Authorization",
        "Payment Gateway Integration",
        "Real-time Order Tracking",
        "Admin Dashboard",
        "Product Management System"
      ],
      duration: "1 month",
      status: "Completed",
      progress: 'Completed',
      isActive: true
    },
    {
      id: '4',
      title: 'Vishu Walfare ',
      category: 'Web Development',
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: Project_4,
      video: Video_4,
      description: 'Vishu Welfare Association is a registered non-profit organization based in Delhi, driven by a singular mission—to uplift lives and build stronger, self-reliant communities across India.',
      links: {
        live: 'https://vishu.org.in/',
        github: '',
        codepen: ''
      },
      features: [
        "Donation System",
        "Volunteer Registration",
        "Project Showcase",
        "News & Updates: A dynamic blog/news",
        "Contact & Support",
      ],
      duration: "10 days",
      status: "Completed",
      progress: 'Completed',
      isActive: true
    },
  ];

  useEffect(() => {
    loadProjects();
  }, []);

  // Cleanup interval on unmount
  useEffect(() => {
    // Component cleanup logic if needed
  }, []);

  const loadProjects = async () => { 
    try {
      setLoading(true);
      
      // Try to load projects from Appwrite
      const dynamicProjects = await projectService.getProjects();
      const dynamicCategories = await projectService.getCategories();
      
      if (dynamicProjects && dynamicProjects.length > 0) {
        // Filter only active projects for frontend display
        const activeProjects = dynamicProjects.filter(project => project.isActive);
        setProjects(activeProjects);
        setCategories(dynamicCategories); 
        setError(null);
      } else {  
        // Use fallback data if no projects in database
        setProjects(fallbackProjects);
        setCategories(['All', 'App Development', 'Web Development']);
        setError('No projects found in database. Using sample data.');
      }
      
    } catch (error) {
      console.error('Error loading projects:', error);
      // Use fallback data on error
      setProjects(fallbackProjects);
      setCategories(['All', 'App Development', 'Web Development']);
      setError('Unable to connect to database. Showing sample projects.');
    } finally {
      setLoading(false);
    }
  };

  // Manual refresh function for user
  const handleRefresh = () => {
    loadProjects();
  };

  // Helper functions for video playback with performance optimization
  const playVideo = (video) => {
    if (video) {
      // Add loading="lazy" attribute to optimize performance
      video.loading = "lazy";
      
      // Use requestAnimationFrame for smoother performance
      requestAnimationFrame(() => {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.error('Error playing video:', error);
          });
        }
      });
    }
  };

  const pauseVideo = (video) => {
    if (video) {
      try {
        // Use requestAnimationFrame for smoother performance
        requestAnimationFrame(() => {
          video.pause();
          video.currentTime = 0;
        });
      } catch (error) {
        console.error('Error pausing video:', error);
      }
    }
  };

  // Project component with video interactions and optimization
  const ProjectCard = ({ project }) => {
    const videoRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const debounceTimeoutRef = useRef(null);
    
    // Debounced hover handlers to prevent excessive rendering
    const handleMouseEnter = () => {
      if (debounceTimeoutRef.current) clearTimeout(debounceTimeoutRef.current);
      
      debounceTimeoutRef.current = setTimeout(() => {
        setIsHovered(true);
        if (videoRef.current) {
          videoRef.current.style.opacity = 1;
          playVideo(videoRef.current);
        }
      }, 50); // Small debounce delay for better performance
    };
    
    const handleMouseLeave = () => {
      if (debounceTimeoutRef.current) clearTimeout(debounceTimeoutRef.current);
      
      debounceTimeoutRef.current = setTimeout(() => {
        setIsHovered(false);
        if (videoRef.current) {
          videoRef.current.style.opacity = 0;
          pauseVideo(videoRef.current);
        }
      }, 50); // Small debounce delay for better performance
    };
    
    // Clean up any pending timeouts when component unmounts
    useEffect(() => {
      return () => {
        if (debounceTimeoutRef.current) {
          clearTimeout(debounceTimeoutRef.current);
        }
      };
    }, []);
    
    // Optimized touch handlers with passive option for better performance
    const handleTouchStart = React.useCallback(() => {
      if (videoRef.current) {
        videoRef.current.style.opacity = 1;
        playVideo(videoRef.current);
      }
    }, []);
    
    const handleTouchEnd = React.useCallback(() => {
      if (videoRef.current) {
        videoRef.current.style.opacity = 0;
        pauseVideo(videoRef.current);
      }
    }, []);

    // Apply event listeners with passive option for better performance
    useEffect(() => {
      const videoElement = videoRef.current;
      if (videoElement) {
        videoElement.addEventListener('touchstart', handleTouchStart, { passive: true });
        videoElement.addEventListener('touchend', handleTouchEnd, { passive: true });
        
        return () => {
          videoElement.removeEventListener('touchstart', handleTouchStart);
          videoElement.removeEventListener('touchend', handleTouchEnd);
        };
      }
    }, [handleTouchStart, handleTouchEnd]);

    return (
      <div 
      className={`portfolio-group relative overflow-hidden ${isHovered ? 'is-hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
      <div className="portfolio-media-wrapper relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="portfolio-image portfolio-aspect-3-2 portfolio-object-cover"
          loading="lazy" // Add lazy loading for better performance
        />
        {project.video && (
          <video 
            ref={videoRef}
            src={project.video} 
            muted 
            loop 
            preload="none" // Only load when needed
            className="portfolio-video portfolio-aspect-3-2 portfolio-object-cover"
            style={{ opacity: 0 }}
          />
        )} 
        <div className="portfolio-overlay-blur"></div>
      </div>
      <div className="portfolio-overlay portfolio-absolute portfolio-inset-0 portfolio-bg-gradient-to-t"></div>
      <div className="portfolio-absolute portfolio-bottom-0 portfolio-p-4">
        <p className="portfolio-category">{project.category}</p>
        <p className="portfolio-progress">{project.progress}</p>
        <h3 className="portfolio-text-xl portfolio-font-semibold portfolio-text-white">{project.title}</h3>
        <p className="portfolio-description">{project.description}</p>
        <div className="portfolio-links mt-4">
          <a className="portfolio-project-btn">
        <button 
          onClick={() => {
          const index = filteredProjects.findIndex(p => p.id === project.id);
          if (index !== -1) setActiveProject(index);
          }}
          className="portfolio-project-btn"
        >
          View Details 
        </button>
          </a>
        <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="portfolio-project-btn">
          <button>
          Live Preview           
          </button>
        </a>
        </div>
      </div>
      </div>
    );
  }; 
 
  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    return projects.filter(project => 
      selectedCategory === 'All' || selectedCategory === "all" || project.category === selectedCategory
    );
  }, [projects, selectedCategory]);

  // Pagination logic
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = useMemo(() => {
    return filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  }, [filteredProjects, indexOfFirstProject, indexOfLastProject]);
  
  const totalPages = useMemo(() => {
    return Math.ceil(filteredProjects.length / projectsPerPage);
  }, [filteredProjects.length, projectsPerPage]);

  // Reset to first page when category changes
  const handleCategoryChange = useCallback((category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  }, []);

  // Pagination component - memoized for performance
  const Pagination = memo(({ totalPages, currentPage, setCurrentPage }) => {
    if (totalPages <= 1) return null;

    // Generate page numbers array once
    const pageNumbers = useMemo(() => {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }, [totalPages]);
    
    // Create handlers with useCallback to prevent unnecessary rerenders
    const handlePrevPage = useCallback(() => {
      setCurrentPage(prev => Math.max(prev - 1, 1));
    }, [setCurrentPage]);
    
    const handleNextPage = useCallback(() => {
      setCurrentPage(prev => Math.min(prev + 1, totalPages));
    }, [setCurrentPage, totalPages]);

    return (
      <div className="pagination-container">
        <button 
          className="pagination-btn"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        
        <div className="pagination-numbers">
          {pageNumbers.map(page => (
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
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    );
  });

  return (
    <div className="portfolio-min-h-screen portfolio-bg-black portfolio-p-8 ">
      {/* Header with controls */}

      {/* Loading State */}
      {loading && (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading projects...</p>
        </div>
      )}

      {/* Filter Buttons */}
      {!loading && (
        <div className="portfolio-mb-8 portfolio-flex portfolio-flex-wrap portfolio-gap-4">
          {categories.map(category => (
            <button
              key={category}
              className={selectedCategory === category 
                ? 'portfolio-bg-white portfolio-text-black filterBtn ' 
                : 'portfolio-text-white portfolio-bg-black filterBtn'}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}
      
      {/* Projects Grid */}
      {!loading && (
        <>
          {filteredProjects.length === 0 ? (
            <div className="no-projects-found">
              <div className="no-projects-icon">📝</div>
              <h3>No projects found</h3>
              <p>
                {selectedCategory === 'All' 
                  ? 'No projects available at the moment.' 
                  : `No projects found in "${selectedCategory}" category.`
                }
              </p>
              {selectedCategory !== 'All' && (
                <button 
                  className="btn-reset-filter"
                  onClick={() => handleCategoryChange('All')}
                >
                  Show All Projects
                </button>
              )}
            </div>
          ) : (
            <div className="portfolio-grid portfolio-gap-6 portfolio-sm-grid-cols-2 portfolio-lg-grid-cols-3">
              {currentProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </>
      )}
 
      {/* Pagination with memoized component */}
      {!loading && filteredProjects.length > 0 && (
        <Pagination 
          totalPages={totalPages} 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
        />
      )}

      {/* Detailed Project Modal */}
      {activeProject !== null && (
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
                <img src={filteredProjects[activeProject]?.image} alt={filteredProjects[activeProject]?.title} loading="lazy" />
              </div>
              
              <div className="modal-details">
                <div className="modal-header">
                  <h2>{filteredProjects[activeProject]?.title}</h2>
                  <div className="project-meta">
                    <span className="duration">Duration: {filteredProjects[activeProject]?.duration}</span>
                    <span className={`status ${filteredProjects[activeProject]?.status.toLowerCase().replace(' ', '-')}`}>
                      {filteredProjects[activeProject]?.status}
                    </span>
                  </div>
                </div>
                
                <p className="modal-description">{filteredProjects[activeProject]?.description}</p>
                
                <div className="features-section">
                  <h4>Key Features</h4>
                  <ul className="features-list">
                    {filteredProjects[activeProject]?.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="modal-technologies">
                  <h4>Technologies Used</h4>
                  <div className="tech-grid">
                    {filteredProjects[activeProject]?.technologies?.map((tech, index) => (
                      <span key={index} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="modal-actions">
                  <a href={filteredProjects[activeProject]?.links.live} className="modal-btn primary" target="_blank" rel="noopener noreferrer">
                    View Live Project
                  </a>
                  <a href={filteredProjects[activeProject]?.links.github} className="modal-btn secondary" target="_blank" rel="noopener noreferrer">
                    View Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* End of Detailed Project Modal */}
    </div>
  );
};

export default Projects;