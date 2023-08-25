import React, { useState } from 'react';
import '../style/ChangePassword.css'; // You can import your CSS file here for styling
import { validate } from 'json-schema';

function ChangePassword() {
  const [passwords, setPasswords] = useState({
    loginPassword: '',
    confirmLoginPassword: '',
    transactionPassword: '',
    confirmTransactionPassword: '',
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!passwords.loginPassword) {
      newErrors.loginPassword = '*Password is required';
      isValid = false;
    }

    if (!passwords.transactionPassword) {
      newErrors.transactionPassword = '*Transaction password is required';
      isValid = false; 
    }

    if (passwords.loginPassword!=passwords.confirmLoginPassword) {
      newErrors.confirmLoginPassword = '*login password not matched';
      isValid = false;
    }
    if(passwords.transactionPassword!=passwords.confirmTransactionPassword){
      newErrors.transactionPassword = '*transaction password not matched';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPasswords({
      ...passwords,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can perform any actions with the form data, such as updating passwords.
    if(validate())
    console.log(passwords);
  };

  return (
    <div>
      <h1>Set New Password</h1>
      <form className="password-form" onSubmit={handleSubmit}>
        <label>Login Password:</label>
        <input
          type="password"
          name="loginPassword"
          required
          value={passwords.loginPassword}
          onChange={e => {handleInputChange
            setErrors({ ...errors, loginPassword: '' });
          }}
        />
        {errors.loginPassword && (
          <div className="error">{errors.loginPassword}</div>
           )}

        <label>Confirm Login Password:</label>
        <input
          type="password"
          name="confirmLoginPassword"
          required
          value={passwords.confirmLoginPassword}
          onChange={e => {handleInputChange
            setErrors({ ...errors, loginPassword: '' });
          }}
        />
        {errors.loginPassword && (
          <div className="error">{errors.loginPassword}</div>
           )}

        <label>Transaction Password:</label>
        <input
          type="password"
          name="transactionPassword"
          required
          value={passwords.transactionPassword}
          onChange={e => {handleInputChange
            setErrors({ ...errors, transactionPassword: '' });
          }}
        />
        {errors.transactionPassword && (
          <div className="error">{errors.transactionPassword}</div>
           )}
        <label>Confirm Transaction Password:</label>
        <input
          type="password"
          name="confirmTransactionPassword"
          required
          value={passwords.confirmTransactionPassword}
          onChange={e => {handleInputChange
            setErrors({ ...errors, transactionPassword: '' });
          }}
        />
        {errors.transactionPassword && (
          <div className="error">{errors.transactionPassword}</div>
           )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ChangePassword;
