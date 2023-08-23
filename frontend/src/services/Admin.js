import api from './api';


const USER_API_BASE_URL = "http://localhost:8080";
// const USER_API_BASE_URL = "http://localhost:3001";


export function getaccounts(){
    return api.get('admin/view');
}

export const updateAccountStatusApprove = (accountId, status) => {
    const url = `/accept/${accountId}`; 
    return api.put(url, { status: status })
  };

  export const updateAccountStatusReject = (accountId, status) => {
    const url = `/delete/${accountId}`; 
    return api.put(url, { status: status })
  };  

export function gettransactions(){
    return api.get('/transaction');
}



