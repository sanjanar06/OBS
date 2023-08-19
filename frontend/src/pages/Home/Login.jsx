import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiLogin } from '../../services/auth';

const Login = () => {
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

  const handleLogin = async (event) => {
    event.preventDefault();
    const res = await apiLogin(credentials);
    
    if(res)
    {
      navigate("/userDashboard")
    }
    else{
      setLoginError("Invalid credentials")
    }

  }
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