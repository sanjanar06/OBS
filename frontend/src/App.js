import './App.css';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Home/Login.jsx';
import UserDashboard from './pages/UserDashboard/UserDashboard';

import Home from './pages/Home/Home';

import AccountCreation from './pages/Home/AccountCreation';
import InternetBanking from './pages/Home/Register';

import AccountDetails from './pages/UserDashboard/AccountDetails.jsx';
import AccountSummary from './pages/UserDashboard/AccountSummary.jsx';
import ChangeUid_pass from './pages/Home/ForgotPassword.jsx';
import UserProfile from './pages/UserDashboard/UserProfile.jsx';
import ChangePassword from './pages/changePassword';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/Home" element={<Home />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/userProfile" element={<UserDashboard></UserDashboard>}></Route>
        <Route path="/account" element={<AccountCreation />}></Route>
        <Route path="/internetBanking" element={<InternetBanking />}></Route>
        <Route path="/AccountDetails" element={<AccountDetails/>}/> 
          <Route path="/AccountSummary" element={<AccountSummary/>}/> 
          <Route path="/Change" element={<ChangeUid_pass/>}/> 
          <Route path="/UserProfile" element={<UserProfile/>}/> 
          <Route path="/ChangePassword" element = {<ChangePassword/>} />
      </Routes>

    </div>
  );
}

export default App;
