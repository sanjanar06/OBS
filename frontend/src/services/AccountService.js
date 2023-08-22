import api from './api';
class AccountService {

    openAccount(details) {
        return api.post('/account/create', {
            title: details.title,
            firstName: details.firstName,
            middleName: details.middleName,
            lastName: details.lastName,
            emailID: details.emailID,
            fatherName: details.fatherName,
            motherName: details.motherName,
            aadharNo: details.aadharNo,
            dob: details.dob,
            address: details.address,
            occupationType: details.occupationType,
            grossAnnualIncome: details.grossAnnualIncome
        });
    }
}

export default new AccountService();