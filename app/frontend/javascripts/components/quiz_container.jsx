import React from "react";
import QuizStep1 from "components/quiz_step_1";
import QuizStep2 from "components/quiz_step_2";

class QuizContainer extends React.Component {
  state = {
    currentStep: 1
  };

  nextStep = () => {
    let currentStep = this.state.currentStep;
    currentStep++;
    this.setState({ currentStep });
    console.log("Next step");
  };

  prevStep = () => {
    let currentStep = this.state.currentStep;
    currentStep--;
    this.setState({ currentStep });
    console.log("Prev step");
  };

  render() {
    return (
      <div>
        <QuizStep1 currentStep={this.state.currentStep} />
        <QuizStep2 currentStep={this.state.currentStep} />
        <button className="padding-left" onClick={this.nextStep}>
          Next Step
        </button>
        <button onClick={this.prevStep}>Prev Step</button>
      </div>
    );
  }
}

export default QuizContainer;
