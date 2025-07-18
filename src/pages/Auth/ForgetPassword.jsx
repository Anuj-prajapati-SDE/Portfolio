import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import './ForgetPasswordPage.css';

const ForgetPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const { sendPasswordRecovery } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccessMessage('');

    // Basic validation
    if (!email) {
      setError('Please enter your email address');
      setIsLoading(false);
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    try {
      const result = await sendPasswordRecovery(email);
      
      if (result.success) {
        setIsEmailSent(true);
        setSuccessMessage('Password recovery email sent successfully!');
      } else {
        setError(result.error || 'Failed to send recovery email. Please try again.');
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendEmail = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      const result = await sendPasswordRecovery(email);
      
      if (result.success) {
        setSuccessMessage('Recovery email resent successfully!');
      } else {
        setError(result.error || 'Failed to resend recovery email. Please try again.');
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="forgot-container">
      <div className="animated-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="gradient-orb orb-4"></div>
      </div>
      
      <div className="forgot-card background-shadow">
        <div className="forgot-header">
          <div className="forgot-icon">
            {isEmailSent ? (
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
                <circle cx="18" cy="8" r="3" fill="var(--theme-text-color)"></circle>
                <path d="M16 10l1 1 2-2" stroke="white" strokeWidth="2" fill="none"></path>
              </svg>
            ) : (
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <circle cx="12" cy="16" r="1"></circle>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            )}
          </div>
          <h1 className="forgot-title">
            {isEmailSent ? 'Check Your Email' : 'Forgot Password?'}
          </h1>
          <p className="forgot-subtitle">
            {isEmailSent 
              ? `We've sent a password reset link to ${email}`
              : 'Enter your email address and we\'ll send you a link to reset your password'
            }
          </p>
        </div>

        {!isEmailSent ? (
          <form className="forgot-form" onSubmit={handleSubmit}>
            {error && (
              <div className="error-message" style={{
                color: '#ff4757',
                backgroundColor: 'rgba(255, 71, 87, 0.1)',
                padding: '12px',
                borderRadius: '8px',
                marginBottom: '20px',
                fontSize: '14px',
                textAlign: 'center',
                border: '1px solid rgba(255, 71, 87, 0.2)'
              }}>
                {error}
              </div>
            )}
            
            <div className="input-group">
              <div className="input-wrapper">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    // Clear error when user starts typing
                    if (error) {
                      setError('');
                    }
                  }}
                  required
                  className="forgot-input"
                  placeholder=" "
                />
                <label className="floating-label">Email Address</label>
                <div className="input-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className={`forgot-button ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="loader"></div>
              ) : (
                'Send Reset Link'
              )}
            </button>
          </form>
        ) : (
          <div className="email-sent-actions">
            {successMessage && (
              <div className="success-message" style={{
                color: '#2ed573',
                backgroundColor: 'rgba(46, 213, 115, 0.1)',
                padding: '12px',
                borderRadius: '8px',
                marginBottom: '20px',
                fontSize: '14px',
                textAlign: 'center',
                border: '1px solid rgba(46, 213, 115, 0.2)'
              }}>
                {successMessage}
              </div>
            )}
            
            {error && (
              <div className="error-message" style={{
                color: '#ff4757',
                backgroundColor: 'rgba(255, 71, 87, 0.1)',
                padding: '12px',
                borderRadius: '8px',
                marginBottom: '20px',
                fontSize: '14px',
                textAlign: 'center',
                border: '1px solid rgba(255, 71, 87, 0.2)'
              }}>
                {error}
              </div>
            )}
            
            <button
              className={`resend-button ${isLoading ? 'loading' : ''}`}
              onClick={handleResendEmail}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="loader"></div>
              ) : (
                'Resend Email'
              )}
            </button>
            <p className="resend-info">
              Didn't receive the email? Check your spam folder or try resending.
            </p>
          </div>
        )}

        <div className="forgot-footer">
          <a href="/login" className="back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;