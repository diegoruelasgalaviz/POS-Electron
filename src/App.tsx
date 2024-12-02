import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Settings from './components/Settings';
import './App.css';

const Home: React.FC = () => (
  <div className="home">
    <h2>Welcome to POS System</h2>
    <p>Select an option from the navigation menu to get started.</p>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App; 