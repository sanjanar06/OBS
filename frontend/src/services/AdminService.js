import api from './api';

class AdminService {

  viewAllAccounts() {
    return api.get('/account/view/all');
  }

  viewAccount(accountNumber) {
    return api.get(`/account/view/${accountNumber}`);

  }

  updateAccountStatus(accountNumber, status) {
    return api.put('/account/update/status', {
      accountNumber: accountNumber,
      status: status
    });
  }

  viewTransactions(accountNumber) {
    return api.get(`/transaction/view/${accountNumber}`);
  }

  viewUserProfile(accountNumber) {
    return api.get(`/userProfile/view/${accountNumber}`);
  }
}

export default new AdminService();



