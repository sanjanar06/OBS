import "./AccountCreation.css"
import React from 'react'
import { useState } from 'react';
import InternetBankingService from '../../services/InternetBanking'
import { useForm } from "react-hook-form";


const InternetBanking = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const [otp, setOTP] = useState('')

  const onSubmit = (data) => {

    InternetBankingService.sendRequest(data).then((res) =>{
        console.log('Your netbanking account details will be sent shortly.')
    })
    .catch((error) =>{
        console.log("Error in sending request");
    });
  }

  return (
    <div className = "form-box">
        <h1>Register for a Netbanking Account</h1>
        
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            
                <label>Account Number:</label>
                <input 
                    type="text"
                    {...register("accountNum", { required: true })} 
                     />
                <label>Login Password:</label>
                <input 
                    type="password"
                    {...register("password", { required: true })} 
                     />
            <   label>Confirm Login Password:</label>
                <input 
                    type="password"
                    {...register("firstName", { required: true })} 
                     />

            <   label>Transaction Password:</label>
                <input 
                    type="password"
                    
                     />
            
            <   label>Confirm Transaction Password:</label>
                <input 
                    type="password"
                    
                     />
            
            <div>
                <button type="submit">Register</button>
            </div>
        </form>
    </div>
  )
}

export default InternetBanking;