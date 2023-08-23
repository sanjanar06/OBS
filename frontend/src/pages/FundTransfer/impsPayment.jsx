import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AccountService from '../../services/AccountService';
import '../style/IMPSPayment.css'; // You can import your CSS file here for styling

function IMPSPayment() {
  const [formData, setFormData] = useState({
    toAccount: '',
    transactionAmount: '',
    transactionDesc: '',
    transactionType: 'IMPS',
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSaveClick = async (event) => {
    event.preventDefault();
    AccountService.createTransaction(formData).then((res) => {
      console.log("Fund transfer successful");

    })
      .catch((error) => {
        console.log("Fund transfer failed!!");
      });
  }


  const handleReset = () => {
    setFormData({
      fromAccount: '',
      toAccount: '',
      amount: '',
      date: '',
      maturityInstruction: '',
      remarks: '',
    });
  };

  return (
    <div>
      <h1>Initiate IMPS Payment</h1>
      <form className="imps-form">
        <div className="form-group">
          <label>To Account:</label>
          <input
            type="text"
            name="toAccount"
            required
            value={formData.toAccount}
            onChange={e => handleInputChange('toAccount', e.target.value)}
          />
          <Link to="/addbeneficiary">
            <button type="button" className="add-new-button">
              Add New +
            </button>
          </Link>
        </div>

        <div className="form-group">
          <label>Amount:</label>
          <input
            type="text"
            id="transactionAmount"
            name="transactionAmount"
            required
            value={formData.transactionAmount}
            onChange={e => handleInputChange('transactionAmount', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Transaction Desc:</label>
          <input
            type="text"
            id="transactionDesc"
            name="transactionDesc"
            required
            value={formData.transactionDesc}
            onChange={e => handleInputChange('transactionDesc', e.target.value)}
          />
        </div>
        <div className="form-group">
          <div className="buttons">
            {/* <button type="submit">Continue</button> */}
            {/* <button type="button" onClick={handleReset}>
              Reset
            </button> */}
            <button type="button" onClick={handleSaveClick}>Save</button>
            {/* <button type="button">Save as Template</button> */}
          </div>
        </div>
      </form>
    </div>
  );
}

export default IMPSPayment;
