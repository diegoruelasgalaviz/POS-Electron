import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar desktop-only">
      <div className="nav-brand">POS System</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/pos">POS</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/users">Users</Link>
      </div>
    </nav>
  );
}; 