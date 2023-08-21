
import React, { useState, useEffect } from 'react';
import '../style/UserDashboard.css'; 
import axios from 'axios';

// Components for the left sidebar
import AccountDetails from './AccountDetails';
import AccountSummary from './AccountSummary';
import UserProfile from './UserProfile';

function UserDashboard() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch data using axios or any other HTTP library
    axios.get('http://localhost:3001/dashboard')
      .then(response => {
        setTransactions(response.data);
      })
      .catch(error => {
        console.error('Error fetching transactions:', error);
      });
  }, []);

  return (
    <>
      <h1>Dashboard</h1>
      <div className="dashboard">
        <div className="sidebar">
          <h3>Account Details</h3>
          <h3>Account Summary</h3>
          <h3>User Profile</h3>
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
              {transactions.map(transactions => (
                <tr key={transactions.account_no}>
                  <td>{transactions.accountHolderName}</td>
                  <td>{transactions.accountNumber}</td>
                  <td>{transactions.accountType}</td>
                  <td>{transactions.accountBalance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default UserDashboard;
