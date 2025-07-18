import React, { useState, useEffect } from 'react';
import { databases } from '../lib/appwrite';
import { Query } from 'appwrite';

const DatabaseDebugger = () => {
  const [debugInfo, setDebugInfo] = useState({
    loading: true,
    error: null,
    envVars: {},
    connectionTest: null,
    documentsCount: 0,
    rawDocuments: []
  });

  useEffect(() => {
    runDiagnostics();
  }, []);

  const runDiagnostics = async () => {
    setDebugInfo(prev => ({ ...prev, loading: true }));

    // Check environment variables
    const envVars = {
      VITE_APPWRITE_ENDPOINT: import.meta.env.VITE_APPWRITE_ENDPOINT,
      VITE_APPWRITE_PROJECT_ID: import.meta.env.VITE_APPWRITE_PROJECT_ID,
      VITE_APPWRITE_DATABASE_ID: import.meta.env.VITE_APPWRITE_DATABASE_ID,
      VITE_APPWRITE_PROJECTS_COLLECTION_ID: import.meta.env.VITE_APPWRITE_PROJECTS_COLLECTION_ID
    };

    console.log('Environment Variables:', envVars);

    try {
      // Test basic connection
      const response = await databases.listDocuments(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_APPWRITE_PROJECTS_COLLECTION_ID,
        [Query.limit(10)]
      );

      setDebugInfo({
        loading: false,
        error: null,
        envVars,
        connectionTest: 'SUCCESS',
        documentsCount: response.documents.length,
        rawDocuments: response.documents
      });

    } catch (error) {
      console.error('Database connection error:', error);
      
      setDebugInfo({
        loading: false,
        error: error.message || 'Unknown error',
        envVars,
        connectionTest: 'FAILED',
        documentsCount: 0,
        rawDocuments: []
      });
    }
  };

  const testWithoutQueries = async () => {
    try {
      const response = await databases.listDocuments(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_APPWRITE_PROJECTS_COLLECTION_ID
      );

      console.log('Test without queries - SUCCESS:', response);
      alert(`Success! Found ${response.documents.length} documents`);
    } catch (error) {
      console.error('Test without queries - FAILED:', error);
      alert(`Failed: ${error.message}`);
    }
  };

  if (debugInfo.loading) {
    return (
      <div style={{ padding: '20px', background: '#f0f0f0', margin: '20px' }}>
        <h3>Running Database Diagnostics...</h3>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', background: '#f0f0f0', margin: '20px', fontFamily: 'monospace' }}>
      <h3>Database Debug Information</h3>
      
      <div style={{ marginBottom: '20px' }}>
        <h4>Environment Variables:</h4>
        <pre style={{ background: '#fff', padding: '10px', overflow: 'auto' }}>
          {JSON.stringify(debugInfo.envVars, null, 2)}
        </pre>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h4>Connection Test: 
          <span style={{ color: debugInfo.connectionTest === 'SUCCESS' ? 'green' : 'red' }}>
            {debugInfo.connectionTest}
          </span>
        </h4>
        {debugInfo.error && (
          <div style={{ color: 'red', background: '#ffebee', padding: '10px' }}>
            Error: {debugInfo.error}
          </div>
        )}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h4>Documents Found: {debugInfo.documentsCount}</h4>
        {debugInfo.rawDocuments.length > 0 && (
          <details>
            <summary>Raw Documents (click to expand)</summary>
            <pre style={{ background: '#fff', padding: '10px', maxHeight: '300px', overflow: 'auto' }}>
              {JSON.stringify(debugInfo.rawDocuments, null, 2)}
            </pre>
          </details>
        )}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={runDiagnostics}
          style={{ padding: '10px 20px', margin: '5px' }}
        >
          Run Diagnostics Again
        </button>
        
        <button 
          onClick={testWithoutQueries}
          style={{ padding: '10px 20px', margin: '5px' }}
        >
          Test Without Queries
        </button>
      </div>

      <div style={{ marginTop: '20px', padding: '10px', background: '#e3f2fd' }}>
        <h4>Common Issues & Solutions:</h4>
        <ul>
          <li>
            <strong>Collection not found:</strong> Make sure your database and collection IDs are correct
          </li>
          <li>
            <strong>Permission denied:</strong> Check collection permissions in Appwrite console
          </li>
          <li>
            <strong>Attribute not found:</strong> Ensure 'isActive' attribute exists in your collection
          </li>
          <li>
            <strong>Network error:</strong> Check your internet connection and Appwrite endpoint
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DatabaseDebugger;
