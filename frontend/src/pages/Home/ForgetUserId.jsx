import React, { useState } from 'react';
import '../style/ForgetUserId.css';

const ForgotUserId = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [errors, setErrors] = useState({
    accountNumber: '',
    otp: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!accountNumber) {
      newErrors.accountNumber = 'Account number is required';
      isValid = false;
    }

    if (!otp) {
      newErrors.otp = 'OTP is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleProceedClick = () => {
    if (validateForm()) {
      
    }
  };

  return (
    <div className="forgot-user-id-container">
      <h1>Forgot User ID</h1>
      <h2>Enter details:</h2>
      <div className="input-section">
        <label>
          Enter Account Number:
          <input
            type="text"
            className="input-field"
            value={accountNumber}
            onChange={(e) => {
              setAccountNumber(e.target.value);
              setErrors({ ...errors, accountNumber: '' });
            }}
          />
          {errors.accountNumber && <div className="error">{errors.accountNumber}</div>}
        </label>
        <label>
          Enter OTP:
          <input
            type="password"
            className="input-field"
            value={otp}
            onChange={(e) => {
              setOtp(e.target.value);
              setErrors({ ...errors, otp: '' });
            }}
          />
          {errors.otp && <div className="error">{errors.otp}</div>}
        </label>
      </div>
      <div className="button-section">
        <button className="proceed-button" onClick={handleProceedClick}>
          Proceed
        </button>
        <button className="back-button">Back</button>
      </div>
    </div>
  );
};

export default ForgotUserId;
