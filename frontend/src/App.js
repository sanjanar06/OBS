import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';

import AccountCreation from './pages/Home/AccountCreation';
import ForgotUserId from './pages/Home/ForgetUserId';
import Home from './pages/Home/Home';
import Login from './pages/Home/Login.jsx';
import Register from './pages/Home/Register';
import SetNewPassword from './pages/Home/SetNewPassword';
import UserDashboard from './pages/UserDashboard/UserDashboard';

import AddBeneficiary from './pages/FundTransfer/AddBeneficiary';
import DisplayBeneficiary from './pages/FundTransfer/DisplayBeneficiary';
import FundTransfer from './pages/FundTransfer/FundTransfer';
import IMPSPayment from './pages/FundTransfer/IMPSPayment';
import NEFTPayment from './pages/FundTransfer/NEFTPayment';
import RTGSPayment from './pages/FundTransfer/RTGSPayment';

import AccountDetails from './pages/UserDashboard/AccountDetails.jsx';
import TransactionHistory from './pages/UserDashboard/TransactionHistory';
import UserProfile from './pages/UserDashboard/UserProfile.jsx';

import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminTransactionHistory from './pages/Admin/AdminTransaction';

import { useEffect } from 'react';
import { isAdmin, isLoggedIn } from './services/auth';


function App() {
  const loggedIn = isLoggedIn();
  const adminRole = isAdmin();
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
        <Route path="/admintransaction" element={<AdminTransactionHistory />}></Route>

        <Route path="/accountDetails" element={<AccountDetails />} />
        <Route path="/RTGSPayment" element={<RTGSPayment />} />
        <Route path="/transactionHistory" element={<TransactionHistory />} />
        {/* <Route path="/forgotPassword" element={<ForgotPassword/>}/>  */}
        <Route path="/userDashboard" element={<UserDashboard />} />
        {/* <Route path="/Change" element={<ChangeUid_pass/>}/>  */}
        <Route path="/userProfile" element={<UserProfile />} />
        {/* <Route path="/ChangePassword" element = {<ChangePassword/>} /> */}
        <Route path="/NEFTPayment" element={<NEFTPayment />} />
        <Route path="/IMPSPayment" element={<IMPSPayment />} />
      </Routes>

    </div>
  );
}

export default App;
