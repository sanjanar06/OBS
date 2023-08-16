import UserService from '../../services/UserService'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    userId:'',
    password:''
  });

  const [loginError, setLoginError] =useState('');
  const navigate = useNavigate();

  const handleInputChange= (event) =>{
    const {name,value}= event.target;
    setCredentials({
        ...credentials,
        [name]:value
    })
  }

  const handleLogin = (event) => {
    event.preventDefault();
    UserService.loginUser(credentials).then((res) =>{
        console.log('Logged in');
        navigate("/userProfile");
        
    })
    .catch((error) =>{
        setLoginError('Invalid credentials')
    });

 }  ;
  return (
    <div>
        <h2>Login</h2>
        <div>{loginError}</div>
        <form onSubmit={handleLogin}>
            <div>
                <label>Username:</label>
                <input 
                    type="text"
                    name="userId"
                    value={credentials.userId}
                    onChange={handleInputChange}
                     />
            </div>
            <div>
            <label>Password:</label>
                <input 
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleInputChange}
                     />
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    </div>
  )
}

export default Login