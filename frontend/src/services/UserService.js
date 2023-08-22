import api from './api';
class UserService {

    registerUser(details) {
        localStorage.clear();
        return api.post('/user/register', {
            accountNumber: details.accountNumber,
            loginPassword: details.loginPassword,
            transactionPassword: details.transactionPassword
        });
    }



}

export default new UserService();