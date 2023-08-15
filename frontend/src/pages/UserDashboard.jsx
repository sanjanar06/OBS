import React from 'react'

import {Route, Routes } from 'react-router-dom';
import AccountDatiails from './DashboardPages/AccountDetails.jsx';
import AccountDetails from './DashboardPages/AccountDetails.jsx';
import AccountSummary from './DashboardPages/AccountSummary.jsx';
import ChangeUid_pass from './DashboardPages/ChangeUserId_Password.jsx';
import UserProfile from './DashboardPages/UserProfile.jsx';
function UserDashboard() {
  return (
    <div>
      <h1>this is user UserDashboard</h1>
      
      <Routes>
          <Route path="/AccountDetails" element={<AccountDetails/>}/> 
          <Route path="/AccountSummary" element={<AccountSummary/>}/> 
          <Route path="/Change" element={<ChangeUid_pass/>}/> 
          <Route path="/UserProfile" element={<UserProfile/>}/> 
      </Routes>
      
      <button>Account Details</button>
      <button>Account Summary</button>
      <button>Change User Id/Password</button>
      <button>User Profile</button>
      
    </div>
    

  )
}

export default UserDashboard