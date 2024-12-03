import React from 'react';
import './styles.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Welcome to POS System</h1>
      <div className="dashboard-summary">
        <div className="summary-card">
          <h3>Today's Sales</h3>
          <p className="amount">$1,234.56</p>
        </div>
        <div className="summary-card">
          <h3>Total Orders</h3>
          <p className="amount">48</p>
        </div>
        <div className="summary-card">
          <h3>Active Items</h3>
          <p className="amount">156</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
