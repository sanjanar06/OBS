import "./AccountCreation.css"
import React from 'react'
import { useState } from 'react';
import InternetBankingService from '../../services/InternetBanking'
import { useForm } from "react-hook-form";


const InternetBanking = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const loginPassword = watch('loginPassword')
  const transactionPassword = watch('transactionPassword')

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
                    name = "loginPassword"
                    {...register("loginPassword", { required: true })} 
                     />
                <label>Confirm Login Password:</label>
                <input 
                    type="password"
                    name = "confirmloginPassword"
                    {...register("confirmloginPassword", { required: true , validate: (value) => value === loginPassword || 'Login Passwords do not match', })} 
                     />
                {errors.confirmloginPassword && (
            <p style={{ color: 'red' }}>{errors.confirmloginPassword.message}</p>)}

            <   label>Transaction Password:</label>
                <input 
                    type="password"
                    name = "transactionPassword"
                    {...register("transactionPassword", { required: true })} 
                     />
            
            <   label>Confirm Transaction Password:</label>
                <input 
                    type="password"
                    name = "confirmtransactionPassword"
                    {...register("confirmtransactionPassword", { required: true , validate: (value) => value === transactionPassword || 'Transaction Passwords do not match', })} 
            
                    
                     />
                {errors.confirmtransactionPassword && (
            <p style={{ color: 'red' }}>{errors.confirmtransactionPassword.message}</p>)}
            
            <div>
                <button type="submit">Register</button>
            </div>
        </form>
    </div>
  )
}

export default InternetBanking;

