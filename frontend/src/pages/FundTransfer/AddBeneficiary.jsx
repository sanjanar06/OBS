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

  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setBeneficiaryData({
      ...beneficiaryData,
      [field]: value,
    });
  };

  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!beneficiaryData.beneficiaryName) {
      newErrors.beneficiaryName = '*Beneficiary name is required';
      isValid = false;
    }

    if (!beneficiaryData.beneficiaryAccountNumber) {
      newErrors.beneficiaryAccountNumber = '*Beneficiary account number is required';
      isValid = false;
    }

    if (beneficiaryData.beneficiaryAccountNumber !== beneficiaryData.reenteredAccountNumber) {
      newErrors.reenteredAccountNumber = '*Account numbers do not match';
      isValid = false;
    }
    if(beneficiaryData.beneficiaryAccountNumber.length!=12){
      newErrors.beneficiaryAccountNumber = '*Enter a valid account number';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleProceedClick = async (event) => {
    
      event.preventDefault();

      if (validateForm()) {

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
            required
            name="beneficiaryName"
            value={beneficiaryData.beneficiaryName}
            onChange={e => {
              handleInputChange('beneficiaryName', e.target.value);
              setErrors({ ...errors, beneficiaryName: '' });
            }}
          />
           {errors.beneficiaryName && (
          <div className="error">{errors.beneficiaryName}</div>
           )}

        </div>
        <div className="form-group">
          <label htmlFor="beneficiaryAccountNumber">Beneficiary Account Number:</label>
          <input
            type="text"
            id="beneficiaryAccountNumber"
            name="beneficiaryAccountNumber"
            value={beneficiaryData.beneficiaryAccountNumber}
            onChange={e => {
              handleInputChange('beneficiaryAccountNumber', e.target.value);
              setErrors({ ...errors, beneficiaryAccountNumber: '' });
            }}
          />
           {errors.beneficiaryAccountNumber && (
          <div className="error">{errors.beneficiaryAccountNumber}</div>
        )}
        
        </div>
      <div className="form-group">
        <label htmlFor="reenteredAccountNumber">Re-enter Account Number:</label>
        <input
          type="text"
          id="reenteredAccountNumber"
          name="reenteredAccountNumber"
          value={beneficiaryData.reenteredAccountNumber}
          onChange={(e) => {
            handleInputChange('reenteredAccountNumber', e.target.value);
            setErrors({ ...errors, reenteredAccountNumber: '' }); // Clear validation error
          }}
        />
        {errors.reenteredAccountNumber && (
          <div className="error">{errors.reenteredAccountNumber}</div>
        )}
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
