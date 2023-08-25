import api from './api';

class AdminService {

  viewAllAccounts() {
    return api.get('/account/view/all');
  }

  updateAccountStatusApprove(accountNumber) {
    return api.put(`/admin/accept/${accountNumber}`);
  }

  updateAccountStatusReject(accountNumber) {
    return api.put(`/admin/reject/${accountNumber}`);

  }

  viewTransactions(accountNumber) {
    return api.get(`/transaction/view/${accountNumber}`);
  }

  viewUserProfile(accountNumber) {
    return api.get(`/userProfile/view/${accountNumber}`);
  }
}

export default new AdminService();



