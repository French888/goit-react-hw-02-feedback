import "./App.css";
import { Component } from "react";
import { Section } from "../components/Section/Section";
import { Notification } from "../components/Notification/Notification";
import { Feedback } from "../components/Feedback/Feedback";
import { Statistic } from "../components/Statistic/Statistic";

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
        good: good + 1,
      };
    });
  };
  feedbackNeutral = () => {
    this.setState((prevState) => {
      const { neutral } = this.state;
      return {
        neutral: neutral + 1,
      };
    });
  };
  feedbackBad = () => {
    this.setState((prevState) => {
      const { bad } = this.state;
      return {
        bad: bad + 1,
      };
    });
  };
  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };
  positivePercentage = () => {
    const { good } = this.state;
    const positivePercentage = Math.round((100 * good) / this.totalFeedback());
    return positivePercentage;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const {
      totalFeedback,
      positivePercentage,
      feedbackGood,
      feedbackNeutral,
      feedbackBad,
    } = this;
    return (
      <div className="App">
        <header className="App-header">
          <Section title={"Please leave your feedback"}>
            <Feedback
              options={["Good", "Neutral", "Bad"]}
              onLeaveFeedback={[feedbackGood, feedbackNeutral, feedbackBad]}
            />
          </Section>
          {this.totalFeedback() > 0 ? (
            <Section title={"Statistics"}>
              <Statistic
                good={good}
                neutral={neutral}
                bad={bad}
                total={totalFeedback()}
                positivePercentage={positivePercentage()}
              />
            </Section>
          ) : (
            <Notification massage={"No feedback given"} />
          )}
        </header>
      </div>
    );
  }
}

export default App;
