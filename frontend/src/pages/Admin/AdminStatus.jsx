import React, { useEffect, useState } from 'react';
import AdminService from '../../services/AdminService';
import '../style/AdminStatus.css';

function AdminStatus() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    AdminService.viewAllaccounts().then((response) => {
      console.log(response.data);
      setAccounts(response.data);
    })
      .catch((error) => {
        console.log("Error fetching account details");
      });
  }, []);

  const handleApproval = (id) => {
    AdminService.updateAccountStatusApprove(localStorage.getItem("accountNumber"))
      .then((response) => {
        if (response.status === 200) {
          setAccounts((prevAccounts) =>
            prevAccounts.map((account) =>
              account.id === id ? { ...account, status: 'ACCEPTED' } : account
            )
          );
        }
      })
      .catch((error) => {
        console.log("Error updating account status");
      });
  };

  const handleRejection = (id) => {
    AdminService.updateAccountStatusReject(localStorage.getItem("accountNumber"))
      .then((response) => {
        if (response.status === 200) {
          setAccounts((prevAccounts) =>
            prevAccounts.map((account) =>
              account.id === id ? { ...account, status: 'REJECTED' } : account
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
            <tr key={account.accountNumber}>
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
