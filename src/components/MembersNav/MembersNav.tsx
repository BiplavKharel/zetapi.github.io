import React from 'react';
import styles from './MembersNav.module.css';

type Props = {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
};

const MembersNav: React.FC<Props> = ({ options, selected, onSelect }) => {
  return (
    <div className={styles.categoryWrapper}>
      <div className={styles.categoryBar}>
        {options.map((option) => (
          <button
            key={option}
            className={`${styles.categoryButton} ${selected === option ? styles.active : ''}`}
            onClick={() => onSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MembersNav;

