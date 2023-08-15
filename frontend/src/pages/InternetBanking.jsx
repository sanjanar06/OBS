import React from 'react'
import { useState } from 'react';
import InternetBankingService from '../services/InternetBanking'



const InternetBanking = () => {
  const [state, setState] = useState({
    accountNum : '',
    loginPassword : '',
    confirmLoginPassword : '',
    transactionPass : '',
    confirmTransactionPass : '',
  });

  const [otp, setOTP] = useState({
    otp : ''
  });


  const handleInputChange = (event) =>{
    setState((prevProps) => ({
        ...prevProps,
        [event.target.name]: event.target.value
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    InternetBankingService.sendRequest(state).then((res) =>{
        console.log('Your netbanking account details will be sent shortly.')
    })
    .catch((error) =>{
        console.log("Error in sending request");
    });
  }

  return (
    <div>
        
        <form onSubmit={handleSubmit}>
            
                <label>Account Number:</label>
                <input 
                    type="text"
                    name="accountNum"
                    value={state.accountNum}
                    onChange={handleInputChange}
                     />
                <label>Login Password:</label>
                <input 
                    type="password"
                    name="loginPassword"
                    value={state.loginPassword}
                    onChange={handleInputChange}
                     />
            <   label>Confirm Login Password:</label>
                <input 
                    type="password"
                    name="confirmLoginPassword"
                    value={state.confirmLoginPassword}
                    onChange={handleInputChange}
                     />

            <   label>Transaction Password:</label>
                <input 
                    type="password"
                    name="transactionPass"
                    value={state.transactionPass}
                    onChange={handleInputChange}
                     />
            
            <   label>Confirm Transaction Password:</label>
                <input 
                    type="password"
                    name="confirmTransactionPass"
                    value={state.confirmTransactionPass}
                    onChange={handleInputChange}
                     />
            
            <div>
                <button type="submit">Register</button>
            </div>
        </form>
    </div>
  )
}

export default InternetBanking;