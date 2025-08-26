import React from "react";
import styles from "./OurCommunity.module.css";

import img1 from '../../assets/CommunityImages/img1.jpg';
import img2 from '../../assets/CommunityImages/img2.jpg';
import img3 from '../../assets/CommunityImages/img3.jpg';
import img4 from '../../assets/CommunityImages/img4.jpg';
import img5 from '../../assets/CommunityImages/img5.jpg';
import img6 from '../../assets/CommunityImages/img6.jpg';
import img7 from '../../assets/CommunityImages/img7.jpg';
import img8 from '../../assets/CommunityImages/img8.jpg';
import img9 from '../../assets/CommunityImages/img9.jpg';
import img10 from '../../assets/CommunityImages/img10.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const OurCommunity: React.FC = () => {
    return (
      <section className={styles.carouselSection}>
        <h2 className={styles.header}>Join Our Community</h2>
        <div className={styles.carouselWrapper}>
          <div className={styles.carouselTrack}>
            {[...images, ...images].map((img, idx) => (
              <div className={styles.carouselItem} key={idx}>
                <img src={img} alt={`Community ${idx + 1}`} className={styles.image} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default OurCommunity;
