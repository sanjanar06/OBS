import UserService from '../../services/UserService'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import login_img from '../../assets/login.jpg'

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
        navigate("/userDashboard");
        
    })
    .catch((error) =>{
        setLoginError('Invalid credentials')
    });

 }  ;
  return (
    <div className="login-name" style={{'margin': '1px auto', 'marginTop': '1px', 'width': '1000px', 'height':'100vh'}}>
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
        {/* <img src={login_img} alt="img" /> */}
    </div>
  )
}

export default Login