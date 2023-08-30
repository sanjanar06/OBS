
import React, { useState } from 'react';
import { FaFileAlt, FaUser } from 'react-icons/fa';
import '../style/UserDashboard.css';


// Components for the left sidebar
import { logout } from '../../services/auth';
import AdminStatus from './AdminStatus';
import AdminTransaction from './AdminTransaction';
const AdminDashboard = () => {
  const [activeComponent, setActiveComponent] = useState(<AdminStatus />);


  const handleMenuItemClick = (component) => {
    setActiveComponent(component);
  };



  return (
    <div className="app-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <h1>ADMIN</h1>
        </div>
        <ul>
          <li onClick={() => handleMenuItemClick(<AdminStatus />)}><FaUser className="menu-icon" />Status</li>
          <li onClick={() => handleMenuItemClick(<AdminTransaction />)}><FaFileAlt className="menu-icon" />Search Transaction</li>
          <li onClick={() => logout()}><FaUser className="menu-icon" />Logout</li>

        </ul>
      </div>
      <div className="content">{activeComponent}</div>
    </div>
  );
};

export default AdminDashboard;
