// src/api.js

import axios from 'axios';
const API_URL = 'https://localhost.com/transactions/view/history'; // Replace with your API endpoint URL

export const fetchTransactions = async (accountNumber) => {
  try {
    const response = await fetch(`${API_URL}/${accountNumber}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return [];
  }
};

export default fetchTransactions;