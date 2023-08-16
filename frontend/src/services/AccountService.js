import axios from 'axios';

// const USER_API_BASE_URL = "http://localhost:3000";
const ACCOUNT_API_BASE_URL = "http://localhost:8080/account"

class AccountService {
    
    openAccount(details){
        return axios.post(ACCOUNT_API_BASE_URL + '/addProfile',{
            title : details.title,
            firstName : details.firstName,
            middleName : details.middleName,
            lastName : details.lastName,
            emailID : details.emailID,
            fatherName : details.fatherName,
            motherName : details.motherName,
            aadharNo : details.aadharNo,
            dob : details.dob,
            address : details.address,
            occupationType : details.occupationType,
            grossAnnualIncome : details.grossAnnualIncome
        });
    }
}

export default new AccountService();