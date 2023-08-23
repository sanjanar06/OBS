import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/AccountDetails.css';
import { getAccountDetails } from "../../services/UserDetails";

function AccountDetails() {
    const [details, setDetails] = useState([]);

  useEffect(() => {
    
    getAccountDetails().then((response) =>{
      console.log(response.data);
      setDetails(response.data);
  })
  .catch((error) =>{
      console.log("Error fetching account details");
  });
  }, []);

  return (
    <div className="display-details">
    <h2>Account Details</h2>
    <table>
        <thead>
            <tr>
                {/* <th>Serial Number</th> */}
                <th>Name</th>
                <th>Account Number</th>
                <th>Account Type</th>
                <th>Account Balance</th>
            </tr>
        </thead>
        <tbody>
            {details.map((beneficiary, index) => (
                <tr key={beneficiary.id}>
                    {/* <td>{index + 1}</td> */}
                    <td>{beneficiary.Name}</td>
                    <td>{beneficiary.accountNumber}</td>
                    <td>{beneficiary.accountType}</td>
                    <td>beneficiary.accountBalance</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
  );
}

export default AccountDetails;
