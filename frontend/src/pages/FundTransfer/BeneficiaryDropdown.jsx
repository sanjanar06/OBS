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
        <option key={beneficiary.id} value={beneficiary.id} style={{
            width: '80%',
            padding: '10px',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}>
          {beneficiary.name}
        </option>
      ))}
    </select>
  );
};

export default BeneficiaryDropdown;
