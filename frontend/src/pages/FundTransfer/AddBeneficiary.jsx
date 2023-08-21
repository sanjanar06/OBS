import React, { useState, useEffect } from 'react';
import '../style/AddBeneficiary.css'; // Import your custom CSS file for styling
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function AddBeneficiary() {
  const [beneficiaryData, setBeneficiaryData] = useState({
    beneficiaryName: '',
    accountNumber: '',
    reenteredAccountNumber: '',
    nickName: '',
    saveBeneficiary: false,
  });

  const handleInputChange = (field, value) => {
    setBeneficiaryData({
      ...beneficiaryData,
      [field]: value,
    });
  };

  const navigate = useNavigate();


  const handleProceedClick = async() => {
    if(beneficiaryData.accountNumber!=beneficiaryData.reenteredAccountNumber){
      alert("Account number not matched,Please re-enter!!");

    }
    else{
    //navigate("/fundtransfer");
    try {
      const response = await axios.post('http://localhost:3001/beneficiary', beneficiaryData);
      console.log('Beneficiary saved:', response.data);
      // Handle success or navigate to a different page
    } catch (error) {
      console.error('Error saving payment:', error);
      // Handle error if needed
    }

    alert(beneficiaryData.nickName + " added as beneficiary");
  }
  };

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
          <label htmlFor="accountNumber">Beneficiary Account Number:</label>
          <input
            type="text"
            id="accountNumber"
            name="accountNumber"
            value={beneficiaryData.accountNumber}
            onChange={e => handleInputChange('accountNumber', e.target.value)}
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
          <label htmlFor="nickName">Nick Name:</label>
          <input
            type="text"
            id="nickName"
            name="nickName"
            value={beneficiaryData.nickName}
            onChange={e => handleInputChange('nickName', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="saveBeneficiary"
              checked={beneficiaryData.saveBeneficiary}
              onChange={e => handleInputChange('saveBeneficiary', e.target.checked)}
            />
            Save Beneficiary
          </label>
        </div>
        <div className="button-container">
          <button type="button" className="button proceed-button" onClick={handleProceedClick}>
            Proceed
          </button>
          <Link to="/displaybeneficiaries">
          <button type="button" className="button proceed-button" >
            Veiw already existing beneficiaries
          </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default AddBeneficiary;
