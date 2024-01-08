import React from 'react';
import DonorNavbar from '../../Components/DonorBars/DonorNavBar';
import DonorSideBar from '../../Components/DonorBars/DonorSideBar';
import DonorFeed from '../../Components/DonorBars/DonorFeed';
import DonorRightBar from '../../Components/DonorBars/DonorRightBar';
import "./DonorHomepage.css"

// DonorHomepage.js
const DonorHomepage = () => {
  return (
    <>
      <DonorNavbar />
      <div className="DonorHomeContainer">
        <DonorSideBar />
        <DonorFeed />
        <DonorRightBar />
      </div>
    </>
  );
};

export default DonorHomepage;
