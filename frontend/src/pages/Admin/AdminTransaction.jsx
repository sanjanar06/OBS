import React, { useState, useEffect } from 'react';
import '../style/AdminTransaction.css';
import { gettransactions } from '../../services/Admin';

function AdminTransaction() {
  const [searchAccountNumber, setSearchAccountNumber] = useState('');
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
            gettransactions().then((response) =>{
            console.log(response.data);
            setTransactions(response.data);
        })
        .catch((error) =>{
            console.log("Error fetching Transaction details");
        });
 }, []);

 const filteredTransactions = transactions.filter(transaction =>
    transaction.accountNumber === searchAccountNumber
  );

  const handleSearchChange = (e) => {
    setSearchAccountNumber(e.target.value);
  };

  return (
    <div className="admin-transaction-history">
    <h2>Admin Transaction History</h2>
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
          <th>Transaction ID</th>
          <th>Account Number</th>
          <th>Amount</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {filteredTransactions.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.id}</td>
            <td>{transaction.accountNumber}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}

export default AdminTransaction;
