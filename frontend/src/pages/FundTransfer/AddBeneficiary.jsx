import React from 'react';
import '../style/AddBeneficiary.css'; // Import your custom CSS file for styling

function AddBeneficiary() {
  return (
    <div className="AddBeneficiary">
      <h2>Add New Beneficiary</h2>
      <form>
        <div className="form-group">
          <label htmlFor="beneficiaryName">Beneficiary Name:</label>
          <input type="text" id="beneficiaryName" name="beneficiaryName" />
        </div>
        <div className="form-group">
          <label htmlFor="accountNumber">Beneficiary Account Number:</label>
          <input type="text" id="accountNumber" name="accountNumber" />
        </div>
        <div className="form-group">
          <label htmlFor="reenteredAccountNumber">Re-enter Account Number:</label>
          <input type="text" id="reenteredAccountNumber" name="reenteredAccountNumber" />
        </div>
        <div className="form-group">
          <label htmlFor="nickName">Nick Name:</label>
          <input type="text" id="nickName" name="nickName" />
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox" />
            Save Beneficiary
          </label>
        </div>
        <div className="button-container">
          <button type="button" className="button proceed-button">Proceed</button>
        </div>
      </form>
    </div>
  );
}

export default AddBeneficiary;
