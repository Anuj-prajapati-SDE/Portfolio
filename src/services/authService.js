import { account } from '../config/appwrite';
import { ID } from 'appwrite';

class AuthService {
  // Login user
  async login(email, password) {
    try {
      const session = await account.createEmailPasswordSession(email, password);
      return { success: true, data: session };
    } catch (error) {
      return { 
        success: false, 
        error: error.message || 'Login failed. Please check your credentials.' 
      };
    }
  }

  // Get current user
  async getCurrentUser() {
    try {
      const user = await account.get();
      return { success: true, data: user };
    } catch (error) {
      return { 
        success: false, 
        error: error.message || 'Failed to get user information.' 
      };
    }
  }

  // Logout user
  async logout() {
    try {
      await account.deleteSession('current');
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error.message || 'Logout failed.' 
      };
    }
  }

  // Send password recovery email
  async sendPasswordRecovery(email) {
    try {
      // You need to set up the recovery URL in your Appwrite console
      // This should point to a page in your app where users can reset their password
      const recoveryUrl = `${window.location.origin}/reset-password`;
      
      await account.createRecovery(email, recoveryUrl);
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error.message || 'Failed to send recovery email.' 
      };
    }
  }

  // Complete password recovery
  async completePasswordRecovery(userId, secret, password) {
    try {
      await account.updateRecovery(userId, secret, password);
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error.message || 'Failed to reset password.' 
      };
    }
  }

  // Check if user is authenticated
  async isAuthenticated() {
    try {
      await account.get();
      return true;
    } catch (error) {
      return false;
    }
  }
}

const authService = new AuthService();
export default authService;
