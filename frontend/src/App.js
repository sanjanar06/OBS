import './App.css';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Home/Login.jsx';
import Home from './pages/Home/Home';
import AccountCreation from './pages/Home/AccountCreation';
import Register from './pages/Home/Register';
import AccountDetails from './pages/UserDashboard/AccountDetails.jsx';
import AccountSummary from './pages/UserDashboard/AccountSummary.jsx';
import ForgotPassword from './pages/Home/ForgotPassword.jsx';
import UserDashboard from './pages/UserDashboard/UserDashboard.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/account" element={<AccountCreation />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/accountDetails" element={<AccountDetails/>}/> 
        <Route path="/accountSummary" element={<AccountSummary/>}/> 
        <Route path="/change" element={<ForgotPassword/>}/> 
        <Route path="/userDashboard" element={<UserDashboard/>}/> 
      </Routes>

    </div>
  );
}

export default App;
