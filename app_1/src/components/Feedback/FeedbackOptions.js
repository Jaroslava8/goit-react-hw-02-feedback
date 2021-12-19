import React from "react";
import styles from "./Feedback.module.css";

const FeedbackOptions = ({ title, onIncrement }) => {
  return (
    <>
      <div className={styles.section}>
        <button
          className={styles.button}
          type="button"
          onClick={onIncrement.good}
        >
          Good
        </button>
        <button
          className={styles.button}
          type="button"
          onClick={onIncrement.neutral}
        >
          Neutral
        </button>
        <button
          className={styles.button}
          type="button"
          onClick={onIncrement.bad}
        >
          Bad
        </button>
      </div>
    </>
  );
};

export default FeedbackOptions;
