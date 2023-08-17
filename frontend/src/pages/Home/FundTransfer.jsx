import React from 'react';
import '../style/FundTransfer.css';
import { Link } from 'react-router-dom';


class FundTransfer extends React.Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <h1>Fund Transfer</h1>
          <p>Choose Your Method To Transfer</p>
          <div className="Button-container">
          <Link to="/RTGS">
            <button className="Button">RTGS</button>
            </Link>
            <Link to="/IMPS">
            <button className="Button">IMPS</button>
            </Link>
            <Link to="/NeftPayment">
            <button className="Button">NEFT</button>
            </Link>
          </div>
        </header>
      </div>
    );
  }
}
export default FundTransfer;
