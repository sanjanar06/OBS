import '../style/AccountCreation.css';

import { useState } from 'react';
import AccountService from '../../services/AccountService'
import { useForm } from "react-hook-form";
import { Form, Button } from 'semantic-ui-react';

const AccountCreation = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [checkboxStatus, setCheckboxStatus] = useState(false);

  const handleCheckboxChange = (event) => {
    setCheckboxStatus(event.target.checked);
  };


  const onSubmit = (data) => {
    data['netbanking'] = checkboxStatus
    console.log(data)
    AccountService.openAccount(data).then((res) =>{
        console.log('Request Sent for Approval')
    })
    .catch((error) =>{
        console.log("Error in sending request");
    });
  }

  return (
    
    <div className='form'>        
        <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2>Open a Savings Account</h2>
            <Form.Field>
                <label>Title</label>
                <input type = "text" 
                    {...register("title", { required: true })} 
                />
                <label>First Name</label>
                <input type = "text" 
                    {...register("firstName", { required: true })} 
                />
                {errors.firstName && <p className="text-error" >Enter First Name</p>}

                <label>Middle Name:</label>
                <input type = "text" 
                    {...register("middleName")} 
                />                
            
                <label>Last Name:</label>
                <input type = "text" 
                    {...register("lastName", { required: true })} 
                />
                {errors.lastName && <p className="text-error" >Enter Last Name</p>}
            </Form.Field>
            <Form.Field>
                <label>EmailID:</label>
                <input type = "email"
                    {...register("emailID", { 
                        required: true, 
                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/  
                    })} 
                />
                {errors.emailID && <p className="text-error" >Enter Valid Email</p>}
            </Form.Field>
            <Form.Field>
                <label>Father's Name:</label>
                <input 
                    type="text"
                    {...register("fatherName", {required: true})}/>

                {errors.fatherName && <p className="text-error" >Enter Father's Name</p>}

                <label>Mother's Name:</label>
                <input 
                    type="text"
                    {...register("motherName", {required: true})}
                />
                {errors.motherName && <p className="text-error" >Enter Mother's Name</p>}

            </Form.Field>
                
            <Form.Field>
            <label>Aadhar Number:</label>
                <input 
                    type="text"
                    {...register("aadharNo", {required: "Enter a valid Adhaar Number", pattern: /^\d{12}$/})}
                />
            {errors.adhaar && <p className="text-error">Enter valid Adhaar Number</p>}
            </Form.Field>
            
            <Form.Field>
                <label>Date of Birth:</label>
                    <input 
                        type="date"
                        {...register("dob", {required: true})}
                    />
                {errors.adhaar && <p className="text-error">Enter DOB</p>}
            </Form.Field>
            
            <Form.Field>
                <label>Address:</label>
                    <input 
                        type="text"
                        {...register("address", {required : true})}
                        />  
                {errors.adhaar && <p className="text-error">Enter Address</p>} 
            </Form.Field>
            
            <Form.Field>
                <label>Occupation Type:</label>
                    <input 
                        type="text"
                        {...register("occupationType", {required : true})}
                        />  
                {errors.occupation && <p className="text-error">Enter Occupation Type</p>}

            <label>Gross Annual Income:</label>
                <input 
                    type="text"
                    {...register("grossAnnualIncome", {required : true})}
                /> 
            {errors.adhaar && <p className="text-error">Enter Income</p>}
            </Form.Field>
            

            {/* <label>
                Do you need a Netbanking account:
                <input
                    type="checkbox"
                    checked={checkboxStatus}
                    onChange={handleCheckboxChange}
                />
            </label> */}

            <div>
                <Button type="submit">Register</Button>
            </div>
        </Form>
    </div>
  )
}

export default AccountCreation;