import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AdminDasboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const result = await logout();
    if (result.success) {
      navigate('/login');
    }
  };

  return (
    <div style={{ 
      padding: '40px', 
      maxWidth: '1200px', 
      margin: '0 auto',
      minHeight: '100vh',
      backgroundColor: '#f8f9fa'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        marginBottom: '30px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px'
        }}>
          <div>
            <h1 style={{ 
              margin: '0 0 10px 0', 
              color: '#333',
              fontSize: '2.5rem' 
            }}>
              Admin Dashboard
            </h1>
            <p style={{ 
              margin: 0, 
              color: '#666',
              fontSize: '1.1rem' 
            }}>
              Welcome back, {user?.name || user?.email || 'Admin'}!
            </p>
          </div>
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '500',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#c82333'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#dc3545'}
          >
            Logout
          </button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          marginBottom: '30px'
        }}>
          <div style={{
            backgroundColor: '#e3f2fd',
            padding: '20px',
            borderRadius: '8px',
            border: '1px solid #bbdefb'
          }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#1976d2' }}>User Information</h3>
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>User ID:</strong> {user?.$id}</p>
            <p><strong>Email Verified:</strong> {user?.emailVerification ? 'Yes' : 'No'}</p>
            <p><strong>Last Login:</strong> {user?.$updatedAt ? new Date(user.$updatedAt).toLocaleString() : 'N/A'}</p>
          </div>

          <div style={{
            backgroundColor: '#f3e5f5',
            padding: '20px',
            borderRadius: '8px',
            border: '1px solid #ce93d8'
          }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#7b1fa2' }}>Quick Actions</h3>
            <button style={{
              backgroundColor: '#7b1fa2',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              marginRight: '10px',
              marginBottom: '10px'
            }}>
              Manage Projects
            </button>
            <button style={{
              backgroundColor: '#7b1fa2',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              marginRight: '10px',
              marginBottom: '10px'
            }}>
              View Analytics
            </button>
            <button style={{
              backgroundColor: '#7b1fa2',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              marginBottom: '10px'
            }}>
              Settings
            </button>
          </div>
        </div>

        <div style={{
          backgroundColor: '#e8f5e8',
          padding: '20px',
          borderRadius: '8px',
          border: '1px solid #a5d6a7'
        }}>
          <h3 style={{ margin: '0 0 15px 0', color: '#388e3c' }}>Dashboard Content</h3>
          <p style={{ color: '#666', lineHeight: '1.6' }}>
            This is your admin dashboard where you can manage your portfolio content, 
            view analytics, and perform administrative tasks. The authentication system 
            is now fully functional with Appwrite integration.
          </p>
          <div style={{ marginTop: '20px' }}>
            <h4 style={{ color: '#388e3c', marginBottom: '10px' }}>Features Available:</h4>
            <ul style={{ color: '#666', lineHeight: '1.8' }}>
              <li>✅ Secure authentication with Appwrite</li>
              <li>✅ Password recovery functionality</li>
              <li>✅ Protected routes</li>
              <li>✅ User session management</li>
              <li>✅ Automatic logout on session expiry</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDasboard;