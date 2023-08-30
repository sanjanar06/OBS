import React, { useEffect, useState } from 'react';
import AdminService from '../../services/AdminService';
import '../style/AdminStatus.css';

function AdminStatus() {
  const [accounts, setAccounts] = useState([]);
  const [searchAccountNumber, setSearchAccountNumber] = useState('');


  const loadAccounts = async () => {
    if (searchAccountNumber !== '') {
      await AdminService.viewAccount(searchAccountNumber)
        .then((response) => {
          setAccounts([response.data]);
          console.log(accounts)
        })
        .catch((error) => {
          console.log("Error fetching account details:", error);
        });
    }
  };

  useEffect(() => {
    if (searchAccountNumber !== '') {
      loadAccounts();
    }
    else {
      AdminService.viewAllAccounts().then((response) => {
        console.log(response.data);
        setAccounts(response.data);
      })
        .catch((error) => {
          console.log("Error fetching account details");
        });
    }


  }, [accounts]);

  const handleApproval = (accountNumber) => {
    AdminService.updateAccountStatus(accountNumber, "ACCEPTED")
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
    AdminService.updateAccountStatus(accountNumber, "REJECTED")
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

  const handleSearchChange = (e) => {
    setSearchAccountNumber(e.target.value);
    console.log(searchAccountNumber);
  };

  return (
    <div className="admin-dashboard">
      <h2>USER ACCOUNTS</h2>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter Account Number"
          value={searchAccountNumber}
          onChange={handleSearchChange}
        />
      </div>
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
          {console.log(accounts)}
          {accounts.map(account => (
            <tr key={account.accountNumber}>
              <td>{account.accountName}</td>
              <td>{account.accountNumber}</td>
              <td>{account.status}</td>
              <td className="actions">
                {/* {account.status === 'PENDING' && ( */}
                {/* <> */}
                <button className="approve-btn"
                  onClick={() => handleApproval(account.accountNumber)}
                  disabled={account.status == 'ACCEPTED'}
                  style={{ backgroundColor: account.status === 'ACCEPTED' ? 'grey' : 'green' }}
                >Approve</button>
                <button className="reject-btn"
                  onClick={() => handleRejection(account.accountNumber)}
                  disabled={account.status == 'REJECTED'}
                  style={{ backgroundColor: account.status === 'REJECTED' ? 'grey' : 'red' }}>Reject</button>
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
