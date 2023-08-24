// src/components/TableComponent.js
import React, { useEffect, useState } from 'react';
import AccountService from '../../services/AccountService';
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri'; // Example icons, you can replace them

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    AccountService.viewTransactions().then((res) => {

      const transformedData = res.map(transaction => {
          const userAccountNumber = localStorage.getItem("accountNumber")

          const isDebit = transaction.fromAccount === userAccountNumber;
          const isCredit = transaction.toAccount === userAccountNumber;
          const accountToShow = isDebit ? transaction.toAccount : transaction.fromAccount;

          return {
            account:  accountToShow !== userAccountNumber ? accountToShow : 'N/A',
            amount: transaction.amount,
            description: transaction.transactionDesc,
            type: transaction.transactionType,
            date: transaction.transactionDate,
            isDebit,
            isCredit
          };
        });
      console.log("Transactions fetched successfully");
      setTransactions(transformedData);
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
            <th> Account</th>
            <th>Date</th>
            <th>Transaction Mode</th>
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
              <td>{item.transactionDate}</td>
              <td>{item.transactionType}</td>
              <td>{item.transactionDesc}</td>
              <td>{item.transactionAmount}</td>
              <td>
                {item.isDebit ? (
                  <RiArrowDownSLine className="debit-icon" />
                ) : item.isCredit ? (
                  <RiArrowUpSLine className="credit-icon" />
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
