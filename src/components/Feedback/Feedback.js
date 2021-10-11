export function Feedback({ options, onLeaveFeedback }) {
  let el = -1;
  return (
    <ul>
      {options.map((option) => {
        return (
          <li key={option}>
            <button onClick={onLeaveFeedback[(el += 1)]}>{option}</button>
          </li>
        );
      })}
    </ul>
  );
}
