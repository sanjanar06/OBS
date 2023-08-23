import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';

import Login from './pages/Home/Login.jsx';
import UserDashboard from './pages/UserDashboard/UserDashboard';

import AdminDashboard from './pages/Admin/AdminStatus';
import AddBeneficiary from './pages/FundTransfer/AddBeneficiary';
import FundTransfer from './pages/FundTransfer/FundTransfer';
import RTGSPayment from './pages/FundTransfer/RTGSPayment';
import ForgotUserId from './pages/Home/ForgetUserId';
import Home from './pages/Home/Home';
import SetNewPassword from './pages/Home/SetNewPassword';


import { useEffect } from 'react';
import DisplayBeneficiary from './pages/FundTransfer/DisplayBeneficiary';
import IMPSPayment from './pages/FundTransfer/IMPSPayment';
import NeftPayment from './pages/FundTransfer/NEFTPayment';
import AccountCreation from './pages/Home/AccountCreation';
import Register from './pages/Home/Register';
import AccountDetails from './pages/UserDashboard/AccountDetails.jsx';
import TransactionHistory from './pages/UserDashboard/TransactionHistory';
import UserProfile from './pages/UserDashboard/UserProfile.jsx';
import { isLoggedIn } from './services/auth';

function App() {
  const loggedIn = isLoggedIn();
  const navigate = useNavigate();

  useEffect(() => {

    if (!loggedIn) {
      navigate("/");
    }

  }, [loggedIn]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgetId" element={<ForgotUserId />}></Route>
        <Route path="/resetPassword" element={<SetNewPassword />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/account" element={<AccountCreation />}></Route>
        <Route path="/addbeneficiary" element={<AddBeneficiary />}></Route>
        <Route path="/fundtransfer" element={<FundTransfer />}></Route>
        <Route path="/displaybeneficiaries" element={<DisplayBeneficiary />}></Route>
        <Route path="/admin" element={<AdminDashboard />}></Route>




        <Route path="/accountDetails" element={<AccountDetails />} />
        <Route path="/RTGSPayment" element={<RTGSPayment />} />
        <Route path="/transactionHistory" element={<TransactionHistory />} />
        {/* <Route path="/forgotPassword" element={<ForgotPassword/>}/>  */}
        <Route path="/userDashboard" element={<UserDashboard />} />
        {/* <Route path="/Change" element={<ChangeUid_pass/>}/>  */}
        <Route path="/userProfile" element={<UserProfile />} />
        {/* <Route path="/ChangePassword" element = {<ChangePassword/>} /> */}
        <Route path="/NEFTPayment" element={<NeftPayment />} />
        <Route path="/IMPSPayment" element={<IMPSPayment />} />
      </Routes>

    </div>
  );
}

export default App;
