import React, { Component } from 'react';
import '../style/IMPSPayment.css'; // You can import your CSS file here for styling
import { Link } from 'react-router-dom';

class IMPSPayment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fromAccount: '',
      toAccount: '',
      amount: '',
      date: '',
      maturityInstruction: '',
      remarks: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // Here, you can perform any actions with the form data, such as initiating IMPS payment.
    console.log(this.state);
  }

  handleReset() {
    this.setState({
      fromAccount: '',
      toAccount: '',
      amount: '',
      date: '',
      maturityInstruction: '',
      remarks: '',
    });
  }

  render() {
    return (
      <div>
          <h1>Initiate IMPS Payment</h1>
          <form className="imps-form" onSubmit={this.handleSubmit}>
            <div1>
            <label>From Account:</label>
            <input
              type="text"
              name="fromAccount"
              required
              value={this.state.fromAccount}
              onChange={this.handleInputChange}
            />
            </div1>
            
            <div1>
            <label>To Account:</label>
            <input
              type="text"
              name="toAccount"
              required
              value={this.state.toAccount}
              onChange={this.handleInputChange}
            />
            <Link to="/addbeneficiary">
            <button type="button" className="add-new-button">Add New +</button>
            </Link>
            </div1>

            <div1>
            <label>Amount:</label>
            <input
              type="text"
              name="amount"
              required
              value={this.state.amount}
              onChange={this.handleInputChange}
            />
            </div1>

            <div1>
            <label>Date:</label>
            <input
              type="date"
              name="date"
              required
              value={this.state.date}
              onChange={this.handleInputChange}
            />
            </div1>

            <div1>
            <label>Maturity Instruction:</label>
            <input
              type="text"
              name="maturityInstruction"
              required
              value={this.state.maturityInstruction}
              onChange={this.handleInputChange}
            />
            </div1>

            <div1>
            <label>Remarks:</label>
            <input
              type="text"
              name="remarks"
              value={this.state.remarks}
              onChange={this.handleInputChange}
            />
            </div1>
            
            <div1>
            <div className="buttons">
              <button type="submit">Continue</button>
              <button type="button" onClick={this.handleReset}>Reset</button>
              <button type="button">Save</button>
              <button type="button">Save as Template</button>
            </div>
            </div1>
          </form>
        </div>
    );
  }
}

export default IMPSPayment;
