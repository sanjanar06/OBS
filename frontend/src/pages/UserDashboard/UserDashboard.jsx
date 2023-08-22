
import React, { useState, useEffect } from 'react';
import '../style/UserDashboard.css'; 
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components for the left sidebar
import AccountDetails from './AccountDetails';
import AccountSummary from './AccountSummary';
import UserProfile from './UserProfile';
import Sidebar from './Sidebar';
import FundTransfer from '../FundTransfer/FundTransfer';
import AddBeneficiary from '../FundTransfer/AddBeneficiary';
function UserDashboard() {
  

  return (
      <Sidebar>
        <Routes>
          <Route path="/accountSummary" element={<AccountSummary />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/fundTransfer" element={<FundTransfer />} />
          <Route path="/addBeneficiary" element={<AddBeneficiary />} />
        </Routes>
      </Sidebar>
  );
}

export default UserDashboard;
