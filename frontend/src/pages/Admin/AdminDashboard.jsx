
import React, { useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs'; // Example of using different icon library
import { FaFileAlt, FaMoneyBillAlt, FaUser, FaUsers } from 'react-icons/fa';
import '../style/UserDashboard.css';


// Components for the left sidebar
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
          <h1>Admin Dashboard</h1>
        </div>
        <ul>
          <li onClick={() => handleMenuItemClick(<AdminStatus />)}><FaUser className="menu-icon" />Status</li>
          <li onClick={() => handleMenuItemClick(<AdminTransaction />)}><FaFileAlt className="menu-icon" />Search Transaction</li>
    
        </ul>
      </div>
      <div className="content">{activeComponent}</div>
    </div>
  );
};

export default AdminDashboard;
