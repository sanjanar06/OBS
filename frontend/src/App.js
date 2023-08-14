import './App.css';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>

    </div>
  );
}

export default App;
