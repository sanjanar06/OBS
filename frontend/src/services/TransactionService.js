import api from './api';

const accountNumber = localStorage.getItem("accountNumber")


class TransactionService {

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

export default new TransactionService();