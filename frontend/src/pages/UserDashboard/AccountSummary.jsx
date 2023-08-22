// src/components/TableComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const AccountSummary = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint using Axios
    axios.get('http://localhost:3000/transaction')
      .then(response => {
        setData(response.data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Data Table</h2>
      <table>
        <thead>
          <tr>
            <th>Transaction Type</th>
            <th>Transaction Description</th>
            <th>Transaction Amount</th>
            <th>To Account</th>
            <th>From Account</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.transactionType}</td>
              <td>{item.transactionDesc}</td>
              <td>{item.transactionAmount}</td>
              <td>{item.toAccount}</td>
              <td>{item.fromAccount}</td>
              <td>{item.startDate}</td>
              <td>{item.endDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountSummary;
