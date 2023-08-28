import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import UserService from "../../services/UserService";
import "../style/AccountCreation.css";


const InternetBanking = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const loginPassword = watch('loginPassword')
    const transactionPassword = watch('transactionPassword')

    const [responseError, setResponseError] = useState('');

    const onSubmit = (data) => {

        UserService.registerUser(data).then((res) => {
            console.log('Your netbanking account details will be sent shortly.')
            navigate("/login");
        })
            .catch((error) => {
                if (error.response.data.status === 500){
                    setResponseError(error.response.data.message);
                  }
            });

    }

    return (
        <div className="form-box">
            <h1>Register for a Netbanking Account</h1>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>

                <label>Account Number:</label>
                <input
                    type="text"
                    {...register("accountNumber", { required: true })}
                />
                <label>Login Password:</label>
                <input
                    type="password"
                    name="loginPassword"
                    {...register("loginPassword", { required: true })}
                />
                <label>Confirm Login Password:</label>
                <input
                    type="password"
                    name="confirmloginPassword"
                    {...register("confirmloginPassword", { required: true, validate: (value) => value === loginPassword || 'Login Passwords do not match', })}
                />
                {errors.confirmloginPassword && (
                    <p style={{ color: 'red' }}>{errors.confirmloginPassword.message}</p>)}

                <   label>Transaction Password:</label>
                <input
                    type="password"
                    name="transactionPassword"
                    {...register("transactionPassword", { required: true })}
                />

                <   label>Confirm Transaction Password:</label>
                <input
                    type="password"
                    name="confirmtransactionPassword"
                    {...register("confirmtransactionPassword", { required: true, validate: (value) => value === transactionPassword || 'Transaction Passwords do not match', })}


                />
                {errors.confirmtransactionPassword && (
                    <p style={{ color: 'red' }}>{errors.confirmtransactionPassword.message}</p>)}

                <div>
                    <button type="submit">Register</button>
                </div>

                {responseError && <div className="error-message">{responseError}</div>}
            </form>
        </div>
    )
}

export default InternetBanking;

