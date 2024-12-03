import React from 'react';
import AccountManagement from '../components/AccountManagement';
import './styles.css';

const UserManagement: React.FC = () => {
  return (
    <div className="user-management-screen">
      <h2>Account Management</h2>
      <AccountManagement />
    </div>
  );
};

export default UserManagement; 