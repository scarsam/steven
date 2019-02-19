import React from "react";

class QuizStep1 extends React.Component {
  render() {
    if (this.props.currentStep !== 1) {
      return null;
    }
    return (
      <div>
        <h2>Budget</h2>
        <label htmlFor="cheap">$</label>
        <input type="radio" value="$" name="cheap" />
        <label htmlFor="medium">$$</label>
        <input type="radio" value="$$" name="medium" />
        <label htmlFor="expensive">$$$</label>
        <input type="radio" value="$$$" name="expensive" />
      </div>
    );
  }
}

export default QuizStep1;
