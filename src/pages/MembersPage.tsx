import React, { useState } from 'react';
import styles from './MembersPage.module.css';

import MembersNav from '../components/MembersNav/MembersNav';
import EboardSection from '../components/EboardSection/EboardSection';
import ActiveMembersSection from '../components/ActiveMembers/ActiveMembersSection';
// import AlumniSection from '../components/AlumniSection';

const MembersPage: React.FC = () => {
const [selectedCategory, setSelectedCategory] = useState('E-Board');

  const categories = ['E-Board', 'Active Members'];

  return (
    <div className={styles.page}>
      <MembersNav
        options={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <div className={styles.content}>
        {selectedCategory === 'E-Board' && <EboardSection />}
        {selectedCategory === 'Active Members' && <ActiveMembersSection />}
        {/* {selectedCategory === 'Alumni' && <AlumniSection />} */}
      </div>
    </div>
  );
};

export default MembersPage;
