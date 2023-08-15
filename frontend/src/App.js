import './App.css';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login.jsx';
import UserDashboard from './pages/UserDashboard';

import Home from './pages/Home';

import AccountCreation from './pages/AccountCreation';
import InternetBanking from './pages/InternetBanking';

import AccountDatiails from './pages/DashboardPages/AccountDetails.jsx';
import AccountDetails from './pages/DashboardPages/AccountDetails.jsx';
import AccountSummary from './pages/DashboardPages/AccountSummary.jsx';
import ChangeUid_pass from './pages/DashboardPages/ChangeUserId_Password.jsx';
import UserProfile from './pages/DashboardPages/UserProfile.jsx';

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
      </Routes>

    </div>
  );
}

export default App;
