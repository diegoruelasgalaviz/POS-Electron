import React from 'react';
/* import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './modules/home/Home';
import { POS } from './modules/pos/POS';
import { Inventory } from './modules/inventory/Inventory';
import { Settings } from './modules/settings/Settings';
import { Users } from './modules/users/Users'; */

export const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pos" element={<POS />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Layout>
    </Router>
  );
}; 