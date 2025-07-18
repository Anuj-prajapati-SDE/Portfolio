import React, { useState, useEffect } from 'react';
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import AboutExplain from '../AboutExplain/AboutExplain';
import ScrollSlide from '../ScrollSlide/ScrollSlide';
import Experience from '../Experience/Experience';
import Contact from '../Contact/Contact';
import Testimonials from '../Testimonials/Testimonials';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';
import Loader from '../../Loader/Loader';
import './Profolio_container.css';

function DynamicPortfolioContainer() {
  const [components, setComponents] = useState([]);
  const [config, setConfig] = useState({});
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Load component configuration from localStorage or API
    const savedComponents = localStorage.getItem('portfolioComponents');
    const savedConfig = localStorage.getItem('portfolioConfig');
    
    // Default components configuration
    const defaultComponents = [
      { id: 'loader', name: 'Loader', component: 'Loader', isActive: true, order: 0 },
      { id: 'navbar', name: 'Navigation', component: 'Navbar', isActive: true, order: 1 },
      { id: 'home', name: 'Home Section', component: 'Home', isActive: true, order: 2 },
      { id: 'about', name: 'About Section', component: 'About', isActive: true, order: 3 },
      { id: 'services', name: 'Services Section', component: 'Services', isActive: true, order: 4 },
      { id: 'about-explain', name: 'About Explain Section', component: 'AboutExplain', isActive: true, order: 5 },
      { id: 'stars-1', name: 'Stars Background 1', component: 'Stars', isActive: true, order: 6 },
      { id: 'scroll-slide', name: 'Scroll Slide', component: 'ScrollSlide', isActive: true, order: 7, conditional: { minWidth: 550 } },
      { id: 'experience', name: 'Experience Section', component: 'Experience', isActive: true, order: 8 },
      { id: 'testimonials', name: 'Testimonials Section', component: 'Testimonials', isActive: true, order: 9 },
      { id: 'contact', name: 'Contact Section', component: 'Contact', isActive: true, order: 10 },
      { id: 'stars-2', name: 'Stars Background 2', component: 'Stars', isActive: true, order: 11 },
      { id: 'footer', name: 'Footer Section', component: 'Footer', isActive: true, order: 12 }
    ];

    const defaultConfig = {
      layout: {
        showStars: true,
        enableAnimations: true,
        mobileBreakpoint: 550
      },
      theme: {
        primaryColor: '#08afff'
      }
    };

    try {
      const componentConfig = savedComponents ? JSON.parse(savedComponents) : defaultComponents;
      const siteConfig = savedConfig ? JSON.parse(savedConfig) : defaultConfig;
      
      setComponents(componentConfig.sort((a, b) => a.order - b.order));
      setConfig(siteConfig);
    } catch (error) {
      console.error('Error loading configuration:', error);
      setComponents(defaultComponents);
      setConfig(defaultConfig);
    }

    // Listen for window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Component renderer
  const renderComponent = (componentConfig) => {
    const { component, isActive, conditional } = componentConfig;
    
    // Check if component should be rendered based on conditions
    if (!isActive) return null;
    
    if (conditional) {
      if (conditional.minWidth && windowWidth < conditional.minWidth) {
        return null;
      }
      if (conditional.maxWidth && windowWidth > conditional.maxWidth) {
        return null;
      }
    }

    // Render the actual component
    switch (component) {
      case 'Loader':
        return <Loader key={componentConfig.id} />;
      case 'Navbar':
        return <Navbar key={componentConfig.id} />;
      case 'Home':
        return <Home key={componentConfig.id} />;
      case 'About':
        return <About key={componentConfig.id} />;
      case 'Services':
        return <Services key={componentConfig.id} />;
      case 'AboutExplain':
        return <AboutExplain key={componentConfig.id} />;
      case 'ScrollSlide':
        return <ScrollSlide key={componentConfig.id} />;
      case 'Experience':
        return <Experience key={componentConfig.id} />;
      case 'Testimonials':
        return <Testimonials key={componentConfig.id} />;
      case 'Contact':
        return <Contact key={componentConfig.id} />;
      case 'Footer':
        return <Footer key={componentConfig.id} />;
      case 'Stars':
        return (
          <div key={componentConfig.id}>
            <div id='stars' className='stars'></div>
            <div id='stars2' className='stars'></div>
            <div id='stars3' className='stars'></div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='Protfolio_container dynamic-container'>
      {components.map(componentConfig => renderComponent(componentConfig))}
      
      {/* Admin indicator for logged-in users */}
      {process.env.NODE_ENV === 'development' && (
        <div className="admin-indicator">
          <span>🔧 Dynamic Mode Active</span>
          <small>{components.filter(c => c.isActive).length} components loaded</small>
        </div>
      )}
    </div>
  );
}

export default DynamicPortfolioContainer;
