import React, { useState } from 'react';
import styles from './EboardMember.module.css';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

type Props = {
  image: string;
  name: string;
  position: string;
  major?: string;
  graduation?: string;
  linkedin?: string;
  email?: string;
};

const FALLBACK = '/images/zp_logo.png';

const EboardMember: React.FC<Props> = ({
                                         image,
                                         name,
                                         position,
                                         major,
                                         graduation,
                                         linkedin,
                                         email,
                                       }) => {
  const [src, setSrc] = useState(image || FALLBACK);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const el = e.currentTarget;
    if (!el.src.endsWith(FALLBACK)) setSrc(FALLBACK);
  };

  return (
      <div className={styles.polaroid}>
        <div className={styles.imageWrapper}>
          <img
              src={src}
              alt={name}
              className={styles.photo}
              onError={handleError}
              loading="eager"      /* ensure images always paint on mobile */
              decoding="async"
              width={400}
              height={500}        /* matches 4/5 aspect box */
          />
          <div className={styles.overlay}>
            {major && <p><strong>Major:</strong><br />{major}</p>}
            {graduation && <p><strong>Class of:</strong><br />{graduation}</p>}
          </div>
        </div>

        <div className={styles.caption}>
          <h3>{name}</h3>
          <p className={styles.position}>{position}</p>
          {(linkedin || email) && (
              <div className={styles.links}>
                {linkedin && (
                    <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${name} LinkedIn`}>
                      <FaLinkedin className={styles.icon} />
                    </a>
                )}
                {email && (
                    <a href={`mailto:${email}`} aria-label={`Email ${name}`}>
                      <FaEnvelope className={styles.icon} />
                    </a>
                )}
              </div>
          )}
        </div>
      </div>
  );
};

export default EboardMember;