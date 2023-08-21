import React, { useState } from 'react';
import '../style/UserProfile.css'; // Import your CSS file for styling

function UserProfile() {
  const [editing, setEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    accountNumber: '1234567890',
    dob: '1990-01-01',
    email: 'johndoe@example.com',
    mobileNumber: '1234567890',
    fatherName: 'David Doe',
    adharNumber: '1234 5678 9012',
    panNumber: 'ABCDE1234F',
    address: '123, Main Street, City, Country',
  });

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  return (
    <div className="user-profile">
      <h1>Profile</h1>
      <form className="profile-form">
        <div className="input-group">
          <label>Name:</label>
          <span>{profileData.name}</span>
        </div>

        <div className="input-group">
          <label>DOB:</label>
          <span>{profileData.dob}</span>
        </div>

        <div className="input-group">
          <label>Email ID:</label>
          <span>{profileData.email}</span>
        </div>

        <div className="input-group">
          <label>Mobile Number:</label>
          <span>{profileData.mobileNumber}</span>
        </div>

        <div className="input-group">
          <label>Father Name:</label>
          <span>{profileData.fatherName}</span>
        </div>

        <div className="input-group">
          <label>Adhar Number:</label>
          <span>{profileData.adharNumber}</span>
        </div>

        <div className="input-group">
          <label>PAN Number:</label>
          <span>{profileData.panNumber}</span>
        </div>

        <div className="input-group">
          <label>Address:</label>
          {editing ? (
            <textarea
              name="address"
              value={profileData.address}
              onChange={handleInputChange}
            />
          ) : (
            <span>{profileData.address}</span>
          )}
        </div>

        <div className="button-group">
          {editing ? (
            <button type="button" onClick={handleSave}>Save</button>
          ) : (
            <button type="button" onClick={handleEdit}>Edit Address</button>
          )}
        </div>
      </form>
    </div>
  );
}

export default UserProfile;
