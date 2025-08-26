import React from 'react';
import styles from './ActiveMembersSection.module.css';
import { members } from '../../data/members';

const ActiveMembersSection: React.FC = () => {
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.target as HTMLImageElement;
        target.src = '/images/zp_logo.png';
        target.onerror = null;
    };

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Active Members</h2>
            <div className={styles.grid}>
                {members.map((member, index) => (
                    <div
                        key={member.name + index}
                        className={styles.card}
                        style={{ animationDelay: `${index * 0.05}s` }}
                    >
                        <div className={styles.imageWrapper}>
                            <img
                                src={member.image}
                                alt={member.name}
                                className={styles.image}
                                onError={handleImageError}
                                loading="eager"
                                decoding="async"
                                width={400}
                                height={500}
                            />
                            <div className={styles.overlay}>
                                <p><strong>Major:</strong> {member.major}</p>
                                <p><strong>Class of:</strong> {member.graduation}</p>
                            </div>
                        </div>

                        {member.linkedin && member.linkedin.trim() ? (
                            <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.name}
                            >
                                {member.name}
                            </a>
                        ) : (
                            <span className={styles.name}>{member.name}</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActiveMembersSection;