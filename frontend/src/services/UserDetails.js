import axios from 'axios';


const USER_API_BASE_URL = "http://localhost:3001";


export function getUserProfile(){
    return axios.get(USER_API_BASE_URL + '/userProfile');
}


export function getAccountDetails(){
    return axios.get(USER_API_BASE_URL + '/accountDetails');
}