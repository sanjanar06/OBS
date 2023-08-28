import React, { useEffect, useState } from 'react';
import AdminService from '../../services/AdminService';
import '../style/AdminTransaction.css';

function AdminTransaction() {
  const [searchAccountNumber, setSearchAccountNumber] = useState('');
  const [transactions, setTransactions] = useState([]);

  const loadTransactions = async () => {
    if (searchAccountNumber !== '') {
      await AdminService.viewTransactions(searchAccountNumber)
        .then((response) => {
          setTransactions(response.data);
          console.log(transactions);

        })
        .catch((error) => {
          console.log("Error fetching Transaction details:", error);
        });
    }
  };

  useEffect(() => {
    loadTransactions()
  }, [transactions, searchAccountNumber]);



  const handleSearchChange = (e) => {
    setSearchAccountNumber(e.target.value);
    console.log(searchAccountNumber);
  };


  return (
    <div className="admin-transaction-history">
      <h2>VIEW TRANSACTION HISTORY</h2>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter Account Number"
          value={searchAccountNumber}
          onChange={handleSearchChange}
        />
      </div>
      {<table>
        <thead>
          <tr>
            <th>To Account</th>
            <th>From Account</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {console.log(transactions)}
          {transactions.map(transaction => (
            <tr key={transaction.transactionId}>
              <td>{transaction.toAccount}</td>
              <td>{transaction.fromAccount}</td>
              <td>{transaction.transactionDate}</td>
              <td>{transaction.transactionAmount}</td>
              <td>{transaction.transactionType}</td>
            </tr>
          ))}
        </tbody>
      </table>}
    </div>
  );
}

export default AdminTransaction;
