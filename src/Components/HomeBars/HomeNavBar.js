import React from 'react';
import './HomeNavBar.css';
import { MonetizationOnRounded} from '@mui/icons-material'; // Import the Send icon

const HomeNavBar = () => {
  return (
    <div className="top-bar">
      <div className="logo">
        <a href="/">
          <img src="/Assets/logo.png" alt="Logo" />
        </a>
      </div>
      <div className="profile-section">
        <div className="donation-button">
          <button>
            <span><MonetizationOnRounded /></span> {/* Add the Send icon beside the button text */}
            Donate
          </button>
        </div>
        <div className="profile-icon">
          <img src="/Assets/person/1.jpeg" alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default HomeNavBar;
