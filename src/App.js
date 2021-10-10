import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { Statistic } from "./Statistic/Statistic";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad, total } = this.state;
    this.setState({ total: 2 });
  };
  countPositiveFeedbackPercentage = () => {
    const { good, total } = this.state;
    this.setState({ positivePercentage: (good * 100) / total });
  };

  handleIncrementGood = () => {
    this.setState({ good: this.state.good + 1 });
  };
  handleIncrementNeutral = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };
  handleIncrementBad = () => {
    this.setState({ bad: this.state.bad + 1 });
  };
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;
    const {
      handleIncrementGood,
      handleIncrementNeutral,
      handleIncrementBad,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    return (
      <div className="App">
        <header className="App-header">
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            handleIncrementGood={handleIncrementGood}
            handleIncrementNeutral={handleIncrementNeutral}
            handleIncrementBad={handleIncrementBad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        </header>
      </div>
    );
  }
}

export default App;
