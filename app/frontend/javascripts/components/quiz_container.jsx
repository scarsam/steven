import React from "react";
import QuizStep1 from "components/quiz_step_1";
import QuizStep2 from "components/quiz_step_2";

class QuizContainer extends React.Component {
  state = {
    currentStep: 1,
    price: "",
    category: ""
  };

  componentDidMount() {}

  handleSubmit = event => {
    event.preventDefault();
    const token = document.querySelector("meta[name=csrf-token]").content;
    fetch("/test", {
      method: "POST",
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRF-Token": token
        // "Content-Type": "application/json",
        // Accept: "application/json"
      },
      body: {
        price: this.state.price,
        category: this.state.category
      }
    });
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

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <QuizStep1
          currentStep={this.state.currentStep}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          price={this.state.price}
        />
        <QuizStep2
          currentStep={this.state.currentStep}
          handleSubmit={this.handleSubmit}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          category={this.state.category}
        />
      </form>
    );
  }
}

export default QuizContainer;
