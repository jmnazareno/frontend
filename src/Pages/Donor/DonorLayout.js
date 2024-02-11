import React from 'react';
import DonorNavbar from '../../Components/DonorBars/DonorNavBar';
import DonorSideBar from '../../Components/DonorBars/DonorSideBar';
import "./DonorLayout.css"
import { Outlet } from 'react-router-dom';

// DonorLayout.js
const DonorLayout = () => {
  return (
    <>
      <DonorNavbar />
      <div className="DonorHomeContainer">
        <DonorSideBar />
        <Outlet />
      </div>
    </>
  );
};

export default DonorLayout;
