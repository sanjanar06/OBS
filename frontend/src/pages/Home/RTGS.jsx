import React from 'react';
import '../style/RTGS.css';


class RTGSPayment extends React.Component {
  render() {
    return (
      <div className="RTGSPayment">
        <h2>Initiate RTGS Payment</h2>
        <form>
          <div className="form-group">
            <label htmlFor="fromAccount">From Account:</label>
            <input type="text" id="fromAccount" name="fromAccount" />
          </div>
          <div className="form-group">
            <label htmlFor="toAccount">To Account:</label>
            <input type="text" id="toAccount" name="toAccount" />
            <button type="button" className="add-new-button">Add New +</button>
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount:</label>
            <input type="text" id="amount" name="amount" />
          </div>
          <div className="form-group">
            <label htmlFor="transactionDate">Transaction Date:</label>
            <input type="text" id="transactionDate" name="transactionDate" />
          </div>
          <div className="form-group">
            <label htmlFor="maturityInstruction">Maturity Instruction:</label>
            <input type="text" id="maturityInstruction" name="maturityInstruction" />
          </div>
          <div className="form-group">
            <label htmlFor="remark">Remark:</label>
            <input type="text" id="remark" name="remark" />
          </div>
          <div className="button-container">
            <button type="button" className="button save-button">Save</button>
            <span className="button-space"></span>
            <button type="button" className="button reset-button">Reset</button>
            <span className="button-space"></span>
            <button type="button" className="button save-template-button">Save as Template</button>
            <span className="button-space"></span>
            <button type="button" className="button continue-button">Continue</button>
          </div>
        </form>
      </div>
    );
  }
}

export default RTGSPayment;

