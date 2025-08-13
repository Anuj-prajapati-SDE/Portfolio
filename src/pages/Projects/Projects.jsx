import React, { useState, useRef, useEffect } from 'react'
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
  const [refreshInterval, setRefreshInterval] = useState(null);

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
    
    // Set up auto-refresh every 30 seconds to check for new projects
    const interval = setInterval(loadProjects, 30000);
    setRefreshInterval(interval);
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (refreshInterval) {
        clearInterval(refreshInterval);
      }
    }; 
  }, [refreshInterval]);

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
        <img src={project.image} alt={project.title} className="portfolio-image portfolio-aspect-3-2 portfolio-object-cover" />
        <video 
        ref={videoRef}
        src={project.video} 
        muted 
        loop 
        className="portfolio-video portfolio-aspect-3-2 portfolio-object-cover"
        style={{ opacity: 0 }}
        />
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
  const filteredProjects = projects.filter(project => 
    selectedCategory === 'All' || selectedCategory === "all" || project.category === selectedCategory
  );

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
 
      {/* Pagination */}
      {!loading && <Pagination />}

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
                <img src={filteredProjects[activeProject]?.image} alt={filteredProjects[activeProject]?.title} />
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