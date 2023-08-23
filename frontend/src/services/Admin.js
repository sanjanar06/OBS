import axios from 'axios';


//const USER_API_BASE_URL = "http://localhost:8080";
const USER_API_BASE_URL = "http://localhost:3001";

export function getaccounts(){
    return axios.get(USER_API_BASE_URL + '/account' /*'/view'*/);
}

export function gettransactions(){
    return axios.get(USER_API_BASE_URL + '/transaction');
}

