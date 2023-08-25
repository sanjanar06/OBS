import React, { useEffect, useState } from 'react';
import AdminService from '../../services/AdminService';
import '../style/AdminStatus.css';

function AdminStatus() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    AdminService.viewAllAccounts().then((response) => {
      console.log(response.data);
      setAccounts(response.data);
    })
      .catch((error) => {
        console.log("Error fetching account details");
      });
  }, []);

  const handleApproval = (accountNumber) => {
    AdminService.updateAccountStatusApprove(accountNumber)
      .then((response) => {
        if (response.status === 200) {
          setAccounts((prevAccounts) =>
            prevAccounts.map((account) =>
              account.accountNumber === accountNumber ? { ...account, status: 'ACCEPTED' } : account
            )
          );
        }
      })
      .catch((error) => {
        console.log("Error updating account status");
      });
  };

  const handleRejection = (accountNumber) => {
    console.log(accountNumber);
    AdminService.updateAccountStatusReject(accountNumber)
      .then((response) => {
        if (response.status === 200) {
          setAccounts((prevAccounts) =>
            prevAccounts.map((account) =>
              account.accountNumber === accountNumber ? { ...account, status: 'REJECTED' } : account
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
      <h2>USER ACCOUNTS</h2>
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
                {/* {account.status === 'PENDING' && ( */}
                {/* <> */}
                <button className="approve-btn" onClick={() => handleApproval(account.accountNumber)} disabled={account.status == 'ACCEPTED'}>Approve</button>
                <button className="reject-btn" onClick={() => handleRejection(account.accountNumber)} disabled={account.status == 'REJECTED'}>Reject</button>
                {/* </>
                )} */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminStatus;
