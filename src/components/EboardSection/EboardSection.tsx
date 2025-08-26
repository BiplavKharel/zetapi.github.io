import React from 'react';
import styles from './EboardSection.module.css';
import EboardMember from './EboardMember';
import ImagePreloader from './ImagePreloader';

const eboard = [
  { image: '/images/headshots/grace2.jpg',  name: 'Grace Chen',     position: 'President',                           major: 'Computer Engineering',  graduation: '2027', linkedin: 'https://www.linkedin.com/in/gracechen636/',                         email: 'graceche@umich.edu' },
  { image: '/images/headshots/olivia2.jpg', name: 'Olivia Pinto',   position: 'Vice President',                       major: 'UX Design & Psychology', graduation: '2026', linkedin: 'https://www.linkedin.com/in/olivia-pinto-079382251/',               email: 'opinto@umich.edu' },
  { image: '/images/headshots/sam.jpg',     name: 'Sam Marquez',    position: 'Director of DEI',                       major: 'UX Design',              graduation: '2026', linkedin: 'https://www.linkedin.com/in/samira-marquez-gomez-017a86293/',      email: 'smarquez@umich.edu' },
  { image: '/images/headshots/abby.jpg',    name: 'Abby Moomaw',    position: 'Co-Head of Recruitment & Membership',   major: 'Computer Science',       graduation: '2027', linkedin: 'https://www.linkedin.com/in/abby-moomaw-261a7b2a2/',               email: 'amoomaw@umich.edu' },
  { image: '/images/headshots/nicky.jpg',   name: 'Nicky Nguyen',   position: 'Co-Head of Recruitment & Membership',   major: 'Computer Science',       graduation: '2027', linkedin: 'https://www.linkedin.com/in/nicky-nguyen-0a1097277/',              email: 'nickyngu@umich.edu' },
  { image: '/images/headshots/eshaan.jpg',  name: 'Eshaan Nair',    position: 'Co-Head of Social',                     major: 'Economics',              graduation: '2026', linkedin: 'https://www.linkedin.com/in/eshaannair/',                           email: 'enair@umich.edu' },
  { image: '/images/headshots/harry.jpg',   name: 'Anthony Nguyen', position: 'Co-Head of Social',                     major: 'Data Science',           graduation: '2028', linkedin: 'https://www.linkedin.com/in/anthony-nguyen-0539a4317/',             email: 'anthenzo@umich.edu' },
  { image: '/images/headshots/samira.jpg',  name: 'Samira Shalal',  position: 'Head of Marketing',                     major: 'Computer Science',       graduation: '2027', linkedin: 'https://www.linkedin.com/in/samira-shalal-130801326/',              email: 'samirash@umich.edu' },
  { image: '/images/headshots/jeff.jpg',    name: 'Jeff Zheng',     position: 'Head of Professional Development',      major: 'Data Science & Econ',    graduation: '2025', linkedin: 'https://www.linkedin.com/in/jeffrey-zhiyu-zheng-8aa992264/',        email: 'jefzheng@umich.edu' },
  { image: '/images/headshots/biplav2.jpg', name: 'Biplav Kharel',  position: 'Head of Tech',                          major: 'Data Science',           graduation: '2027', linkedin: 'https://www.linkedin.com/in/biplavkharel/',                          email: 'khbiplav@umich.edu' },
  { image: '/images/headshots/ky.jpg',      name: 'Ky Park',        position: 'Head of Fundraising',                   major: 'Computer Science',       graduation: '2026', linkedin: 'https://www.linkedin.com/in/kyran-park-825853250/',                 email: 'kyranp@umich.edu' }
];

// Keep desktop grouping: 3, 4, 4
const rows = [
  eboard.slice(0, 3),
  eboard.slice(3, 7),
  eboard.slice(7, 11),
];

const EboardSection: React.FC = () => {
  const imageUrls = eboard.map(m => m.image);

  return (
      <>
        <ImagePreloader images={imageUrls} />
        <div className={styles.gridWrapper}>
          <div className={styles.grid}>
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className={styles.gridRow}>
                  {row.map((member, idx) => (
                      <div
                          key={member.name}
                          className={styles.fadeIn}
                          style={{ animationDelay: `${(rowIndex * 4 + idx) * 0.05}s` }}
                      >
                        <EboardMember {...member} />
                      </div>
                  ))}
                </div>
            ))}
          </div>
        </div>
      </>
  );
};

export default EboardSection;