import React, { Component } from 'react';
import './style/ChangePassword.css'; // You can import your CSS file here for styling

class ChangePassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginPassword: '',
      confirmLoginPassword: '',
      transactionPassword: '',
      confirmTransactionPassword: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // Here, you can perform any actions with the form data, such as updating passwords.
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Set New Password</h1>
          <form className="password-form" onSubmit={this.handleSubmit}>
            <label>Login Password:</label>
            <input
              type="password"
              name="loginPassword"
              required
              value={this.state.loginPassword}
              onChange={this.handleInputChange}
            />

            <label>Confirm Login Password:</label>
            <input
              type="password"
              name="confirmLoginPassword"
              required
              value={this.state.confirmLoginPassword}
              onChange={this.handleInputChange}
            />

            <label>Transaction Password:</label>
            <input
              type="password"
              name="transactionPassword"
              required
              value={this.state.transactionPassword}
              onChange={this.handleInputChange}
            />

            <label>Confirm Transaction Password:</label>
            <input
              type="password"
              name="confirmTransactionPassword"
              required
              value={this.state.confirmTransactionPassword}
              onChange={this.handleInputChange}
            />

            <button type="submit">Submit</button>
          </form>
        </header>
      </div>
    );
  }
}

export default ChangePassword;
