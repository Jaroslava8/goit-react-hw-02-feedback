import React from "react";
import PropTypes from "prop-types";
import styles from "../Statistics/Statistics.module.css";

const Statistics = ({ good, neutral, bad, totalFeedbacks, percentage }) => (
  <div>
    <div className={styles.section}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
    <div className={styles.section}>
      <p>Total: {totalFeedbacks}</p>
      <p>Positive feedback: {percentage}% </p>
    </div>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  totalFeedbacks: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
