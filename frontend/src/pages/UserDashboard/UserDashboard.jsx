
import React, { useState, useEffect } from 'react';
import '../style/UserDashboard.css'; 
import axios from 'axios';
import { FaUser, FaFileAlt, FaMoneyBillAlt, FaUsers } from 'react-icons/fa';
import { BsArrowRightShort } from 'react-icons/bs'; // Example of using different icon library


// Components for the left sidebar
import AccountDetails from './AccountDetails';
import AccountSummary from './AccountSummary';
import UserProfile from './UserProfile';
import FundTransfer from '../FundTransfer/FundTransfer';
import AddBeneficiary from '../FundTransfer/AddBeneficiary';
import IMPSPayment from '../FundTransfer/impsPayment';
import NeftPayment from '../FundTransfer/neftPayment';
import RTGSPayment from '../FundTransfer/RTGSPayment';
import DisplayBeneficiary from '../FundTransfer/DisplayBeneficiary';

const UserDashboard = () => {
  const [activeComponent, setActiveComponent] = useState(<AccountSummary />);
  
  const handleMenuItemClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <h1>My App</h1>
        </div>
        <ul>
          <li onClick={() => handleMenuItemClick(<UserProfile />)}><FaUser className="menu-icon" />Account Profile</li>
          <li onClick={() => handleMenuItemClick(<AccountDetails />)}><FaFileAlt className="menu-icon" />Account Details</li>
          <li onClick={() => handleMenuItemClick(<AccountSummary />)}><FaMoneyBillAlt className="menu-icon" />Account Summary</li>
          <li onClick={() => handleMenuItemClick(<FundTransfer />)}>
          <FaMoneyBillAlt className="menu-icon" />
            Fund Transfer
            <BsArrowRightShort className="submenu-icon" />
            <ul>
              <li onClick={() => handleMenuItemClick(<IMPSPayment />)}>IMPS</li>
              <li onClick={() => handleMenuItemClick(<NeftPayment />)}>NEFT</li>
              <li onClick={() => handleMenuItemClick(<RTGSPayment />)}>RTGS</li>
            </ul>
          </li>
          <li onClick={() => handleMenuItemClick(<AddBeneficiary />)}>
            <FaUsers className="menu-icon" />
            Beneficiaries
            <BsArrowRightShort className="submenu-icon" />
            <ul>
              <li onClick={() => handleMenuItemClick(<AddBeneficiary />)}>Add Beneficiary</li>
              <li onClick={() => handleMenuItemClick(<DisplayBeneficiary />)}>View Beneficiary</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="content">{activeComponent}</div>
    </div>
  );
};

export default UserDashboard;
