// Utility functions for handling project data

/**
 * Parse links string to object
 * @param {string} linksString - JSON string of links
 * @returns {object} - Parsed links object
 */
export const parseLinks = (linksString) => {
  if (!linksString) return {};
  
  try {
    return JSON.parse(linksString);
  } catch (error) {
    console.error('Error parsing links:', error);
    return {};
  }
};

/**
 * Stringify links object for storage
 * @param {object} linksObject - Links object
 * @returns {string} - JSON string of links
 */
export const stringifyLinks = (linksObject) => {
  if (!linksObject) return '';
  
  try {
    return JSON.stringify(linksObject);
  } catch (error) {
    console.error('Error stringifying links:', error);
    return '';
  }
};

/**
 * Transform raw project data from Appwrite to frontend format
 * @param {object} rawProject - Raw project data from Appwrite
 * @returns {object} - Transformed project data
 */
export const transformProjectData = (rawProject) => {
  if (!rawProject) return null;

  return {
    ...rawProject,
    // Ensure ID is accessible as both id and $id
    id: rawProject.$id || rawProject.id,
    links: parseLinks(rawProject.links),
    // Handle different image field names
    image: rawProject.image || rawProject.imageUrl || "https://picsum.photos/600/400",
    // Handle different video field names
    video: rawProject.video || rawProject.videoUrl || null,
    // Ensure arrays are properly handled
    technologies: Array.isArray(rawProject.technologies) ? rawProject.technologies : [],
    features: Array.isArray(rawProject.features) ? rawProject.features : [],
    // Set default values
    duration: rawProject.duration || 'Not specified',
    status: rawProject.status || 'Unknown',
    progress: rawProject.progress || rawProject.status || 'Unknown',
    // Handle priority
    priority: rawProject.priority || 0,
    isActive: rawProject.isActive !== undefined ? rawProject.isActive : true
  };
};

/**
 * Transform frontend project data to Appwrite format
 * @param {object} projectData - Project data from frontend
 * @returns {object} - Data ready for Appwrite storage
 */
export const prepareProjectForStorage = (projectData) => {
  if (!projectData) return null;

  // First, filter out undefined values
  const filteredData = Object.fromEntries(
    Object.entries(projectData).filter(([_, value]) => value !== undefined)
  );

  // Then apply transformations
  return {
    ...filteredData,
    links: stringifyLinks(projectData.links)
  };
};

/**
 * Filter projects based on category
 * @param {array} projects - Array of projects
 * @param {string} category - Category to filter by
 * @returns {array} - Filtered projects
 */
export const filterProjectsByCategory = (projects, category) => {
  if (!Array.isArray(projects)) return [];
  
  if (category === 'All' || category === 'all') {
    return projects.filter(project => project.isActive !== false);
  }
  
  return projects.filter(project => 
    project.category === category && project.isActive !== false
  );
};

/**
 * Sort projects by priority and creation date
 * @param {array} projects - Array of projects
 * @returns {array} - Sorted projects
 */
export const sortProjects = (projects) => {
  if (!Array.isArray(projects)) return [];
  
  return projects.sort((a, b) => {
    // First sort by priority (higher priority first)
    if (a.priority !== b.priority) {
      return (b.priority || 0) - (a.priority || 0);
    }
    
    // Then sort by creation date (newer first)
    const dateA = new Date(a.$createdAt || a.createdAt || 0);
    const dateB = new Date(b.$createdAt || b.createdAt || 0);
    return dateB - dateA;
  });
};

/**
 * Get unique categories from projects
 * @param {array} projects - Array of projects
 * @returns {array} - Array of unique categories
 */
export const getUniqueCategories = (projects) => {
  if (!Array.isArray(projects)) return ['All'];
  
  const categories = projects
    .filter(project => project.isActive !== false)
    .map(project => project.category)
    .filter(Boolean);
  
  return ['All', ...new Set(categories)];
};

/**
 * Validate project data
 * @param {object} projectData - Project data to validate
 * @returns {object} - Validation result
 */
export const validateProjectData = (projectData) => {
  const errors = [];
  
  if (!projectData.title) {
    errors.push('Title is required');
  }
  
  if (!projectData.description) {
    errors.push('Description is required');
  }
  
  if (!projectData.category) {
    errors.push('Category is required');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

export default {
  parseLinks,
  stringifyLinks,
  transformProjectData,
  prepareProjectForStorage,
  filterProjectsByCategory,
  sortProjects,
  getUniqueCategories,
  validateProjectData
};
