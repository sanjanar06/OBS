import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/RTGS.css';
import axios from 'axios';


function RTGSPayment() {
  const [formData, setFormData] = useState({
    fromAccount: '',
    toAccount: '',
    amount: '',
    transactionDate: '',
    maturityInstruction: '',
    remark: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSaveClick = async() => {
    try {
      const response = await axios.post('http://localhost:3001/rtgs', formData);
      console.log('RTGS Payment saved:', response.data);
      alert("Data has been saved succesfully");
      
    } catch (error) {
      console.error('Error saving transaction:', error);
      
    }
  }



  return (
    <div className="RTGSPayment">
      {/* <Sidebar></Sidebar> */}

      <h2>Initiate RTGS Payment</h2>
      <form>
        <div className="form-group">
          <label htmlFor="fromAccount">From Account:</label>
          <input
            type="text"
            id="fromAccount"
            name="fromAccount"
            value={formData.fromAccount}
            onChange={e => handleInputChange('fromAccount', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="toAccount">To Account:</label>
          <input
            type="text"
            id="toAccount"
            name="toAccount"
            value={formData.toAccount}
            onChange={e => handleInputChange('toAccount', e.target.value)}          />
          <Link to="/addbeneficiary">
            <button type="button" className="add-new-button">
              Add New +
            </button>
          </Link>
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="text"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={e => handleInputChange('amount', e.target.value)}          />
        </div>
        <div className="form-group">
          <label htmlFor="transactionDate">Transaction Date:</label>
          <input
            type="date"
            id="transactionDate"
            name="transactionDate"
            value={formData.transactionDate}
            onChange={e => handleInputChange('transactionDate', e.target.value)}          />
        </div>
        <div className="form-group">
          <label htmlFor="maturityInstruction">Maturity Instruction:</label>
          <input
            type="text"
            id="maturityInstruction"
            name="maturityInstruction"
            value={formData.maturityInstruction}
            onChange={e => handleInputChange('maturityInstruction', e.target.value)}          />
        </div>
        <div className="form-group">
          <label htmlFor="remark">Remark:</label>
          <input
            type="text"
            id="remark"
            name="remark"
            value={formData.remark}
            onChange={e => handleInputChange('remark', e.target.value)}          />
        </div>
        <div className="button-container">
          <button type="button" className="button save-button" onClick={handleSaveClick}>
            Save
          </button>
          <span className="button-space"></span>
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
          </button>
        </div>
      </form>
    </div>
  );
}

export default RTGSPayment;
