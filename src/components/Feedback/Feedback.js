import PropTypes from "prop-types";
import style from "./feedback.module.css";

export function Feedback({ options, onLeaveFeedback }) {
  return (
    <ul className={style.list}>
      {options.map((option) => {
        return (
          <li key={option} className={style.item}>
            <button name={option} onClick={onLeaveFeedback}>
              {option}
            </button>
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
