import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/DisplayBeneficiary.css';
import { getbeneficiary } from "../../services/FundTransfer";

function DisplayBeneficiary() {
    const [beneficiaries, setBeneficiaries] = useState([]);

  useEffect(() => {
    
    getbeneficiary().then((response) =>{
      console.log(response.data);
      setBeneficiaries(response.data);
  })
  .catch((error) =>{
      console.log("Error fetching beneficiaries");
  });
  }, []);

  return (
    <div className="display-beneficiary">
    <h2>Beneficiaries</h2>
    <table>
        <thead>
            <tr>
                <th>Serial Number</th>
                <th>Beneficiary Name</th>
                <th>Beneficiary Account Number</th>
                <th>Nick Name</th>
            </tr>
        </thead>
        <tbody>
            {beneficiaries.map((beneficiary, index) => (
                <tr key={beneficiary.id}>
                    <td>{index + 1}</td>
                    <td>{beneficiary.beneficiaryName}</td>
                    <td>{beneficiary.accountNumber}</td>
                    <td>{beneficiary.nickName}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
  );
}

export default DisplayBeneficiary;
