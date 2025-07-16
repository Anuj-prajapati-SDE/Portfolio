import React, { useState, useRef } from 'react'
import './Projects.css' // Assuming you have a CSS file for styling 

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(6);

  const projects = [
  {
    id: '1', 
    title: 'BlissCamp',
    category: 'Web Development',
    image: "https://picsum.photos/seed/project1/600/400",
     technologies: ["React", "Node.js", "MongoDB", "Express"],
    video: 'https://res.cloudinary.com/ddgk3lkhq/video/upload/v1752667274/SampleVideo_1280x720_1mb_o2st8t.mp4',
    description: 'A website for Tourists and Travellers',
    links: {
      live: 'https://nk2552003.github.io/BlissCampIndia/',
      github: 'https://github.com/NK2552003/BlissCampIndia', 
      codepen: 'https://github.com/NK2552003/BlissCampIndia'
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
    progress: 'Completed'
  },
  {
    id: '2',
    title: "lil' me",
    category: 'Web Development',
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    image: 'https://picsum.photos/seed/project2/600/400',
    video: 'https://videos.pexels.com/video-files/15832152/15832152-hd_1920_1080_30fps.mp4',
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
    progress: 'Completed'
  },
  {
    id: '3',
    title: 'Cursor',
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    category: 'Web Development',
    image: 'https://picsum.photos/seed/project3/600/400',
    video: 'https://videos.pexels.com/video-files/15832152/15832152-hd_1920_1080_30fps.mp4',
    description: 'The custom modified cursor for better interactivity with users',
    links: {
      live: 'https://codepen.io/rlaqxvbr-the-bashful/details/ExqvZey',
      github: 'https://codepen.io/rlaqxvbr-the-bashful/details/ExqvZey',
      codepen: 'https://codepen.io/rlaqxvbr-the-bashful/details/ExqvZey'
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
    progress: 'Completed'
  },
  {
    id: '4',
    title: 'Background',
    category: 'Web Development',
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    image: 'https://picsum.photos/seed/project4/600/400',
    video: 'https://videos.pexels.com/video-files/15832152/15832152-hd_1920_1080_30fps.mp4',
    description: 'A randomized background generator for any content creator',
    links: {
      live: 'https://codepen.io/rlaqxvbr-the-bashful/pen/VwoLgrj',
      github: 'https://github.com/NK2552003/Random_Character_Background',
      codepen: 'https://codepen.io/rlaqxvbr-the-bashful/pen/VwoLgrj'
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
    progress: 'Completed'
  },
  {
    id: '5',
    title: 'CSS Filters',
    category: 'Web Development',
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    image: 'https://picsum.photos/seed/project5/600/400',
    video: 'https://videos.pexels.com/video-files/15832152/15832152-hd_1920_1080_30fps.mp4',
    description: 'A CSS filter section displaying images on hover with animation',
    links: {
      live: 'https://codepen.io/rlaqxvbr-the-bashful/pen/KKLVxza',
      github: 'https://codepen.io/rlaqxvbr-the-bashful/pen/KKLVxza',
      codepen: 'https://codepen.io/rlaqxvbr-the-bashful/pen/KKLVxza'
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
    progress: 'Completed'
  },
  {
    id: '6',
    title: 'HostelEase',
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    category: 'App Development',
    image: 'https://picsum.photos/seed/project6/600/400',
    video: 'https://videos.pexels.com/video-files/15832152/15832152-hd_1920_1080_30fps.mp4',
    description: 'The management app for hostelers, warden, for seamless interaction.',
    links: {
      live: 'https://github.com/NK2552003/Hostel_Management_App',
      github: 'https://github.com/NK2552003/Hostel_Management_App',
      codepen: 'https://github.com/NK2552003/Hostel_Management_App'
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
    progress: 'Working on it'
  },
  {
    id: '7',
    title: 'Portfolio',
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    category: 'Web Development',
    image: 'https://picsum.photos/seed/project7/600/400',
    video: 'https://videos.pexels.com/video-files/15832152/15832152-hd_1920_1080_30fps.mp4',
    description: 'Created the portfolio for my colleague for resume purposes.',
    links: {
      live: 'https://rohit-s-portfolio.netlify.app/',
      github: 'https://github.com/NK2552003/Rohit-s_Portfolio',
      codepen: 'https://github.com/NK2552003/Rohit-s_Portfolio'
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
    progress: 'Completed'
  },
  {
    id: '8',
    title: 'LandingPage',
    category: 'Web Development',
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    image: 'https://picsum.photos/seed/project8/600/400',
    video: 'https://videos.pexels.com/video-files/15832152/15832152-hd_1920_1080_30fps.mp4',
    description: 'The webpage features images and text content with stunning visuals.',
    links: {
      live: 'https://codepen.io/rlaqxvbr-the-bashful/pen/MWdKBpa',
      github: 'https://github.com/NK2552003/Dynamic_Landing_WebPage',
      codepen: 'https://codepen.io/rlaqxvbr-the-bashful/pen/MWdKBpa'
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
    progress: 'Completed'
  },
  {
    id: '9',
    title: 'Satranj', 
    category: 'App Development',
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    image: 'https://picsum.photos/seed/project9/600/400',
    video: 'https://videos.pexels.com/video-files/15832152/15832152-hd_1920_1080_30fps.mp4',
    description: 'A Simple and Easy-to-Play Ancient Chess Game in Flutter',
    links: {
      live: 'https://github.com/NK2552003/Satranj-Chess-_Game',
      github: 'https://github.com/NK2552003/Satranj-Chess-_Game',
      codepen: 'https://github.com/NK2552003/Satranj-Chess-_Game'
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
    progress: 'Completed'
  },
  {
    id: '10',
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    title: 'Civic Link',
    category: 'Web Development',
    image: 'https://picsum.photos/seed/project10/600/400',
    video: 'https://videos.pexels.com/video-files/15832152/15832152-hd_1920_1080_30fps.mp4',
    description: 'A collaborative platform dedicated to society or community to report or for services in the society means a community handler.',
    links: {
      live: 'https://nk2552003.github.io/Civic_Link/',
      github: 'https://github.com/NK2552003/Civic_Link',
      codepen: 'https://nk2552003.github.io/Civic_Link/'
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
    progress: 'Completed'
  }
];

  const categories = ['All', 'App Development', 'Web Development'];

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
      {/* Filter Buttons */}
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
      
      {/* Projects Grid */}
      <div className="portfolio-grid portfolio-gap-6 portfolio-sm-grid-cols-2 portfolio-lg-grid-cols-3">
        {currentProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination />

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