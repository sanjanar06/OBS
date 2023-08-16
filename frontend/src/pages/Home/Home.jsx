import React from 'react';
import '../style/Home.css';
import { Link } from 'react-router-dom';


class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <h1>Welcome to Our Banking App</h1>
          <p>Your Trusted Banking Partner</p>
          <div className="Button-container">
          <Link to="/login">
            <button className="Button">Login</button>
            </Link>
            <Link to="/register">
            <button className="Button">Register</button>
            </Link>
            <Link to="/account">
            <button className="Button">Apply Online for Account</button>
            </Link>
          </div>
        </header>
      </div>
    );
  }
}
export default Home
