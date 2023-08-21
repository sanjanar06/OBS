import axios from 'axios';


const USER_API_BASE_URL = "http://localhost:3001";

// export class Neft {
    
export function sendRequestNeft(details){
    return axios.post(USER_API_BASE_URL + '/neft', details);
}
// }

export function sendRequestImps(details){
    return axios.post(USER_API_BASE_URL + '/imps', details);
}

export function addbeneficiary(details){
    return axios.post(USER_API_BASE_URL + '/beneficiary', details);
}

export function getbeneficiary(){
    return axios.get(USER_API_BASE_URL + '/beneficiary');
}


