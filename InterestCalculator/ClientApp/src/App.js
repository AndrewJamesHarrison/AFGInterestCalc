import React, { Component } from 'react';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
          <div class="col-md-12">
              <h1>Loan Calculator</h1>
            <p>Enter your values in the form below and hit the Calculate button to determine your monthly loan repayments</p>
            <form name="Calculate" action="api/data/CalculateRepayment" method="post">
                <label class="col-md-3" for="LoanValue">Loan Amount (dollars)</label>
                <input name="LoanValue" type="Number" />
                <br />
                <label class="col-md-3" for="InterestRate">Interest Rate (percentage)</label>
                <input name="InterestRate" type="Number" />
                <br />
                <label class="col-md-3" for="Term">Loan Term (years)</label>
                <input name="Term" type="Number" />
                <br />
                <input name="Submit" type="submit" value="Calculate"/>
            </form>
            <br />
            <p>Enter your values in the form below and hit the Calculate button to determine the total value of your loan</p>
            <form name="Calculate" action="api/data/CalculateCurrentValue" method="post">
                <label class="col-md-3" for="Repayment"> Monthly Repayment (dollars)</label>
                <input name="Repayment" type="Number" />
                <br />
                <label class="col-md-3" for="InterestRate">Interest Rate (percentage)</label>
                <input name="InterestRate" type="Number" />
                <br />
                <label class="col-md-3" for="Term">Loan Term (years)</label>
                <input name="Term" type="Number" />
                <br />
                <input name="Submit" type="submit" value="Calculate" />
            </form>

            
          </div>
      );
  }
}
