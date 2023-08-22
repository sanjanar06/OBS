import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AccountService from '../../services/AccountService';
import '../style/RTGS.css';


function RTGSPayment() {
  const [formData, setFormData] = useState({
    toAccount: '',
    transactionAmount: '',
    transactionDesc: '',
    transactionType: 'RTGS',
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



  return (
    <div className="RTGSPayment">
      {/* <Sidebar></Sidebar> */}

      <h2>Initiate RTGS Payment</h2>
      <form>
        <div className="form-group">
          <label htmlFor="toAccount">To Account:</label>
          <input
            type="text"
            id="toAccount"
            name="toAccount"
            value={formData.toAccount}
            onChange={e => handleInputChange('toAccount', e.target.value)} />
          <Link to="/addbeneficiary">
            <button type="button" className="add-new-button">
              Add New +
            </button>
          </Link>
        </div>
        <div className="form-group">
          <label htmlFor="transactionAmount">Amount:</label>
          <input
            type="text"
            id="transactionAmount"
            name="transactionAmount"
            value={formData.transactionAmount}
            onChange={e => handleInputChange('transactionAmount', e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="transactionDesc">Transaction Desc:</label>
          <input
            type="text"
            id="transactionDesc"
            name="transactionDesc"
            value={formData.transactionDesc}
            onChange={e => handleInputChange('transactionDesc', e.target.value)} />
        </div>
        <div className="button-container">
          <button type="button" className="button save-button" onClick={handleSaveClick}>
            Save
          </button>
          {/* <span className="button-space"></span>
          <button type="button" className="button reset-button">
            Reset
          </button>
          <span className="button-space"></span>
          <button type="button" className="button save-template-button">
            Save as Template
          </button>
          <span className="button-space"></span>
          <button type="button" className="button continue-button">
            Continue
          </button> */}
        </div>
      </form>
    </div>
  );
}

export default RTGSPayment;
