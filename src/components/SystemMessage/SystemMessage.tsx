// SystemMessage.tsx
import React, { useState } from 'react';
import styles from './SystemMessage.module.css';

interface SystemMessageProps {
  onClose: () => void;
}

const SystemMessage: React.FC<SystemMessageProps> = ({ onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      onClose(); // Notify parent
    }, 300); // Match CSS animation duration
  };

  if (!isVisible) return null;

  return (
    <section className={`${styles.wrapper} ${isClosing ? styles.fadeOut : ''}`}>
      <div className={styles.window}>
        <div className={styles.header}>
          <span>System Message</span>
          <button className={styles.close} onClick={handleClose}>✕</button>
        </div>
        <div className={styles.body}>
          <p>
            At Zeta Pi, our mission is to foster a community of passionate and innovative technology enthusiasts who are dedicated to advancing their skills, knowledge, and impact in the ever-evolving landscape of technology.
            <br /><br />
            Through collaboration, mentorship, and a commitment to excellence, we strive to create an environment where members can thrive both personally and professionally.
          </p>
          <div className={styles.actions}>
            <button className={styles.ok} onClick={handleClose}>OK!</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemMessage;