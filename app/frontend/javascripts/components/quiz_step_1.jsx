import React from "react";

class QuizStep1 extends React.Component {
  render() {
    if (this.props.currentStep !== 1) {
      return null;
    }
    return <p>This is step 1</p>;
  }
}

export default QuizStep1;
