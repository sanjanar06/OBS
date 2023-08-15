import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/user";

class UserService {
    
    loginUser(user){
        return axios.post(USER_API_BASE_URL + '/login', {
            username: user.username,
            password: user.password,
        });
    }
}

export default new UserService();