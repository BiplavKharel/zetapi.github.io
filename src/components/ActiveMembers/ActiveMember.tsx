// ActiveMember.tsx (refactored to match CSS class names)
import React from 'react';
import styles from './ActiveMember.module.css';

type ActiveMemberProps = {
    image?: string;
    name: string;
    major: string;
    graduation: string;
    linkedin?: string;
};

const DEFAULT_IMG = '/images/zp_logo.png';

const ActiveMember: React.FC<ActiveMemberProps> = ({
                                                       image,
                                                       name,
                                                       major,
                                                       graduation,
                                                       linkedin
                                                   }) => {
    const imgSrc = image && image.trim() ? image : DEFAULT_IMG;

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.target as HTMLImageElement;
        if (target.src !== DEFAULT_IMG) {
            target.src = DEFAULT_IMG;
            target.onerror = null;
        }
    };

    return (
        <div className={styles.memberCard}>
            <div className={styles.imageWrapper}>
                <img
                    src={imgSrc}
                    alt={name}
                    className={styles.photo}
                    onError={handleImageError}
                    loading="lazy"
                    decoding="async"
                />
                <div className={styles.overlay}>
                    <p><strong>Major:</strong> {major}</p>
                    <p><strong>Class of:</strong> {graduation}</p>
                </div>
            </div>

            {linkedin && linkedin.trim() ? (
                <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.name}
                >
                    {name}
                </a>
            ) : (
                <span className={styles.name}>{name}</span>
            )}
        </div>
    );
};

export default ActiveMember;