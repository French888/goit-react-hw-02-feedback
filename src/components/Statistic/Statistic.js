export function Statistic({ bad, neutral, good, total, positivePercentage }) {
  return (
    <div>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{total}</p>
      <p>PositivePercentage:{positivePercentage} %</p>
    </div>
  );
}
