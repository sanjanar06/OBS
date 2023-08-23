import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AccountService from '../../services/AccountService';
import '../style/NeftPayment.css'; // You can import your CSS file here for styling
import BeneficiaryDropdown from './BeneficiaryDropdown';
function NEFTPayment() {
  const [beneficiaries, setBeneficiaries] = useState([]);

  useEffect(() => {
    async function fetchBeneficiaries() {
      const data = await AccountService.viewBeneficiaries();
      setBeneficiaries(data);
    }
    fetchBeneficiaries();
  }, []);

  
  const [formData, setFormData] = useState({
    toAccount: '',
    transactionAmount: '',
    transactionDesc: '',
    transactionType: 'NEFT',
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleBeneficiarySelect = (event) => {
    const selectedBeneficiaryId = event.target.value;
    setFormData({
      ...formData,
      toAccount: selectedBeneficiaryId,
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
      <h1>Initiate NEFT Payment</h1>
      <form className="neft-form">
        <div className="form-group">
          <label>To Account:</label>
          <BeneficiaryDropdown
            beneficiaries={beneficiaries}
            onSelect={handleBeneficiarySelect}
          />
          {/* <input
            type="text"
            name="toAccount"
            required
            value={formData.toAccount}
            onChange={e => handleInputChange('toAccount', e.target.value)}
          /> */}
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
            required
            value={formData.transactionAmount}
            onChange={e => handleInputChange('transactionAmount', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label> Transaction Desc:</label>
          <input
            type="text"
            id="transactionDesc"
            name="transactionDesc"
            required
            value={formData.transactionDesc}
            onChange={e => handleInputChange('transactionDesc', e.target.value)}
          />
        </div>
        {/* <div className="form-group">
          <p>
            *Transaction will be executed on the next working day if they are
            scheduled for Sundays, National Holidays, NEFT Holidays (as declared by RBI)
          </p>
        </div> */}

        <div className="form-group">
          {/* <button type="submit">Continue</button> */}
          <button type="button" className="button save-button" onClick={handleSaveClick}>Save</button>
          {/* <button type="button" onClick={handleReset}>
            Reset
          </button>
          <button type="button">Save as Template</button> */}
        </div>
      </form>
    </div>
  );
}

export default NEFTPayment;
