import React from 'react';
import '../style/SetNewPassword.css'; 

const SetNewPassword = () => {
  return (
    <div className="set-new-password-container">
      <h1>Set New Password</h1>
      <div className="input-section">
        <label>
          Login Password:
          <input type="password" />
        </label>
        <label>
          Confirm Login Password:
          <input type="password" />
        </label>
      </div>
      <div className="button-section">
        <button>Submit</button>
      </div>
    </div>
  );
};

export default SetNewPassword;
