import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">POS System</Link>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/cashier" className="nav-link">Cashier</Link>
        </li>
        <li className="nav-item">
          <Link to="/inventory" className="nav-link">Inventory</Link>
        </li>
        <li className="nav-item">
          <Link to="/user-management" className="nav-link">User Management</Link>
        </li>
        <li className="nav-item">
          <Link to="/settings" className="nav-link">Settings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar; 