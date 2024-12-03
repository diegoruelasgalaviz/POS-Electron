import React, { useState } from 'react';
import './styles.css';

const Settings: React.FC = () => {
  const [settings, setSettings] = useState({
    darkMode: false,
    notifications: true,
    language: 'en',
  });

  const [account, setAccount] = useState({
    email: 'user@example.com',
    username: 'username',
    password: '',
    profilePicture: null as string | null,
  });

  const [loading, setLoading] = useState({
    email: false,
    username: false,
    password: false,
    profilePicture: false,
  });

  const handleSettingsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setSettings(prev => ({
      ...prev,
      [name]: newValue
    }));
  };

  const handleAccountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'file') {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setAccount(prev => ({
            ...prev,
            profilePicture: reader.result as string
          }));
        };
        reader.readAsDataURL(file);
      }
    } else {
      setAccount(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleUpdate = async (field: keyof typeof account) => {
    setLoading(prev => ({ ...prev, [field]: true }));
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would typically make an API call to update the field
      console.log(`Updating ${field} with value:`, account[field]);
      
      // Show success message
      alert(`${field} updated successfully!`);
    } catch (error) {
      console.error(`Error updating ${field}:`, error);
      alert(`Failed to update ${field}. Please try again.`);
    } finally {
      setLoading(prev => ({ ...prev, [field]: false }));
    }
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      
      <div className="settings-section">
        <h3>Account Management</h3>
        <div className="settings-form">
          <div className="settings-group">
            <div className="profile-picture-container">
              <img
                src={account.profilePicture || '/default-avatar.png'}
                alt="Profile"
                className="profile-picture"
              />
              <div className="profile-picture-actions">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAccountChange}
                  className="profile-picture-input"
                  id="profile-picture"
                />
                <label htmlFor="profile-picture" className="profile-picture-label">
                  Change Picture
                </label>
                {account.profilePicture && (
                  <button
                    className="update-button"
                    onClick={() => handleUpdate('profilePicture')}
                    disabled={loading.profilePicture}
                  >
                    {loading.profilePicture ? 'Updating...' : 'Save Picture'}
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="settings-group">
            <label>Email</label>
            <div className="input-group">
              <input
                type="email"
                name="email"
                value={account.email}
                onChange={handleAccountChange}
                className="text-input"
              />
              <button
                className="update-button"
                onClick={() => handleUpdate('email')}
                disabled={loading.email}
              >
                {loading.email ? 'Updating...' : 'Update Email'}
              </button>
            </div>
          </div>

          <div className="settings-group">
            <label>Username</label>
            <div className="input-group">
              <input
                type="text"
                name="username"
                value={account.username}
                onChange={handleAccountChange}
                className="text-input"
              />
              <button
                className="update-button"
                onClick={() => handleUpdate('username')}
                disabled={loading.username}
              >
                {loading.username ? 'Updating...' : 'Update Username'}
              </button>
            </div>
          </div>

          <div className="settings-group">
            <label>Password</label>
            <div className="input-group">
              <input
                type="password"
                name="password"
                value={account.password}
                onChange={handleAccountChange}
                placeholder="Enter new password"
                className="text-input"
              />
              <button
                className="update-button"
                onClick={() => handleUpdate('password')}
                disabled={loading.password}
              >
                {loading.password ? 'Updating...' : 'Update Password'}
              </button>
            </div>
          </div>
        </div>
      </div>

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