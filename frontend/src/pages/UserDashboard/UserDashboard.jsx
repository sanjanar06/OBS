
import React, { useState, useEffect } from 'react';
import '../style/UserDashboard.css'; 
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components for the left sidebar
import AccountDetails from './AccountDetails';
import AccountSummary from './AccountSummary';
import UserProfile from './UserProfile';
import Sidebar from './Sidebar';
function UserDashboard() {
  

  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/accountSummary" element={<AccountSummary />} />
          <Route path="/userRPofile" element={<UserProfile />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} /> */}
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default UserDashboard;
