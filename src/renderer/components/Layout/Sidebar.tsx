import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`sidebar mobile-only ${isOpen ? 'active' : ''}`}>
      <div className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
      <div className="sidebar-content">
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/pos" onClick={() => setIsOpen(false)}>POS</Link>
        <Link to="/inventory" onClick={() => setIsOpen(false)}>Inventory</Link>
        <Link to="/settings" onClick={() => setIsOpen(false)}>Settings</Link>
        <Link to="/users" onClick={() => setIsOpen(false)}>Users</Link>
      </div>
    </div>
  );
}; 