import './App.css';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login.jsx';
import UserDashboard from './pages/UserDashboard';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/userProfile" element={<UserDashboard></UserDashboard>}></Route>
      </Routes>

    </div>
  );
}

export default App;
