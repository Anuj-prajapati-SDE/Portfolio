/**
 * Quick Database Test Script
 * 
 * This script will help you identify the exact issue with your Appwrite setup.
 * Open your browser's developer console and run these commands one by one.
 */

// Test 1: Check Environment Variables
console.log('=== Environment Variables Test ===');
console.log('VITE_APPWRITE_ENDPOINT:', import.meta.env.VITE_APPWRITE_ENDPOINT);
console.log('VITE_APPWRITE_PROJECT_ID:', import.meta.env.VITE_APPWRITE_PROJECT_ID);
console.log('VITE_APPWRITE_DATABASE_ID:', import.meta.env.VITE_APPWRITE_DATABASE_ID);
console.log('VITE_APPWRITE_PROJECTS_COLLECTION_ID:', import.meta.env.VITE_APPWRITE_PROJECTS_COLLECTION_ID);

// Test 2: Check if all required variables are present
const requiredVars = {
  endpoint: import.meta.env.VITE_APPWRITE_ENDPOINT,
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  collectionId: import.meta.env.VITE_APPWRITE_PROJECTS_COLLECTION_ID
};

console.log('=== Required Variables Check ===');
Object.entries(requiredVars).forEach(([key, value]) => {
  console.log(`${key}: ${value ? '✅ Present' : '❌ Missing'}`);
});

// Test 3: Manual Database Connection Test
import { databases } from '../lib/appwrite';

export const runManualTest = async () => {
  console.log('=== Manual Database Test ===');
  
  try {
    console.log('Attempting to connect to database...');
    
    const response = await databases.listDocuments(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      import.meta.env.VITE_APPWRITE_PROJECTS_COLLECTION_ID
    );
    
    console.log('✅ SUCCESS: Database connection established');
    console.log('Documents found:', response.documents.length);
    console.log('First document:', response.documents[0]);
    
    return { success: true, data: response };
    
  } catch (error) {
    console.log('❌ FAILED: Database connection failed');
    console.error('Error details:', error);
    
    // Provide specific error guidance
    if (error.message.includes('not found')) {
      console.log('🔍 Possible causes:');
      console.log('- Database ID or Collection ID is incorrect');
      console.log('- Database or Collection does not exist');
      console.log('- Check your Appwrite console for correct IDs');
    } else if (error.message.includes('permission')) {
      console.log('🔍 Possible causes:');
      console.log('- Collection permissions are not set correctly');
      console.log('- You need to allow "Any" read permissions for public access');
    } else if (error.message.includes('network')) {
      console.log('🔍 Possible causes:');
      console.log('- Internet connection issues');
      console.log('- Appwrite endpoint is incorrect');
      console.log('- Appwrite server is down');
    }
    
    return { success: false, error };
  }
};

// Test 4: Check if you have any projects in your database
export const checkProjectsExist = async () => {
  try {
    const result = await runManualTest();
    
    if (result.success) {
      const projects = result.data.documents;
      
      if (projects.length === 0) {
        console.log('⚠️  WARNING: No projects found in your database');
        console.log('You need to add some projects first!');
        console.log('Use the ProjectManager component or add projects manually in Appwrite console');
      } else {
        console.log('✅ Projects found in database:');
        projects.forEach((project, index) => {
          console.log(`${index + 1}. ${project.title || 'Untitled'} (${project.category || 'No category'})`);
        });
      }
    }
  } catch (error) {
    console.error('Error checking projects:', error);
  }
};

// Run all tests
export const runAllTests = async () => {
  console.log('🚀 Running comprehensive database tests...');
  
  await runManualTest();
  await checkProjectsExist();
  
  console.log('🏁 Tests completed. Check the logs above for results.');
};

export default {
  runManualTest,
  checkProjectsExist,
  runAllTests
};
