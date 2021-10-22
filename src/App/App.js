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

  handleCount = (e) => {
    const name = e.currentTarget.name;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };
  positivePercentage = () => {
    const { good } = this.state;
    const positivePercentage = Math.round((good / this.totalFeedback()) * 100);
    return positivePercentage;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const { totalFeedback, positivePercentage, handleCount } = this;
    return (
      <div className="App">
        <header className="App-header">
          <Section title={"Please leave your feedback"}>
            <Feedback
              options={["good", "neutral", "bad"]}
              onLeaveFeedback={handleCount}
            />
          </Section>
          {this.totalFeedback() > 0 ? (
            <Section title="Statistics">
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
