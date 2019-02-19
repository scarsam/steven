import React from "react";
import QuizStep1 from "components/quiz_step_1";
import QuizStep2 from "components/quiz_step_2";

class QuizContainer extends React.Component {
  state = {
    currentStep: 1,
    name: "",
    state: ""
  };

  saveAndContinue = () => {
    console.log("move on");
  };

  nextStep = () => {
    let currentStep = this.state.currentStep;
    if (currentStep < 2) {
      currentStep++;
      this.setState({ currentStep });
    }
  };

  prevStep = () => {
    let currentStep = this.state.currentStep;
    if (currentStep > 1) {
      currentStep--;
      this.setState({ currentStep });
    }
  };

  render() {
    return (
      <form>
        <QuizStep1 currentStep={this.state.currentStep} />
        <QuizStep2 currentStep={this.state.currentStep} />
        <button className="padding-left" onClick={this.nextStep}>
          Next Step
        </button>
        <button onClick={this.prevStep}>Prev Step</button>
      </form>
    );
  }
}

export default QuizContainer;
