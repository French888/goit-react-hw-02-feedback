export function Statistic({
  handleIncrementGood,
  handleIncrementNeutral,
  handleIncrementBad,
  positivePercentage,
  total,
  bad,
  neutral,
  good,
}) {
  return (
    <div>
      <button onClick={handleIncrementGood}>Good</button>
      <button onClick={handleIncrementNeutral}>Neutral</button>
      <button onClick={handleIncrementBad}>Bad</button>

      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{total}</p>
      <p>PositivePercentage:{positivePercentage}</p>
    </div>
  );
}
