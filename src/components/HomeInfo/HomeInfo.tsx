import React, { useRef } from 'react';
import PillarsSection from "../PillarsSection/PillarsSection";
import styles from "./HomeInfo.module.css";
import homeImage1 from '../../assets/HomeImages/HomeImage1.jpg';
import homeImage2 from '../../assets/HomeImages/HomeImage2.jpeg';

const HomeInfo: React.FC = () => {
    const pillarsRef = useRef<HTMLDivElement | null>(null);

    const handleScrollToPillars = () => {
        if (pillarsRef.current) {
            pillarsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
      <>
        <div className={styles.homeInfoWrapper}>
          {/* Left side system message info */}
          <div className={styles.left}>
            <section className={styles.wrapper}>
              <div className={styles.window}>
                <div className={styles.header}>
                  <span>System Message</span>
                </div>
                <div className={styles.body}>
                  <h2 className={styles.welcomeTitle}>Welcome to Zeta Pi!</h2>
                    <p>
                      At Zeta Pi, our mission is to foster a community of passionate and innovative technology 
                      enthusiasts who are dedicated to advancing their skills, knowledge, and impact in the 
                      ever-evolving landscape of technology.
                      <br /><br />
                      Through collaboration, mentorship, and a commitment to excellence, we strive to create an
                      environment where members can thrive both personally and professionally.
                    </p>
                    <div className={styles.actions}>
                      <button className={styles.ok} onClick={handleScrollToPillars}>OK</button>
                    </div>
                  </div>
                </div>
              </section>
          </div>


          {/* Right side images */}
          <div className={styles.right}>
            <div className={styles.imageBox}>
              <img src={homeImage1} alt="Zeta Pi group picture 1" className={styles.image} />
            </div>
            <div className={styles.imageBox}>
              <img src={homeImage2} alt="Zeta Pi group picture 2" className={styles.image} />
            </div>
          </div>
        </div>

        <div ref={pillarsRef}>
          <PillarsSection />
        </div>
      </>
    );
};

export default HomeInfo;