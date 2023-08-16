import React from 'react';
import '../style/ForgetUserId.css';

const ForgotUserId = () => {
  return (
    <div className="forgot-user-id-container">
      <h1>Forgot User ID</h1>
      <h2>Enter details:</h2>
      <div className="input-section">
        <label>
          Enter Account Number:
          <input type="text" className="input-field" />
        </label>
        <label>
          Enter OTP:
          <input type="password" className="input-field" />
        </label>
      </div>
      <div className="button-section">
        <button className="proceed-button">Proceed</button>
        <button className="back-button">Back</button>
      </div>
    </div>
  );
};

export default ForgotUserId;
