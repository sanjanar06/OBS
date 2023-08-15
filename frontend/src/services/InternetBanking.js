import axios from 'axios';
// or if you're not using ES6 modules
// const axios = require('axios');

const USER_API_BASE_URL = "http://localhost:3000";

class InternetBankingService {
    
    sendRequest(details){
        return axios.post(USER_API_BASE_URL + '/netbanking', details);
    }
}

export default new InternetBankingService();