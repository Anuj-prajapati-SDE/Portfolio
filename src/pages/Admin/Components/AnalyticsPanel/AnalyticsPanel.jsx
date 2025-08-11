import React from 'react';

const AnalyticsPanel = () => {
  return (
    <div className="analytics-panel">
      <div className="analytics-header">
        <h2>Analytics Dashboard</h2>
        <p>Track your portfolio performance and visitor insights</p>
      </div>
      
      <div className="coming-soon">
        <div className="coming-soon-content">
          <div className="coming-soon-icon">📊</div>
          <h3>Analytics Coming Soon!</h3>
          <p>
            Comprehensive analytics and insights for your portfolio including 
            visitor tracking, popular projects, and performance metrics.
          </p>
          <div className="features-preview">
            <div className="feature-item">📈 Visitor Analytics</div>
            <div className="feature-item">🎯 Project Views</div>
            <div className="feature-item">📱 Device Statistics</div>
            <div className="feature-item">🌍 Geographic Data</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPanel;
