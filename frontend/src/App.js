import './App.css';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Home/Login.jsx';
import UserDashboard from './pages/UserDashboard/UserDashboard';

import Home from './pages/Home/Home'; 
import ForgotUserId from './pages/Home/ForgetUserId';
import SetNewPassword from './pages/Home/SetNewPassword';

import AccountCreation from './pages/Home/AccountCreation';
import Register from './pages/Home/Register';
import AccountDetails from './pages/UserDashboard/AccountDetails.jsx';
import AccountSummary from './pages/UserDashboard/AccountSummary.jsx';
import ChangeUid_pass from './pages/Home/ForgotPassword.jsx';
import UserProfile from './pages/UserDashboard/UserProfile.jsx';
import ChangePassword from './pages/changePassword';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/ForgetId" element={<ForgotUserId/>}></Route>
        <Route path="/resetPassword" element={<SetNewPassword/>}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/account" element={<AccountCreation />}></Route>

        <Route path="/accountDetails" element={<AccountDetails/>}/> 
        <Route path="/accountSummary" element={<AccountSummary/>}/> 
        <Route path="/forgotPassword" element={<ForgotPassword/>}/> 
        <Route path="/userDashboard" element={<UserDashboard/>}/> 
  
        {/* <Route path="/Change" element={<ChangeUid_pass/>}/>  */}
        <Route path="/UserProfile" element={<UserProfile/>}/> 
        {/* <Route path="/ChangePassword" element = {<ChangePassword/>} /> */}
      </Routes>

    </div>
  );
}

export default App;
