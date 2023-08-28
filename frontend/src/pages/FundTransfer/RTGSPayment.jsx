import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AccountService from '../../services/AccountService';
import '../style/RTGS.css';
import BeneficiaryDropdown from './BeneficiaryDropdown';


function RTGSPayment() {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [errors, setErrors] = useState({});
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

  const [responseError, setReponseError] = useState('');
  const [responseSuccess, setResponseSuccess] = useState('');

  useEffect(() => {

    AccountService.viewBeneficiaries().then((response) => {
      console.log(response.data);
      setBeneficiaries(response.data);
    })
      .catch((error) => {
        console.log("Error fetching beneficiaries");
      });


  }, []);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.toAccount) {
      newErrors.toAccount = '*To Account is required';
      isValid = false;
    }

    if (!formData.transactionAmount) {
      newErrors.transactionAmount = '*Amount is required';
      isValid = false;
    }

    if (!formData.transactionDesc) {
      newErrors.transactionDesc = '*Please add transaction Descreption';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
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
        setResponseSuccess("Transfer Successfull!")
        setReponseError('');
      })
        .catch((error) => {
          if (error.response.data.status === 500 && error.response.data.message === "Insufficient Balance") {
            setReponseError(error.response.data.message);
            setResponseSuccess('')
          }
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
            {errors.toAccount && (
              <div className="error">{errors.toAccount}</div>
            )}
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
          {errors.transactionAmount && (
            <div className="error">{errors.transactionAmount}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="transactionDesc">Transaction Desc:</label>
          <input
            type="text"
            id="transactionDesc"
            name="transactionDesc"
            value={formData.transactionDesc}
            onChange={e => handleInputChange('transactionDesc', e.target.value)} />
          {errors.transactionDesc && (
            <div className="error">{errors.transactionDesc}</div>
          )}
        </div>
        <div className="form-group">
          {/* <button type="submit">Continue</button> */}
          <button type="button" className="button save-button" onClick={handleSaveClick}>Transfer</button>
          {responseSuccess && <div className="success-message">{responseSuccess}</div>}
          {responseError && <div className="error-message">{responseError}</div>}
        </div>
      </form>
    </div>
  );
}

export default RTGSPayment;
