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

    viewAccount() {
        return api.get(`/account/view/${localStorage.getItem("accountNumber")}`);
    }

    addBeneficiary(details) {
        return api.post("/beneficiary/create", {
            senderAccount: localStorage.getItem("accountNumber"),
            beneficiaryAccount: details.beneficiaryAccountNumber,
            beneficiaryName: details.beneficiaryName,
            beneficiaryNickName: details.beneficiaryNickName
        });
    }

    viewBeneficiaries() {
        return api.get(`/beneficiary/view/all/${localStorage.getItem("accountNumber")}`);
    }

    viewBeneficiary(details) {
        return api.get(`/beneficiary/view?senderAccount=${details.fromAccount}&beneficiaryAccount=${details.toAccount}`);
    }

    createTransaction(details) {
        return api.post("/transaction/create", {
            transactionType: details.transactionType,
            transactionDesc: details.transactionDesc,
            transactionAmount: details.transactionAmount,
            fromAccount: localStorage.getItem("accountNumber"),
            toAccount: details.toAccount
        });
    }

    viewTransactions() {
        return api.get(`/transaction/view/${localStorage.getItem("accountNumber")}`);
    }


}

export default new AccountService();