import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiLogin, isAdmin } from '../../services/auth';

const Login = () => {
  const [credentials, setCredentials] = useState({
    userId: '',
    password: ''
  });

  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials({
      ...credentials,
      [name]: value
    })
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    const res = await apiLogin(credentials);

    if (res) {
      if (isAdmin) {
        navigate("/userDashboard")
      } else {
        navigate("/admin")

      }

    }
    else {
      setLoginError("Invalid credentials")
    }

  }
  return (
    <div className="login-name" style={{ 'margin': '1px auto', 'marginTop': '1px', 'width': '1000px', 'height': '100vh' }}>
      <h2>Login</h2>
      
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

        <div className= "error-message">{loginError}</div>
      </form>
      {/* <img src={login_img} alt="img" /> */}
    </div>
    // </div>
  )
}

export default Login