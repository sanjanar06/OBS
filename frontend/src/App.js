import './App.css';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login.jsx';
import UserDashboard from './pages/UserDashboard';

import Home from './pages/Home';

import AccountCreation from './pages/AccountCreation';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/Home" element={<Home />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/userProfile" element={<UserDashboard></UserDashboard>}></Route>
        <Route path="/account" element={<AccountCreation />}></Route>
      </Routes>

    </div>
  );
}

export default App;
