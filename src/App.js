import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { Feedback } from "./components/Feedback/Feedback";
import { Statistic } from "./components/Statistic/Statistic";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackGood = () => {
    this.setState((prevState) => {
      const { good } = this.state;
      return {
        good: Number(`${Number(good) + 1}`),
      };
    });
  };
  feedbackNeutral = () => {
    this.setState((prevState) => {
      const { neutral } = this.state;
      return {
        neutral: Number(`${Number(neutral) + 1}`),
      };
    });
  };
  feedbackBad = () => {
    this.setState((prevState) => {
      const { bad } = this.state;
      return {
        bad: Number(`${Number(bad) + 1}`),
      };
    });
  };
  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = Number(`${Number(good) + Number(neutral) + Number(bad)}`);
    return total;
  };
  positiveFeedbackPercentage = () => {
    const { good } = this.state;
    const positivePercentage = Math.round(
      (100 * Number(good)) / this.totalFeedback()
    );
    return positivePercentage;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const {
      totalFeedback,
      positiveFeedbackPercentage,
      feedbackGood,
      feedbackNeutral,
      feedbackBad,
    } = this;
    return (
      <div className="App">
        <header className="App-header">
          <Feedback
            options={["Good", "Neutral", "Bad"]}
            onLeaveFeedback={[feedbackGood, feedbackNeutral, feedbackBad]}
          />
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback()}
            positivePercentage={positiveFeedbackPercentage()}
          />
        </header>
      </div>
    );
  }
}

export default App;
