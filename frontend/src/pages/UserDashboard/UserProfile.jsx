import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/UserProfile.css';
import { getUserProfile } from "../../services/UserDetails";

const API_BASE_URL = "http://localhost:3001";
function UserProfile() {
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    
    getUserProfile().then((response) =>{
      console.log(response.data);
      setProfileData(response.data);
  })
  .catch((error) =>{
      console.log("Error fetching User Profile");
  });
  }, []);

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [accNumber, setaccNumber] = useState("");
  const [dob, setDob] = useState("");
  const [email,setEmail] = useState("");
  const [mobileNumber,setMobileNumber] = useState("") ;
  const [fathername,setFathername] = useState();
  const [adhar,setAdhar] = useState("");
  const [pan,setPan] = useState("");
  const [address,setAddress] = useState("");
  // const [editing, setEditing] = useState(false);
  // const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    // Fetch data using axios or any other HTTP library
    axios.get(API_BASE_URL+'/userprofile')
      .then(response => {
        const userData = response.data; // Assuming the structure of data
        // setProfileData(userData);
        console.log(userData[0])
        setName(userData[0].name);
        setaccNumber(userData[0].acccountNumber);
        setDob(userData[0].dob);
        setEmail(userData[0].email);
        setMobileNumber(userData[0].mobileNumber);
        setFathername(userData[0].fatherName);
        setAdhar(userData[0].adharNumber);
        setPan(userData[0].panNumber);
        setAddress(userData[0].address);
      })
      .catch(error => {
        console.error('Error fetching user profile data:', error);
      });
  }, []);


  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
  };

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setProfileData({
  //     ...profileData,
  //     [name]: value,
  //   });
  // };

  return (
    <div className="user-profile">
      <h1>Profile</h1>
      <form className="profile-form">
        <div className="input-group">
          <label>Name:</label>
          {/* {editing ? (
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : ( */}
            <span>{name}</span>
          {/* )} */}
        </div>

        <div className="input-group">
          <label>DOB:</label>
          <span>{dob}</span>
        </div>

        <div className="input-group">
          <label>Email ID:</label>
          <span>{email}</span>
        </div>

        <div className="input-group">
          <label>Mobile Number:</label>
          <span>{mobileNumber}</span>
        </div>

        <div className="input-group">
          <label>Father Name:</label>
          <span>{fathername}</span>
        </div>

        <div className="input-group">
          <label>Adhar Number:</label>
          <span>{adhar}</span>
        </div>

        <div className="input-group">
          <label>PAN Number:</label>
          <span>{pan}</span>
        </div>

        <div className="input-group">
          <label>Address:</label>
          {editing ? (
            <textarea
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          ) : (
            <span>{address}</span>
          )}
        </div>
        
        <div className="button-group">
          {editing ? (
            <button type="button" onClick={handleSave}>Save</button>
          ) : (
            <button type="button" onClick={handleEdit}>Edit Profile</button>
          )}
        </div>
      </form>
    </div>
  );
}

export default UserProfile;
