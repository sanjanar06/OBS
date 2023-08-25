import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AccountService from '../../services/AccountService';
import '../style/IMPSPayment.css'; // You can import your CSS file here for styling
import BeneficiaryDropdown from './BeneficiaryDropdown';

function IMPSPayment() {

  const [beneficiaries, setBeneficiaries] = useState([]);
  const [errors, setErrors] = useState({});
  const [account, setAccount] = useState({});
  const [formData, setFormData] = useState({
    toAccount: '',
    transactionAmount: '',
    transactionDesc: '',
    transactionType: 'IMPS',
  });

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
    <div>
      <h1>Initiate IMPS Payment</h1>
      <form className="imps-form">
        <div className="form-group">
          <label>To Account:</label>
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
          <label>Amount:</label>
          <input
            type="text"
            id="transactionAmount"
            name="transactionAmount"
            required
            value={formData.transactionAmount}
            onChange={e => {
              handleInputChange('transactionAmount', e.target.value)
              setErrors({ ...errors, transactionAmount: '' });
            }
            }
          />
        </div>
        {errors.transactionAmount && (
            <div className="error">{errors.transactionAmount}</div>
          )}

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
        {errors.transactionDesc && (
            <div className="error">{errors.transactionDesc}</div>
          )}
         <div className="form-group">
          {/* <button type="submit">Continue</button> */}
          <button type="button" className="button save-button" onClick={handleSaveClick}>Transfer</button>
          {/* <button type="button" onClick={handleReset}>
            Reset
          </button>
          <button type="button">Save as Template</button> */}
        </div>
      </form>
    </div>
  );
}

export default IMPSPayment;
