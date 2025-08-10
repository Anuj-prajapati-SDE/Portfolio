import { databases } from '../lib/appwrite';
import { Query } from 'appwrite';

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const CONTENT_COLLECTION_ID = import.meta.env.VITE_APPWRITE_CONTENT_COLLECTION_ID || 'content';

export const contentService = {
  // Get content by section
  async getContent(section) {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        CONTENT_COLLECTION_ID,
        [Query.equal('section', section)]
      );
      
      return response.documents[0] || null;
    } catch (error) {
      console.error('Error fetching content:', error);
      return null;
    }
  },

  // Update or create content
  async updateContent(section, data) {
    try {
      // Try to get existing content
      const existing = await this.getContent(section);
      
      if (existing) {
        // Update existing
        const response = await databases.updateDocument(
          DATABASE_ID,
          CONTENT_COLLECTION_ID,
          existing.$id,
          { ...data, section }
        );
        return response;
      } else {
        // Create new
        const response = await databases.createDocument(
          DATABASE_ID,
          CONTENT_COLLECTION_ID,
          'unique()',
          { ...data, section }
        );
        return response;
      }
    } catch (error) {
      console.error('Error updating content:', error);
      throw error;
    }
  },

  // Get all content sections
  async getAllContent() {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        CONTENT_COLLECTION_ID
      );
      
      // Convert to object with section names as keys
      const content = {};
      response.documents.forEach(doc => {
        content[doc.section] = doc;
      });
      
      return content;
    } catch (error) {
      console.error('Error fetching all content:', error);
      return {};
    }
  }
};

export default contentService;
