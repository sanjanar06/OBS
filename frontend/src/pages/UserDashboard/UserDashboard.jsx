
import React, { useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs'; // Example of using different icon library
import { FaFileAlt, FaMoneyBillAlt, FaUser, FaUsers } from 'react-icons/fa';
import '../style/UserDashboard.css';


// Components for the left sidebar
import AddBeneficiary from '../FundTransfer/AddBeneficiary';
import DisplayBeneficiary from '../FundTransfer/DisplayBeneficiary';
import IMPSPayment from '../FundTransfer/impsPayment';
import NEFTPayment from '../FundTransfer/neftPayment';
import RTGSPayment from '../FundTransfer/RTGSPayment';
import AccountDetails from './AccountDetails';
import TransactionHistory from './TransactionHistory';
import UserProfile from './UserProfile';

const UserDashboard = () => {
  const [activeComponent, setActiveComponent] = useState(<UserProfile />);
  const [fundTransferSubMenuOpen, setFundTransferSubMenuOpen] = useState(false);
  const [beneficiariesSubMenuOpen, setBeneficiariesSubMenuOpen] = useState(false);

  const handleMenuItemClick = (component) => {
    setActiveComponent(component);
  };

  const toggleFundTransferSubMenu = () => {
    setFundTransferSubMenuOpen(!fundTransferSubMenuOpen);
  };

  const toggleBeneficiariesSubMenu = () => {
    setBeneficiariesSubMenuOpen(!beneficiariesSubMenuOpen);
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <h1>USER</h1>
        </div>
        <ul>
          <li onClick={() => handleMenuItemClick(<UserProfile />)}><FaUser className="menu-icon" />Account Profile</li>
          <li onClick={() => handleMenuItemClick(<AccountDetails />)}><FaFileAlt className="menu-icon" />Account Details</li>
          <li onClick={() => handleMenuItemClick(<TransactionHistory />)}><FaMoneyBillAlt className="menu-icon" />Transaction History</li>
          <li onClick={toggleFundTransferSubMenu}>
            <FaMoneyBillAlt className="menu-icon" />
            Fund Transfer
            <BsArrowRightShort className={`submenu-icon ${fundTransferSubMenuOpen ? 'open' : ''}`} />
            {fundTransferSubMenuOpen && (
              <ul className={`submenu ${fundTransferSubMenuOpen ? 'open' : ''}`}>
                <li onClick={() => handleMenuItemClick(<IMPSPayment />)}>IMPS</li>
                <li onClick={() => handleMenuItemClick(<NEFTPayment />)}>NEFT</li>
                <li onClick={() => handleMenuItemClick(<RTGSPayment />)}>RTGS</li>
              </ul>
            )}
          </li>
          <li onClick={toggleBeneficiariesSubMenu}>
            <FaUsers className="menu-icon" />
            Beneficiaries
            <BsArrowRightShort
              className={`submenu-icon ${beneficiariesSubMenuOpen ? 'open' : ''}`}
            />
            {beneficiariesSubMenuOpen && (
              <ul className={`submenu ${beneficiariesSubMenuOpen ? 'open' : ''}`}>
                <li onClick={() => handleMenuItemClick(<AddBeneficiary />)}>Add</li>
                <li onClick={() => handleMenuItemClick(<DisplayBeneficiary />)}>View</li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      <div className="content">{activeComponent}</div>
    </div>
  );
};

export default UserDashboard;
