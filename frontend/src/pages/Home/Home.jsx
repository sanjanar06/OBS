import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Home.css';

const Home = () => {
  return (
    <div className="Home">
      <header className="Home-header">
        <h1>WELCOME TO OUR BANK</h1>
        <p>Your Trusted Banking Partner</p>
        <div className="Button-container">
          <Link to="/login">
            <button className="Button">LOGIN</button>
          </Link>
          <Link to="/register">
            <button className="Button">REGISTER</button>
          </Link>
          <Link to="/accountCreation">
            <button className="Button">Apply Online for Account</button>
          </Link>
        </div>
      </header>
      <section className="Banking-info">
        <div className="Banking-info-card">
          <h2>Secure & Convenient</h2>
          <p>Manage your finances securely and conveniently with our user-friendly online banking platform.</p>
        </div>
        <div className="Banking-info-card">
          <h2>Personalized Services</h2>
          <p>Experience personalized banking services tailored to your financial needs and goals.</p>
        </div>
        <div className="Banking-info-card">
          <h2>Easy Account Application</h2>
          <p>Applying for an account is now easier than ever. Simply fill out our online application form.</p>
        </div>
      </section>
      <div className="Image-container">
        <img src="assets/home1.jpg" alt="Banking Image" className="Banking-image" />
      </div>
    </div>
  );
};

export default Home;
