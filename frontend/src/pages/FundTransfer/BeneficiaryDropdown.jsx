// BeneficiaryDropdown.js
import React from 'react';

const BeneficiaryDropdown = ({ beneficiaries, onSelect }) => {
  return (
    <select onChange={onSelect} style={{
      width: '80%',
      padding: '10px',
      marginBottom: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    }}>
      <option value="">Select a beneficiary</option>
      {beneficiaries.map((beneficiary) => (
        <option key={beneficiary.beneficiaryId} value={beneficiary.beneficiaryAccount} style={{
          width: '80%',
          padding: '10px',
          marginBottom: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}>
          {beneficiary.beneficiaryName}
        </option>
      ))}
    </select>
  );
};

export default BeneficiaryDropdown;
