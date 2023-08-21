import React, { Component } from 'react';
import '../style/UserDashboard.css'; // Import your CSS file for styling

// Components for the left sidebar
import AccountDetails from './AccountDetails';
import AccountSummary from './AccountSummary';
import UserProfile from './UserProfile';

class UserDashboard extends Component {

  
  render() {

    // async function gtTrans() {
    //   const res = await fetch("");
    //   const data = res.json();

    // }
    var trans =  [{
      "tran_date": '12/01/2001',
      "balance": "₹ 200",
      "account_no": 'fwe'
    },
    {
      "tran_date": '12/01/2001',
      "balance": "₹ 200"
    }
  ]
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
              {
                trans.map(tran => {
                  return (
                    <tr>
                     <td>{tran.balance}</td>
                     <td>123456789</td>
                     <td>Savings</td>
                     <td>10,000</td>
                   </tr>
                  )
                })
              }
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
