import { useState } from 'react';

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


  const handleInputChange= (event) =>{
    setState((prevProps) => ({
        ...prevProps,
        [event.target.name]: event.target.value
    }));
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
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
                    name="email"email
                    value={state.lastName}
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
                    name="adhaar"
                    value={state.adhaarNo}
                    onChange={handleInputChange}
                     />

            <   label>Date of Birth:</label>
                <input 
                    type="tedatext"
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
                    name="occupation"
                    value={state.occupationType}
                    onChange={handleInputChange}
                     />  
            <   label>Gross Anual Income:</label>
                <input 
                    type="text"
                    name="income"
                    value={state.grossAnnualIncome}
                    onChange={handleInputChange}
                    /> 
                    










            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    </div>
  )
}

export default AccountCreation;