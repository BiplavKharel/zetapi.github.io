import React from "react";
import styles from "./RushSection.module.css";
import RushTimeline from "./RushTimeline.tsx";

const RushSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>RUSH</h1>
      <p className={styles.subtitle}>Join Zeta Pi this upcoming semester!</p>
      <p className={styles.deadline}>
        Applications for Fall 2025 are due <strong>September 6th</strong>
      </p>
      
      <div className={styles.buttonContainer}>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfOJw1evatOvA0atFeuimss5_Eo0Y3onIlyRuugPh7FHUsh3w/viewform?usp=sharing&ouid=114992048140499693699"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.interestButton}
        >
          Interest Form
        </a>
      </div>

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
