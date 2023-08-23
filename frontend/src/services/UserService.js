import api from './api';
class UserService {

    registerUser(details) {
        return api.post('/user/register', {
            accountNumber: details.accountNumber,
            loginPassword: details.loginPassword,
            transactionPassword: details.transactionPassword
        });
    }

    viewProfile() {
        return api.get(`/userProfile/view/${localStorage.getItem("accountNumber")}`);
    }



}

export default new UserService();