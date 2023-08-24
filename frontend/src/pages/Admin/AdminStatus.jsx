import React, { useState, useEffect } from 'react';
import '../style/AdminStatus.css';
import {getaccounts,updateAccountStatusApprove,updateAccountStatusReject} from '../../services/Admin.js';

function AdminStatus() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    // axios.get('http://localhost:3001/beneficiary') 
    //   .then(response => {
    //     console.log(response.data);
    //     setBeneficiaries(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching beneficiaries:', error);
    //   });
    getaccounts().then((response) =>{
      console.log(response.data);
      setAccounts(response.data);
  })
  .catch((error) =>{
      console.log("Error fetching account details");
  });
  }, []);

  const handleApproval = (id) => {
    updateAccountStatusApprove(id, 'Approved') 
      .then((response) => {
        if (response.status === 200) {
          setAccounts((prevAccounts) =>
            prevAccounts.map((account) =>
              account.id === id ? { ...account, status: 'Approved' } : account
            )
          );
        }
      })
      .catch((error) => {
        console.log("Error updating account status");
      });
  };

  const handleRejection = (id) => {
    updateAccountStatusReject(id, 'Rejected')
      .then((response) => {
        if (response.status === 200) {
          setAccounts((prevAccounts) =>
            prevAccounts.map((account) =>
              account.id === id ? { ...account, status: 'Rejected' } : account
            )
          );
        }
      })
      .catch((error) => {
        console.log("Error updating account status");
      });
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Account Name</th>
            <th>Account Number</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map(account => (
            <tr key={account.id}>
              <td>{account.accountName}</td>
              <td>{account.accountNumber}</td>
              <td>{account.status}</td>
              <td className="actions">
                {account.status === 'Pending' && (
                  <>
                    <button className="approve-btn" onClick={() => handleApproval(account.id)}>Approve</button>
                    <button className="reject-btn" onClick={() => handleRejection(account.id)}>Reject</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminStatus;
