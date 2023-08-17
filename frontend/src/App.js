import './App.css';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Home/Login.jsx';
import UserDashboard from './pages/UserDashboard/UserDashboard';

import Home from './pages/Home/Home'; 
import ForgotUserId from './pages/Home/ForgetUserId';
import SetNewPassword from './pages/Home/SetNewPassword';
import RTGSPayment from './pages/FundTransfer/RTGSPayment';
import AddBeneficiary from './pages/FundTransfer/AddBeneficiary';
import FundTransfer from './pages/FundTransfer/FundTransfer';


import AccountCreation from './pages/Home/AccountCreation';
import Register from './pages/Home/Register';
import AccountDetails from './pages/UserDashboard/AccountDetails.jsx';
import AccountSummary from './pages/UserDashboard/AccountSummary.jsx';
import ChangeUid_pass from './pages/Home/ForgotPassword.jsx';
import UserProfile from './pages/UserDashboard/UserProfile.jsx';
import ChangePassword from './pages/Home/changePassword';
import NeftPayment from './pages/FundTransfer/neftPayment';
import IMPSPayment from './pages/FundTransfer/impsPayment';

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
        <Route path="/addbeneficiary" element={<AddBeneficiary />}></Route>
        <Route path="/fundtransfer" element={<FundTransfer />}></Route>



        <Route path="/accountDetails" element={<AccountDetails/>}/> 
        <Route path="/RTGSPayment" element={<RTGSPayment/>}/> 
        <Route path="/accountSummary" element={<AccountSummary/>}/> 
        {/* <Route path="/forgotPassword" element={<ForgotPassword/>}/>  */}
        <Route path="/userDashboard" element={<UserDashboard/>}/> 
        {/* <Route path="/Change" element={<ChangeUid_pass/>}/>  */}
        <Route path="/UserProfile" element={<UserProfile/>}/> 
        {/* <Route path="/ChangePassword" element = {<ChangePassword/>} /> */}
        <Route path = "/NEFTPayment" element={<NeftPayment/>}/>
        <Route path = "/IMPSPayment" element={<IMPSPayment/>}/>
      </Routes>

    </div>
  );
}

export default App;
