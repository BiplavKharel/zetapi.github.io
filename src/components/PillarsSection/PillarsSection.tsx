import React from "react";
import styles from "./PillarsSection.module.css";

const pillars = [
  {
    title: "kindness",
    description:
      "Brotherhood at Zeta Pi is rooted in mutual support and service. Our members are encouraged to be there for one another, offering both emotional and professional guidance to help each other grow and succeed together.",
  },
  {
    title: "ambition",
    description:
      "At Zeta Pi, members are encouraged to pursue academic and professional growth. With access to resources through membership, we help each brother reach new heights and stay focused on long-term personal and career development.",
  },
  {
    title: "equality",
    description:
      "Zeta Pi values diversity and inclusion in all forms. We welcome individuals of all ethnicities, genders, sexualities, and neurotypes, creating a space where everyone feels seen, respected, and empowered to contribute authentically.",
  },
  {
    title: "balance",
    description:
      "Maintaining balance across academic, professional, and social spheres is vital. Zeta Pi provides the support you need to succeed in your field while prioritizing your mental health, wellbeing, and personal development.",
  },
];


const PillarsSection: React.FC = () => {
  return (
    <section className={styles.pillarsSection}>
      <h2 className={styles.header}>Our Pillars</h2>
      <div className={styles.pillarsGrid}>
        {pillars.map((pillar, idx) => (
          <div key={idx} className={styles.pillarCard}>
            <div className={styles.pillarCapital}></div>
            <div className={styles.pillarShaft}>
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarDescription}>{pillar.description}</p>
            </div>
            <div className={styles.pillarBase}></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PillarsSection;


// old
/*
const pillars = [
  {
    title: "kindness",
    description:
      "The foundation of brotherhood lies in group support and service. This means that the brothers in Zeta Pi should strive to assist each other and be there for one another, providing both emotional and professional support.",
  },
  {
    title: "ambition",
    description:
      "Our brothers are pushed to advance themselves both academically and professionally with the help of the resources provided to them through membership.",
  },
  {
    title: "equality",
    description:
      "In Zeta Pi, we stress the importance of diversity and inclusion, spanning across the fields of ethnicity, gender, sexuality and neurodivergence.",
  },
  {
    title: "balance",
    description:
      "Balance between a student's social, academic and professional lives is crucial for advancing in your field while maintaining a good mental health. We are here to support you in it.",
  },
];
= */