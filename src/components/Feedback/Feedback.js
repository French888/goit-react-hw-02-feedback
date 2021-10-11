import PropTypes from "prop-types";
import style from "./feedback.module.css";

export function Feedback({ options, onLeaveFeedback }) {
  let el = -1;
  return (
    <ul className={style.list}>
      {options.map((option) => {
        return (
          <li key={option} className={style.item}>
            <button onClick={onLeaveFeedback[(el += 1)]}>{option}</button>
          </li>
        );
      })}
    </ul>
  );
}

Feedback.protoTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.array,
};
