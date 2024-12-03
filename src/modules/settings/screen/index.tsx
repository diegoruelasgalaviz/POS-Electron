import React, { useState } from 'react';
import AccountManagement from '../../user-management/components/AccountManagement';
import './styles.css';

const Settings: React.FC = () => {
  const [settings, setSettings] = useState({
    darkMode: false,
    notifications: true,
    language: 'en',
  });

  const handleSettingsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setSettings(prev => ({
      ...prev,
      [name]: newValue
    }));
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      
      <AccountManagement />

      <div className="settings-section">
        <h3>Preferences</h3>
        <div className="settings-form">
          <div className="settings-group">
            <label>
              <input
                type="checkbox"
                name="darkMode"
                checked={settings.darkMode}
                onChange={handleSettingsChange}
              />
              Dark Mode
            </label>
          </div>

          <div className="settings-group">
            <label>
              <input
                type="checkbox"
                name="notifications"
                checked={settings.notifications}
                onChange={handleSettingsChange}
              />
              Enable Notifications
            </label>
          </div>

          <div className="settings-group">
            <label>Language</label>
            <select
              name="language"
              value={settings.language}
              onChange={handleSettingsChange}
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings; 