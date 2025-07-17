import { Client, Account, Databases, Storage } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite Endpoint
    .setProject('687930a2002d9c1615c9'); // Your project ID

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

export default client;
