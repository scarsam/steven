import React from "react";

class QuizStep1 extends React.Component {
  render() {
    if (this.props.currentStep !== 1) {
      return null;
    }
    return (
      <div onChange={this.props.handleChange}>
        <h2>Budget</h2>
        <label htmlFor="cheap">$</label>
        <input
          id="cheap"
          type="radio"
          value="$"
          name="price"
          checked={this.props.price === "$"}
        />
        <label htmlFor="medium">$$</label>
        <input
          id="medium"
          type="radio"
          value="$$"
          name="price"
          checked={this.props.price === "$$"}
        />
        <label htmlFor="expensive">$$$</label>
        <input
          id="expensive"
          type="radio"
          value="$$$"
          name="price"
          checked={this.props.price === "$$$"}
        />
        <button
          disabled={this.props.price === ""}
          onClick={this.props.nextStep}
        >
          Next Step
        </button>
        <button onClick={this.props.prevStep}>Prev Step</button>
      </div>
    );
  }
}

export default QuizStep1;
