import React from "react";

class QuizStep2 extends React.Component {
  render() {
    if (this.props.currentStep !== 2) {
      return null;
    }
    return (
      <div onChange={this.props.handleChange}>
        <h2>Category</h2>
        <label htmlFor="food">Food</label>
        <input
          id="food"
          type="radio"
          value="food"
          name="category"
          checked={this.props.category === "food"}
        />
        <label htmlFor="museeum">Museeum</label>
        <input
          id="museeum"
          type="radio"
          value="museeum"
          name="category"
          checked={this.props.category === "museeum"}
        />
        <label htmlFor="shopping">Shopping</label>
        <input
          id="shopping"
          type="radio"
          value="shopping"
          name="category"
          checked={this.props.category === "shopping"}
        />
        <input
          disabled={this.props.category === ""}
          type="submit"
          value="Submit"
        />
        <button onClick={this.props.prevStep}>Prev Step</button>
      </div>
    );
  }
}

export default QuizStep2;
