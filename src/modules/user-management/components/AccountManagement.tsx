import React, { useState } from 'react';
import './AccountManagement.css';

const AccountManagement: React.FC = () => {
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
    <div className="account-management">
      <h3>Account Management</h3>
      <div className="account-form">
        <div className="account-group">
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

        <div className="account-group">
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

        <div className="account-group">
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

        <div className="account-group">
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
  );
};

export default AccountManagement; 