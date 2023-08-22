
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../style/UserDashboard.css';

// Components for the left sidebar
import Sidebar from './Sidebar';
function UserDashboard() {


  return (
    <BrowserRouter>
      <Sidebar>
        {/* <Routes> */}
        {/* <Route path="/accountSummary" element={<AccountSummary />} /> */}
        {/* <Route path="/userRPofile" element={<UserProfile />} /> */}
        {/* <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} /> */}
        {/* </Routes> */}
      </Sidebar>
    </BrowserRouter>
  );
}

export default UserDashboard;
