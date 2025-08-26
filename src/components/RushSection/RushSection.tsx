import React from "react";
import styles from "./RushSection.module.css";
import RushTimeline from "./RushTimeline.tsx";

const RushSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>RUSH</h1>
      <p className={styles.subtitle}>Join Zeta Pi this upcoming semester!</p>
      <p className={styles.deadline}>
        Applications for Fall 2025 are due <strong>TBD</strong>
      </p>

      <div className={styles.introSection}>
        <div className={styles.whatIsRush}>
          <h2 className={styles.title2}>What is Rush?</h2>
          <p>
            Rush is the recruitment period during which prospective members
            explore what the fraternity is about, attend events, meet current
            brothers and sisters, and learn about the organization's values,
            goals, and professional opportunities. Rush is non-binding —
            attending events doesn't commit you to join — it's simply a chance
            for both you and the organization to get to know each other better.
          </p>
        </div>
        <div className={styles.video}>
          <div className={styles.videoPlaceholder}>Rush Video</div>
        </div>
      </div>

      <div>
        <RushTimeline />
      </div>
    </div>
  );
};

export default RushSection;
