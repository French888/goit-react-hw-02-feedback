import PropTypes from "prop-types";
import styles from "./notification.module.css";

export function Notification({ massage }) {
  return <p className={styles.notification}>{massage}</p>;
}

Notification.propTypes = {
  message: PropTypes.string,
};
