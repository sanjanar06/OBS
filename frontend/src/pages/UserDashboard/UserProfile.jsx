import React, { useEffect, useState } from 'react';
import UserService from '../../services/UserService';
import '../style/UserProfile.css';

function UserProfile() {
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [emailID, setEmailID] = useState("");
  const [fatherName, setFatherName] = useState();
  const [motherName, setMotherName] = useState();
  const [aadhaarNo, setAadhaarNo] = useState("");
  const [address, setAddress] = useState("");
  const [occupationType, setOccupationType] = useState("");
  const [grossAnnualIncome, setGrossAnnualIncome] = useState("");

  useEffect(() => {

    UserService.viewProfile().then(response => {

      console.log(response.data);
      setTitle(response.data.title);
      setFirstName(response.data.firstName);
      setMiddleName(response.data.middleName);
      setLastName(response.data.lastName);
      setEmailID(response.data.emailID);
      setFatherName(response.data.fatherName);
      setMotherName(response.data.motherName);
      setAadhaarNo(response.data.aadhaarNo);
      setDob(response.data.dob);
      setAddress(response.data.address);
      setOccupationType(response.data.occupationType);
      setGrossAnnualIncome(response.data.grossAnnualIncome);


    })
      .catch(error => {
        console.error('Error fetching user profile data:', error);
      });
  }, []);



  return (
    <div className="user-profile">
      <h1>PROFILE</h1>
      <form className="profile-form">

        <div className="input-group">
          <label>Title : </label>
          <span>{title}</span>
        </div>

        <div className="input-group">
          <label>First Name : </label>
          <span>{firstName}</span>
        </div>

        <div className="input-group">
          <label>Middle Name : </label>
          <span>{middleName}</span>
        </div>

        <div className="input-group">
          <label>Last Name : </label>
          <span>{lastName}</span>
        </div>

        <div className="input-group">
          <label>EmailID : </label>
          <span>{emailID}</span>
        </div>

        <div className="input-group">
          <label>Father Name : </label>
          <span>{fatherName}</span>
        </div>

        <div className="input-group">
          <label>Mother Name :</label>
          <span>{motherName}</span>
        </div>

        <div className="input-group">
          <label>Aadhaar No : </label>
          <span>{aadhaarNo}</span>
        </div>

        <div className="input-group">
          <label>DOB : </label>
          <span>{dob}</span>
        </div>

        <div className="input-group">
          <label>Address : </label>
          <span>{address}</span>
        </div>

        <div className="input-group">
          <label>Occupation Type : </label>
          <span>{occupationType}</span>
        </div>

        <div className="input-group">
          <label>Gross Annual Income : </label>
          <span>{grossAnnualIncome}</span>
        </div>

      </form>
    </div>
  );
}

export default UserProfile;
