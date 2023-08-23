
// THIS PAGE IS ONLY FOR REFERENCE PURPOSE
// REFER THE SAME TEMPLATE FOR TESTING WITH FAKE JSON SERVER

import axios from 'axios';


const USER_API_BASE_URL = "http://localhost:3000";

class InternetBankingService {

    sendRequest(details) {
        return axios.post(USER_API_BASE_URL + '/netbanking', details);
    }
}

export default new InternetBankingService();