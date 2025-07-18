import { databases } from '../lib/appwrite';

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const PROJECTS_COLLECTION_ID = import.meta.env.VITE_APPWRITE_PROJECTS_COLLECTION_ID;

export const simpleProjectService = {
  // Test basic connection without complex queries
  async testConnection() {
    try {
      console.log('Testing connection with:', {
        DATABASE_ID,
        PROJECTS_COLLECTION_ID
      });

      const response = await databases.listDocuments(
        DATABASE_ID,
        PROJECTS_COLLECTION_ID
      );

      console.log('Connection test successful:', response);
      return {
        success: true,
        data: response.documents,
        count: response.documents.length
      };
    } catch (error) {
      console.error('Connection test failed:', error);
      return {
        success: false,
        error: error.message,
        details: error
      };
    }
  },

  // Get projects with minimal processing
  async getSimpleProjects() {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        PROJECTS_COLLECTION_ID
      );

      return response.documents.map(doc => ({
        id: doc.$id,
        title: doc.title || 'Untitled Project',
        description: doc.description || 'No description',
        category: doc.category || 'Other',
        image: doc.image || doc.imageUrl || 'https://picsum.photos/600/400',
        video: doc.video || doc.videoUrl || null,
        technologies: doc.technologies || [],
        features: doc.features || [],
        links: doc.links ? (typeof doc.links === 'string' ? JSON.parse(doc.links) : doc.links) : {},
        duration: doc.duration || 'Not specified',
        status: doc.status || 'Unknown',
        progress: doc.progress || doc.status || 'Unknown',
        priority: doc.priority || 0,
        isActive: doc.isActive !== false,
        $id: doc.$id,
        $createdAt: doc.$createdAt,
        $updatedAt: doc.$updatedAt
      }));
    } catch (error) {
      console.error('Error fetching simple projects:', error);
      throw new Error('Failed to fetch projects: ' + error.message);
    }
  }
};

export default simpleProjectService;
