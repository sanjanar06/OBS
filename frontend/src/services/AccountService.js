import api from './api';
const accountNumber = localStorage.getItem("accountNumber")

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

    addBeneficiary(details) {
        return api.post("/beneficiary/create", {
            senderAccount: accountNumber,
            beneficiaryAccount: details.beneficiaryAccountNumber,
            beneficiaryName: details.beneficiaryName,
            beneficiaryNickName: details.beneficiaryNickName
        });
    }

    viewBeneficiaries() {
        return api.get("/beneficiary/view/")
    }

    createTransaction(details) {
        return api.post("/transaction/create", {
            transactionType: details.transactionType,
            transactionDesc: details.transactionDesc,
            transactionAmount: details.transactionAmount,
            fromAccount: accountNumber,
            toAccount: details.toAccount
        });
    }


}

export default new AccountService();