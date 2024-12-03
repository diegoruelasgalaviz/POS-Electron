import React, { useState } from 'react';
import Settings from '../../settings/screen';
import UserManagement from '../../user-management/screen';
import './SettingsLayout.css';

type Tab = 'settings' | 'account';

const SettingsLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('settings');

  return (
    <div className="settings-layout">
      <div className="settings-nav">
        <button
          className={`nav-button ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          Settings
        </button>
        <button
          className={`nav-button ${activeTab === 'account' ? 'active' : ''}`}
          onClick={() => setActiveTab('account')}
        >
          Account Management
        </button>
      </div>
      
      <div className="settings-content">
        {activeTab === 'settings' ? <Settings /> : <UserManagement />}
      </div>
    </div>
  );
};

export default SettingsLayout; 