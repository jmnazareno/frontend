// AdminSidebar.js

import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <div className="logo">
        {/* Your logo goes here */}
        <img src="/path-to-your-logo.png" alt="Logo" />
      </div>
      <div className="admin-options">
        <Link to="/admin/home">Home</Link>
        <Link to="/admin/data">Data</Link>
        <Link to="/admin/settings">Settings</Link>
      </div>
      <div className="logout">
        <Link to="/logout">Logout</Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
