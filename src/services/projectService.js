import { databases, storage } from '../lib/appwrite';
import { Query } from 'appwrite';
import { transformProjectData, prepareProjectForStorage, sortProjects, getUniqueCategories } from '../utils/projectUtils';

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const PROJECTS_COLLECTION_ID = import.meta.env.VITE_APPWRITE_PROJECTS_COLLECTION_ID;

export const projectService = {
  // Get all projects
  async getProjects() {
    try {
      const response = await databases.listDocuments( 
        DATABASE_ID,
        PROJECTS_COLLECTION_ID,
        [
          Query.equal('isActive', true),
          Query.orderDesc('priority'),
          Query.orderDesc('$createdAt'),
          Query.limit(100)
        ]
      );
      
      const transformedProjects = response.documents.map(transformProjectData);
      return sortProjects(transformedProjects);
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw new Error('Failed to fetch projects from database');
    }
  },

  // Get projects by category
  async getProjectsByCategory(category) {
    try {
      if (category === 'All' || category === 'all') {
        return await this.getProjects();
      }
      
      const response = await databases.listDocuments(
        DATABASE_ID,
        PROJECTS_COLLECTION_ID,
        [
          Query.equal('category', category),
          Query.equal('isActive', true),
          Query.orderDesc('priority'),
          Query.orderDesc('$createdAt')
        ]
      );
      
      const transformedProjects = response.documents.map(transformProjectData);
      return sortProjects(transformedProjects);
    } catch (error) {
      console.error('Error fetching projects by category:', error);
      throw new Error(`Failed to fetch projects for category: ${category}`);
    }
  },

  // Get project by ID
  async getProject(projectId) {
    try {
      const response = await databases.getDocument(
        DATABASE_ID,
        PROJECTS_COLLECTION_ID,
        projectId
      );
      
      return transformProjectData(response);
    } catch (error) {
      console.error('Error fetching project:', error);
      throw new Error(`Failed to fetch project with ID: ${projectId}`);
    }
  },

  // Create new project
  async createProject(projectData) {
    try {
      console.log('Original project data:', projectData);
      const preparedData = prepareProjectForStorage(projectData);
      console.log('Prepared data for Appwrite:', preparedData);
      console.log('Links after preparation:', preparedData.links, typeof preparedData.links);
      
      const response = await databases.createDocument(
        DATABASE_ID,
        PROJECTS_COLLECTION_ID,
        'unique()',
        preparedData
      );
      
      return transformProjectData(response);
    } catch (error) {
      console.error('Error creating project:', error);
      throw new Error('Failed to create project');
    }
  },

  // Update project
  async updateProject(projectId, projectData) {
    try {
      console.log('Updating project with ID:', projectId);
      console.log('Project data to update:', projectData);
      
      if (!projectId) {
        throw new Error('Project ID is required for updating');
      }
      
      const preparedData = prepareProjectForStorage(projectData);
      console.log('Prepared data for update:', preparedData);
      
      const response = await databases.updateDocument(
        DATABASE_ID,
        PROJECTS_COLLECTION_ID,
        projectId,
        preparedData
      );
      
      return transformProjectData(response);
    } catch (error) {
      console.error('Error updating project:', error);
      console.error('Project ID provided:', projectId);
      throw new Error(`Failed to update project with ID: ${projectId}`);
    }
  },

  // Delete project (soft delete by setting isActive to false)
  async deleteProject(projectId) {
    try {
      await databases.updateDocument(
        DATABASE_ID,
        PROJECTS_COLLECTION_ID,
        projectId,
        { isActive: false }
      );
      
      return true;
    } catch (error) {
      console.error('Error deleting project:', error);
      throw new Error(`Failed to delete project with ID: ${projectId}`);
    }
  },

  // Hard delete project
  async hardDeleteProject(projectId) {
    try {
      await databases.deleteDocument(
        DATABASE_ID,
        PROJECTS_COLLECTION_ID,
        projectId
      );
      
      return true;
    } catch (error) {
      console.error('Error hard deleting project:', error);
      throw new Error(`Failed to permanently delete project with ID: ${projectId}`);
    }
  },

  // Get available categories
  async getCategories() {
    try {
      const projects = await this.getProjects();
      return getUniqueCategories(projects);
    } catch (error) {
      console.error('Error fetching categories:', error);
      // Return fallback categories
      return ['All', 'Web Development', 'App Development', 'UI/UX Design'];
    }
  },

  // Search projects
  async searchProjects(searchTerm) {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        PROJECTS_COLLECTION_ID,
        [
          Query.equal('isActive', true),
          Query.or([
            Query.search('title', searchTerm),
            Query.search('description', searchTerm),
            Query.search('category', searchTerm)
          ]),
          Query.orderDesc('priority'),
          Query.orderDesc('$createdAt')
        ]
      );
      
      const transformedProjects = response.documents.map(transformProjectData);
      return sortProjects(transformedProjects);
    } catch (error) {
      console.error('Error searching projects:', error);
      throw new Error(`Failed to search projects for: ${searchTerm}`);
    }
  },

  // Get project statistics
  async getProjectStats() {
    try {
      const allProjects = await this.getProjects();
      const categories = getUniqueCategories(allProjects);
      
      const stats = {
        total: allProjects.length,
        completed: allProjects.filter(p => p.status === 'Completed').length,
        inProgress: allProjects.filter(p => p.status === 'In Progress').length,
        byCategory: {}
      };
      
      categories.forEach(category => {
        if (category !== 'All') {
          stats.byCategory[category] = allProjects.filter(p => p.category === category).length;
        }
      });
      
      return stats;
    } catch (error) {
      console.error('Error fetching project stats:', error);
      throw new Error('Failed to fetch project statistics');
    }
  }
};

export default projectService;
