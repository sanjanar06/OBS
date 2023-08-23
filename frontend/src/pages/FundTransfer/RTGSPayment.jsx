import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AccountService from '../../services/AccountService';
import '../style/RTGS.css';
import BeneficiaryDropdown  from './BeneficiaryDropdown';

function RTGSPayment() {
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
    transactionType: 'RTGS',
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
    AccountService.viewBeneficiary(formData).then((res) => {

      AccountService.createTransaction(formData).then((res) => {
        console.log("Fund transfer successful");

      })
        .catch((error) => {
          console.log("Fund transfer failed!!");
        });
    })
      .catch(() => {
        console.log("Beneficiary entered doesnt exist");
      });


  }



  return (
    <div className="RTGSPayment">
      {/* <Sidebar></Sidebar> */}

      <h2>Initiate RTGS Payment</h2>
      <form>
        <div className="form-group">
        <label>
            To Account:
            <BeneficiaryDropdown
              beneficiaries={beneficiaries}
              onSelect={handleBeneficiarySelect}
            />
          </label>
          {/* <input
            type="text"
            id="toAccount"
            name="toAccount"
            value={formData.toAccount}
            onChange={e => handleInputChange('toAccount', e.target.value)} /> */}
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
