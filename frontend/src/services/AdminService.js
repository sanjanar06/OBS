import api from './api';

class AdminService {

  viewAllAccounts() {
    return api.get('/account/view/all');
  }

  updateAccountStatusApprove(accountNumber) {
    return api.put(`/admin/accept/${accountNumber}`);
  }

  updateAccountStatusReject(accountNumber) {
    return api.put(`/admin/delete/${accountNumber}`);

  }

  viewTransactions() {
    return api.get(`/transaction/view/${localStorage.getItem("accountNumber")}`);
  }
}

export default new AdminService();



