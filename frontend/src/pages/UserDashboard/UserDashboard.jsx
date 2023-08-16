import React from 'react'

import {Route, Routes } from 'react-router-dom';
import AccountDetails from './AccountDetails.jsx';
import AccountSummary from './AccountSummary.jsx';
import UserProfile from './UserProfile.jsx';
function UserDashboard() {
  return (
    <div>
      <h1>User Dashboard</h1>
      
      <Routes>
          <Route path="/AccountDetails" element={<AccountDetails/>}/> 
          <Route path="/AccountSummary" element={<AccountSummary/>}/> 
          <Route path="/UserProfile" element={<UserProfile/>}/> 
      </Routes>
      
      <button>Account Details</button>
      <button>Account Summary</button>
      <button>Change Password</button>
      <button>User Profile</button>
      
    </div>
    

  )
}

export default UserDashboard