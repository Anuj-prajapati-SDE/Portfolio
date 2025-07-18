import { databases } from '../lib/appwrite';
import { sampleProjectData, sampleProjectData2 } from '../data/sampleProjectData';
import { prepareProjectForStorage } from '../utils/projectUtils';

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const PROJECTS_COLLECTION_ID = import.meta.env.VITE_APPWRITE_PROJECTS_COLLECTION_ID;

/**
 * Setup script to initialize the Appwrite database with sample data
 * Run this once after creating your database and collection
 */
export const setupDatabase = async () => {
  try {
    console.log('Setting up database with sample data...');
    
    // Prepare sample projects for storage
    const sampleProjects = [
      prepareProjectForStorage(sampleProjectData),
      prepareProjectForStorage(sampleProjectData2)
    ];
    
    // Add sample projects to database
    const createdProjects = [];
    
    for (const project of sampleProjects) {
      try {
        const response = await databases.createDocument(
          DATABASE_ID,
          PROJECTS_COLLECTION_ID,
          'unique()',
          project
        );
        createdProjects.push(response);
        console.log(`✅ Created project: ${project.title}`);
      } catch (error) {
        console.error(`❌ Error creating project ${project.title}:`, error.message);
      }
    }
    
    console.log(`🎉 Database setup complete! Created ${createdProjects.length} projects.`);
    return createdProjects;
    
  } catch (error) {
    console.error('❌ Error setting up database:', error);
    throw error;
  }
};

/**
 * Check if database is properly configured
 */
export const checkDatabaseConnection = async () => {
  try {
    console.log('Checking database connection...');
    
    const response = await databases.listDocuments(
      DATABASE_ID,
      PROJECTS_COLLECTION_ID,
      []
    );
    
    console.log(`✅ Database connection successful! Found ${response.documents.length} projects.`);
    return true;
    
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    
    // Provide helpful error messages
    if (error.message.includes('not found')) {
      console.log('💡 Make sure your database and collection are created with the correct IDs');
      console.log('💡 Check your .env file for correct VITE_APPWRITE_DATABASE_ID and VITE_APPWRITE_PROJECTS_COLLECTION_ID');
    }
    
    return false;
  }
};

/**
 * Clean up database (remove all projects)
 */
export const cleanupDatabase = async () => {
  try {
    console.log('Cleaning up database...');
    
    const response = await databases.listDocuments(
      DATABASE_ID,
      PROJECTS_COLLECTION_ID,
      []
    );
    
    let deletedCount = 0;
    
    for (const doc of response.documents) {
      try {
        await databases.deleteDocument(
          DATABASE_ID,
          PROJECTS_COLLECTION_ID,
          doc.$id
        );
        deletedCount++;
        console.log(`🗑️ Deleted project: ${doc.title}`);
      } catch (error) {
        console.error(`❌ Error deleting project ${doc.title}:`, error.message);
      }
    }
    
    console.log(`🧹 Database cleanup complete! Deleted ${deletedCount} projects.`);
    
  } catch (error) {
    console.error('❌ Error cleaning up database:', error);
    throw error;
  }
};

export default {
  setupDatabase,
  checkDatabaseConnection,
  cleanupDatabase
};
