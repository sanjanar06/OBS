import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountService from '../../services/AccountService';
import '../style/AddBeneficiary.css'; // Import your custom CSS file for styling


function AddBeneficiary() {
  const [beneficiaryData, setBeneficiaryData] = useState({
    beneficiaryName: '',
    beneficiaryAccountNumber: '',
    reenteredAccountNumber: '',
    beneficiaryNickName: '',
  });

  const handleInputChange = (field, value) => {
    setBeneficiaryData({
      ...beneficiaryData,
      [field]: value,
    });
  };

  const navigate = useNavigate();


  const handleProceedClick = async (event) => {
    if (beneficiaryData.beneficiaryAccountNumber != beneficiaryData.reenteredAccountNumber) {
      alert("Account number not matched,Please re-enter!!");

    }
    else {
      event.preventDefault();
      AccountService.addBeneficiary(beneficiaryData).then((res) => {
        console.log("Added beneficiary");
        console.log(res.data);
        alert("Added beneficiary");
      })
        .catch(() => {
          console.log("Error adding beneficiary");
        });
    }
  }


  return (
    <div className="AddBeneficiary">
      <h2>Add New Beneficiary</h2>
      <form>
        <div className="form-group">
          <label htmlFor="beneficiaryName">Beneficiary Name:</label>
          <input
            type="text"
            id="beneficiaryName"
            name="beneficiaryName"
            value={beneficiaryData.beneficiaryName}
            onChange={e => handleInputChange('beneficiaryName', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="beneficiaryAccountNumber">Beneficiary Account Number:</label>
          <input
            type="text"
            id="beneficiaryAccountNumber"
            name="beneficiaryAccountNumber"
            value={beneficiaryData.beneficiaryAccountNumber}
            onChange={e => handleInputChange('beneficiaryAccountNumber', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="reenteredAccountNumber">Re-enter Account Number:</label>
          <input
            type="text"
            id="reenteredAccountNumber"
            name="reenteredAccountNumber"
            value={beneficiaryData.reenteredAccountNumber}
            onChange={e => handleInputChange('reenteredAccountNumber', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="beneficiaryNickName">Nick Name:</label>
          <input
            type="text"
            id="beneficiaryNickName"
            name="beneficiaryNickName"
            value={beneficiaryData.beneficiaryNickName}
            onChange={e => handleInputChange('beneficiaryNickName', e.target.value)}
          />
        </div>
        <div className="button-container">
          <button type="button" className="button proceed-button" onClick={handleProceedClick}>
            ADD
          </button>

        </div>
      </form>
    </div>
  );
}

export default AddBeneficiary;
