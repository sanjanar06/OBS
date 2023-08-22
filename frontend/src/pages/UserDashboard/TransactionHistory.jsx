// src/components/TableComponent.js
import React, { useEffect, useState } from 'react';
import AccountService from '../../services/AccountService';

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    AccountService.viewTransactions().then((res) => {
      console.log("Transactions fetched successfully");
      setTransactions(res.data);
    })
      .catch((error) => {
        console.log("Error fetching transactions");
      });

  }, []);

  return (
    <div>
      <h2>Data Table</h2>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>To Account</th>
            <th>From Account</th>
            <th>Date</th>
            <th>Transaction Type</th>
            <th>Transaction Description</th>
            <th>Transaction Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((item, index) => (
            <tr key={item.transactionId}>
              <td>{index + 1}</td>
              <td>{item.toAccount}</td>
              <td>{item.fromAccount}</td>
              <td>{item.transactionDate}</td>
              <td>{item.transactionType}</td>
              <td>{item.transactionDesc}</td>
              <td>{item.transactionAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
