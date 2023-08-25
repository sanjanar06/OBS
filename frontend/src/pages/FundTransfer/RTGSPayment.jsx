import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AccountService from '../../services/AccountService';
import '../style/RTGS.css';
import BeneficiaryDropdown from './BeneficiaryDropdown';


function RTGSPayment() {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [errors, setErrors] = useState({});
  const [account, setAccount] = useState({});
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

  useEffect(() => {

    AccountService.viewBeneficiaries().then((response) => {
      console.log(response.data);
      setBeneficiaries(response.data);
    })
      .catch((error) => {
        console.log("Error fetching beneficiaries");
      });

    AccountService.viewAccount().then((response) => {
      console.log(response.data);
      setAccount(response.data);
    })
      .catch((error) => {
        console.log("Error fetching account details");
      });

  }, []);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.transactionAmount) {
      newErrors.transactionAmount = '*Amount is required';
      console.log("Amount required");
      isValid = false;
    }

    if (formData.transactionAmount < account.balance) {
      newErrors.transactionAmount = '*Account have insufficent balance';
      console.log("Insufficient");

      isValid = false;
    }
    if (formData.transactionAmount >= 10000) {
      newErrors.transactionAmount = '*Entered amount exceeds the limits';
      isValid = false;
      console.log("Exceeds");

    }

    setErrors(newErrors);
    return true;
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
    if (validateForm()) {

      AccountService.createTransaction(formData).then((res) => {
        alert("Fund transfer successful");

      })
        .catch((error) => {
          console.log("Fund transfer failed!!");
        });
    }

  }



  return (
    <div className="RTGSPayment">
      <h2>Initiate RTGS Payment</h2>
      <form>
        <div className="form-group">
          <label>
            To Account:
            <BeneficiaryDropdown
              beneficiaries={beneficiaries}
              onSelect={e => {
                handleBeneficiarySelect(e);
                setErrors({ ...errors, toAccount: '' });
              }}
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
            onChange={e => {
              handleInputChange('transactionAmount', e.target.value)
              setErrors({ ...errors, transactionAmount: '' });
            }} />
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
