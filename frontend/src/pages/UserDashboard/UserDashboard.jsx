import React, { Component } from 'react';
import '../style/UserDashboard.css'; // Import your CSS file for styling

// Components for the left sidebar
import AccountDetails from './AccountDetails';
import AccountSummary from './AccountSummary';
import UserProfile from './UserProfile';

class UserDashboard extends Component {
  render() {
    return (
      <>
      <h1>Dashboard</h1>
      <div className="dashboard">
        
        <div className="sidebar">
          <h3>Account Details </h3>
          <h3>Account Summary </h3>
          <h3>User Profile </h3>
        </div>
        <div className="content">
          {/* Display user's account information here */}
          <h2>Account Information</h2>
          <table className="account-table">
            <thead>
              <tr>
                <th>Account Holder Name</th>
                <th>Account Number</th>
                <th>Account Type</th>
                <th>Account Balance(INR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John</td>
                <td>123456789</td>
                <td>Savings</td>
                <td>10,000</td>
              </tr>
              {/* Add more rows for additional accounts */}
            </tbody>
          </table>
        </div>
      </div>
      </>
    );
  }
}

export default UserDashboard;
