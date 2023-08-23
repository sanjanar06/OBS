
import React, { useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs'; // Example of using different icon library
import { FaFileAlt, FaMoneyBillAlt, FaUser, FaUsers } from 'react-icons/fa';
import '../style/UserDashboard.css';


// Components for the left sidebar
import AddBeneficiary from '../FundTransfer/AddBeneficiary';
<<<<<<< HEAD

function UserDashboard() {
  
=======
import DisplayBeneficiary from '../FundTransfer/DisplayBeneficiary';
import FundTransfer from '../FundTransfer/FundTransfer';
import IMPSPayment from '../FundTransfer/IMPSPayment';
import NEFTPayment from '../FundTransfer/NEFTPayment';
import RTGSPayment from '../FundTransfer/RTGSPayment';
import AccountDetails from './AccountDetails';
import TransactionHistory from './TransactionHistory';
import UserProfile from './UserProfile';

const UserDashboard = () => {
  const [activeComponent, setActiveComponent] = useState(<TransactionHistory />);

  const handleMenuItemClick = (component) => {
    setActiveComponent(component);
  };
>>>>>>> 9e648b8117371b4fe804249792473ef5030f126a

  return (
    <div className="app-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <h1>My App</h1>
        </div>
        <ul>
          <li onClick={() => handleMenuItemClick(<UserProfile />)}><FaUser className="menu-icon" />Account Profile</li>
          <li onClick={() => handleMenuItemClick(<AccountDetails />)}><FaFileAlt className="menu-icon" />Account Details</li>
          <li onClick={() => handleMenuItemClick(<TransactionHistory />)}><FaMoneyBillAlt className="menu-icon" />Transaction History</li>
          <li onClick={() => handleMenuItemClick(<FundTransfer />)}>
            <FaMoneyBillAlt className="menu-icon" />
            Fund Transfer
            <BsArrowRightShort className="submenu-icon" />
            <ul>
              <li onClick={() => handleMenuItemClick(<IMPSPayment />)}>IMPS</li>
              <li onClick={() => handleMenuItemClick(<NEFTPayment />)}>NEFT</li>
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
