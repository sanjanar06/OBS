import React from 'react'
import { useState } from 'react';
import AccountService from '../services/AccountService'


const AccountCreation = () => {
  const [state, setState] = useState({
    firstName:'',
    middleName:'',
    lastName:'',
    emailID:'',
    fatherName:'',
    motherName:'',
    adhaarNo:'',
    dob:'',
    address:'',
    occupationType:'',
    grossAnnualIncome:'',
  });

  const [checkboxStatus, setCheckboxStatus] = useState(false);

  const handleCheckboxChange = (event) => {
    setCheckboxStatus(event.target.checked);
  };

  const handleInputChange = (event) =>{
    setState((prevProps) => ({
        ...prevProps,
        [event.target.name]: event.target.value
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    state['netbanking'] = checkboxStatus

    AccountService.sendAccount(state).then((res) =>{
        console.log('Request Sent for Approval')
    })
    .catch((error) =>{
        console.log("Error in sendind request");
    });
  }

  return (
    <div>
        
        <form onSubmit={handleSubmit}>
            
                <label>firstName:</label>
                <input 
                    type="text"
                    name="firstName"
                    value={state.firstName}
                    onChange={handleInputChange}
                     />
                <label>middleName:</label>
                <input 
                    type="text"
                    name="middleName"
                    value={state.middleName}
                    onChange={handleInputChange}
                     />
            <   label>lastName:</label>
                <input 
                    type="text"
                    name="lastName"
                    value={state.lastName}
                    onChange={handleInputChange}
                     />

            <   label>EmailID:</label>
                <input 
                    type="email"
                    name="emailID"
                    value={state.emailID}
                    onChange={handleInputChange}
                     />
            
            <   label>Father's Name:</label>
                <input 
                    type="text"
                    name="fatherName"
                    value={state.fatherName}
                    onChange={handleInputChange}
                     />
            
            <   label>Mother's Name:</label>
                <input 
                    type="text"
                    name="motherName"
                    value={state.motherName}
                    onChange={handleInputChange}
                     />

            <   label>Adhaar Number:</label>
                <input 
                    type="text"
                    name="adhaarNo"
                    value={state.adhaarNo}
                    onChange={handleInputChange}
                     />

            <   label>Date of Birth:</label>
                <input 
                    type="date"
                    name="dob"
                    value={state.dob}
                    onChange={handleInputChange}
                     />   
            <   label>Address:</label>
                <input 
                    type="text"
                    name="address"
                    value={state.address}
                    onChange={handleInputChange}
                     />    
            <   label>Occupation Type:</label>
                <input 
                    type="text"
                    name="occupationType"
                    value={state.occupationType}
                    onChange={handleInputChange}
                     />  
            <   label>Gross Anual Income:</label>
                <input 
                    type="text"
                    name="grossAnnualIncome"
                    value={state.grossAnnualIncome}
                    onChange={handleInputChange}
                    /> 
            
            <label>
            Do you need a Netbanking account:
            <input
                type="checkbox"
                checked={checkboxStatus}
                onChange={handleCheckboxChange}
            />
            </label>

            <div>
                <button type="submit">Register</button>
            </div>
        </form>
    </div>
  )
}

export default AccountCreation;