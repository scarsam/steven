import React from "react";
import QuizStep1 from "components/quiz_step_1";
import QuizStep2 from "components/quiz_step_2";

class QuizContainer extends React.Component {
  state = {
    currentStep: 1,
    price: "",
    category: "",
    answer: {
      price: null,
      category: null
    }
  };

  componentDidMount() {}

  handleSubmit = event => {
    event.preventDefault();
    const token = document.querySelector("meta[name=csrf-token]").content;
    fetch("/test", {
      method: "POST",
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        quiz: {
          price: this.state.price,
          category: this.state.category
        }
      })
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          answer: {
            price: data.price,
            category: data.category
          }
        });
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
    const { price, category } = this.state.answer;
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
        {price && category && (
          <div>
            <h1>This is the answers</h1>
            <p>price: {price}</p>
            <p>category: {category}</p>
          </div>
        )}
      </form>
    );
  }
}

export default QuizContainer;
