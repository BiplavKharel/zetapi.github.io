

// HomePage.tsx or AboutPage.tsx
import React, { useState } from 'react';
import PillarsSection from '../components/PillarsSection/PillarsSection';
import SystemMessage from '../components/SystemMessage/SystemMessage';

const AboutPage: React.FC = () => {
  const [showPillars, setShowPillars] = useState(false);

  return (
    <div>
      {!showPillars && <SystemMessage onClose={() => setShowPillars(true)} />}
      {showPillars && <PillarsSection />}
    </div>
  );
};

export default AboutPage;