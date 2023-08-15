import axios from 'axios';
// or if you're not using ES6 modules
// const axios = require('axios');

const USER_API_BASE_URL = "http://localhost:3000";

class AccountService {
    
    sendAccount(details){
        return axios.post(USER_API_BASE_URL + '/people', details);
    }
}

export default new AccountService();