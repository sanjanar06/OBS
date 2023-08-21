import React, { useState } from 'react';
import '../style/NeftPayment.css'; // You can import your CSS file here for styling
import { Link } from 'react-router-dom';
import axios from 'axios';
import { sendRequestNeft } from "../../services/FundTransfer";

function NeftPayment() {
  const [formData, setFormData] = useState({
    fromAccount: '',
    toAccount: '',
    amount: '',
    date: '',
    maturityInstruction: '',
    remarks: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSaveClick = async() => {
   
     // try {
    //   const response = await axios.post('http://localhost:3001/neft', formData);
    //   console.log('NEFT Payment saved:', response.data);
    //   alert("Data has been saved succesfully");
      
    // } catch (error) {
      // console.error('Error saving transaction:', error);
      
    // }
   sendRequestNeft(formData).then((res) =>{
      console.log('NEFT transaction data saved');
      console.log(res.data);
  })
  .catch((error) =>{
      console.log("Error in sending request");
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
          <label>From Account:</label>
          <input
            type="text"
            name="fromAccount"
            required
            value={formData.fromAccount}
            onChange={e => handleInputChange('fromAccount', e.target.value)}
          />
        </div>

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
            name="amount"
            required
            value={formData.amount}
            onChange={e => handleInputChange('amount', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label> Date:</label>
          <input
            type="date"
            name="date"
            required
            value={formData.transactionDate}
            onChange={e => handleInputChange('date', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Maturity Instruction:</label>
          <input
            type="text"
            name="maturityInstruction"
            required
            value={formData.maturityInstruction}
            onChange={e => handleInputChange('maturityInstruction', e.target.value)} 
          />
        </div>

        <div className="form-group">
          <label>Remarks:</label>
          <input
            type="text"
            name="remarks"
            value={formData.remarks}
            onChange={e => handleInputChange('remarks', e.target.value)}
          />
        </div>

        <div className="form-group">
          <p>
             *Transaction will be executed on the next working day if they are
            scheduled for Sundays, National Holidays, NEFT Holidays (as declared by RBI)
          </p>
        </div>

        <div className="form-group">
          <button type="submit">Continue</button>
          <button type="button" onClick={handleSaveClick}>Save</button>
          <button type="button" onClick={handleReset}>
              Reset
            </button>
          <button type="button">Save as Template</button>
        </div>
      </form>
    </div>
  );
}

export default NeftPayment;
