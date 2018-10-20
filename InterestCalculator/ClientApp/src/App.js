import React, { Component } from 'react';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
          <div>
              <h1>Loan Calculator</h1>
            <p>Enter your values in the form below and hit the Calculate button to determine your monthly loan repayments</p>
            <form name="Calculate" action="api/data/Calculate" method="post">
                <input name="LoanValue" type="Number"/>
                <input name="InterestRate" type="Number" />
                <input name="Term" type="Number" />

                <input name="Submit" type="submit" value="Calculate"/>
            </form>

            
          </div>
      );
  }
}
