import React from 'react';
import './AdminNavBar.css'; // Import your CSS file

const AdminNavBar = () => {
  return (
    <div className="top-bar">
      <div className="logo">
        {/* Add your logo or app name here */}
        Your Logo
      </div>
      <div className="profile-icon">
        {/* Add your profile icon image here */}
        <img src="profile-icon.png" alt="Profile" />
      </div>
    </div>
  );
};

export default AdminNavBar;
