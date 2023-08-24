// src/components/TableComponent.js
import React, { useEffect, useState } from 'react';
import { IoArrowUpCircleSharp, IoArrowDownCircleSharp } from 'react-icons/io5'; // Colorful icons from react-icons/io5
import AccountService from '../../services/AccountService';
import '../style/TransactionHistory.css' 
const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    AccountService.viewTransactions().then((res) => {
      console.log(res.data);
      const transformedData = res.data.map(transaction => {
        const userAccountNumber = localStorage.getItem("accountNumber");

        const isDebit = transaction.fromAccount === userAccountNumber;
        const isCredit = transaction.toAccount === userAccountNumber;
        const accountToShow = isDebit ? transaction.toAccount : transaction.fromAccount;

        return {
          account: accountToShow !== userAccountNumber ? accountToShow : 'N/A',
          amount: transaction.transactionAmount,
          description: transaction.transactionDesc,
          type: transaction.transactionType,
          date: transaction.transactionDate,
          isDebit,
          isCredit
        };
      });
      console.log("Transactions fetched successfully");

      setTransactions(transformedData);
      console.log(transactions);

    })
      .catch((error) => {
        console.log("Error fetching transactions");
      });

  }, []);

  return (
    <div>
      <h2>TRANSACTION HISTORY</h2>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Account</th>
            <th>Date</th>
            <th>Transaction Description</th>
            <th>Transaction Amount</th>
            <th>Transaction Debit/Credit</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((item, index) => (
            <tr key={item.transactionId}>
              <td>{index + 1}</td>
              <td>{item.account}</td>
              <td>{item.date}</td>
              <td>{item.description}</td>
              <td>{item.amount}</td>
              <td>
                {item.isDebit ? (
                  <IoArrowDownCircleSharp className="icon debit-icon" />
                ) : item.isCredit ? (
                  <IoArrowUpCircleSharp className="icon credit-icon" />
                ) : (
                  'N/A'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
