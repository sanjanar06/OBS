import React, { Component } from 'react';
import './style/NeftPayment.css'; // You can import your CSS file here for styling

class NeftPayment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fromAccount: '',
      toAccount: '',
      amount: '',
      transactionDate: '',
      remarks: '',
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
    // Here, you can perform any actions with the form data, such as initiating NEFT payment.
    console.log(this.state);
  }

  render() {
    return (
      <div>
        
          <h1>Initiate NEFT Payment</h1>
          <form className="neft-form" onSubmit={this.handleSubmit}>
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
            <label>Transaction Date:</label>
            <input
              type="date"
              name="transactionDate"
              required
              value={this.state.transactionDate}
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
              <p>1.Transaction will be executed on the next working if they are scheduled for Sundays, National Holidays, NEFT Holidays (as declared by RBI)</p>
            </div1>
            <div1>
            <button type="submit">Continue</button>
            <button type="button">Save</button>
            <button type="button">Reset</button>
            <button type="button">Save as Template</button>
            </div1>
          </form>
      
      </div>
    );
  }
}

export default NeftPayment;
