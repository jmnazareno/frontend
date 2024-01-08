import React from 'react';
import { HomeRounded, PersonRounded, Settings } from '@mui/icons-material';
import './DonorSideBar.css';

const DonorSideBar = () => {
  return (
    <div className="DonorSideBar">
      <div className="DonorSideBarWrapper">
        {/* Logo */}
        <div className="DonorSideBarLogo">
          <img src="/path/to/your/logo.png" alt="Logo" />
        </div>
        {/* Line separator */}
        <hr className="DonorSideBarLine" />
        {/* Icons */}
        <ul className="DonorSideBarList">
          <li className="DonorSideBarListItem">
            <HomeRounded className="DonorSideBarIcon" />
            <span className="DonorSidebarListItemText">Home</span>
          </li>
          <li className="DonorSideBarListItem">
            <PersonRounded className="DonorSideBarIcon" />
            <span className="DonorSidebarListItemText">Profile</span>
          </li>
          <li className="DonorSideBarListItem">
            <Settings className="DonorSideBarIcon" />
            <span className="DonorSidebarListItemText">Settings</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DonorSideBar;
