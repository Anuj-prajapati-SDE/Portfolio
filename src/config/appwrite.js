import { Client, Account, Databases, Storage } from 'appwrite';

const client = new Client();

// Get configuration from environment variables or fallback to defaults
const getEndpoint = () => {
    return import.meta.env.VITE_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1';
};

const getProjectId = () => {
    return import.meta.env.VITE_APPWRITE_PROJECT_ID || '687930a2002d9c1615c9';
};

client
    .setEndpoint(getEndpoint())
    .setProject(getProjectId());

// For development, you might want to set additional headers
if (import.meta.env.DEV) {
    console.log('🔧 Development mode - Appwrite client initialized');
    console.log('📍 Endpoint:', getEndpoint());
    console.log('🆔 Project ID:', getProjectId());
}

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

export default client;
