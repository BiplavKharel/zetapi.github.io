import React, { useState } from 'react';
import styles from './FAQSection.module.css';

type FAQItem = {
    question: string;
    answer: string;
};

const faqData: FAQItem[] = [
    {
        question: 'How do I join?',
        answer: `We recruit new members at the beginning of every fall and winter semester. We
                 require that you have at least three semesters left at the university, 
                 otherwise everyone is welcome to apply! For Rush dates and more details, see 
                 the rush section.`,
    },
    {
        question: 'How is a tech frat different from a social frat?',
        answer: `The difference between professional frats and social frats typically is
                 the focus on professional development as well as the absence of a shared
                 living space. In other words, unlike your typical frat or sorority on 
                 campus, Brothers in Zeta Pi are not required to live together in a house.
                 Although there is a strong emphasis of community and brotherhood in Zeta Pi,
                 membership aims to aid you in your professional and academic career. Most
                 events are completely optional and only exist for the benefit of the brothers.`,
    },
    {
        question: 'How much of a time commitment is being a Brother?',
        answer: `The answer to this question entirely depends on you! There are about two
                 events a month that Brothers are required to attend, and on top of that
                 each Brother must attend 5 additonal events at some point in the semester.
                 In total, the baseline time commitment is about two hours a week. That
                 being said, Brothers are encouraged to join committees and attend our events
                 as much as they can to maximize their experience in Zeta Pi.`
    },
    {
        question: 'What is a Big/Little mentorship?',
        answer: `Big/Little mentorship pairs less experienced "Littles" with more experienced
                 "Bigs" that act as mentors to help guide Brothers both professionally and
                 academically. Bigs act as a safety net for their Littles and help them
                 assimilate into the frat after their initiation. Big/Little reveals take
                 place during Pledge initiation each semester, and are based on the connections
                 made between Pledges and Brothers during the pledging process.`
    },
    {
        question: 'How do I join a committee?',
        answer: `Any Brother can join a committee at any time during the semester, and can
                 be in as many as they like! Elections for committee heads are held every
                 year before winter break. Most events put on my our committees are exclusive
                 to only the Brothers of Zeta Pi.`
    },
];

const FAQSection: React.FC = () => {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    const toggleQuestion = (index: number) => {
        setOpenIndexes((prev) => {
            if (prev.includes(index)) {
                return prev.filter(i => i !== index);
            } else {
                return [...prev, index];
            }
        });
    };

    return (
        <div className={styles.faqPage}>
            <div className={styles.pageHeader}>
                <h2>Frequently Asked Questions</h2>
            </div>

            <ul className={styles.faqList}>
                {faqData.map((item, index) => (
                    <li className={`${styles.faqBox} ${openIndexes.includes(index) ? styles.openBox : ''}`}
                        key={index}
                    >
                        {/* Only the question header toggles the FAQ Box */}
                        <div 
                            className={styles.questionText}
                            onClick={() => toggleQuestion(index)}
                        >
                            <h3 className={styles.question}>{item.question}</h3>
                        </div>

                        <p className={`${styles.answer} ${openIndexes.includes(index) ? styles.open : ''}`}
                        >
                          {item.answer}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FAQSection;

















// old logic, not using state
/*
const FAQSection: React.FC = () => {
    return (
        <div className={styles.faqPage}>
            <div className={styles.pageHeader}>
                <h2>Frequently Asked Questions</h2>
            </div>

            <div className={styles.faqDetails}>
                <section className={styles.question}>
                    <div className={styles.questionText}>
                        <h3>How do I join?</h3>
                        <p>
                           We recruit new members at the beginning of every fall and winter semester. We
                           require that you have at least three semesters left at the university, 
                           otherwise everyone is welcome to apply! For Rush dates and more details, see 
                           the <a href="rush.html" className={styles.rushLink}>rush</a> section. 
                        </p>
                    </div>
                </section>

                <section className={styles.question}>
                    <div className={styles.questionText}>
                        <h3>How is a tech frat different from a social frat?</h3>
                        <p>
                           The difference between professional frats and social frats typically is
                           the focus on professional development as well as the absence of a shared
                           living space. In other words, unlike your typical frat or sorority on 
                           campus, Brothers in Zeta Pi are not required to live together in a house.
                           Although there is a strong emphasis of community and brotherhood in Zeta Pi,
                           membership aims to aid you in your professional and academic career. Most
                           events are completely optional and only exist for the benefit of the brothers. 
                        </p>
                    </div>
                </section>

                <section className={styles.question}>
                    <div className={styles.questionText}>
                        <h3>How much of a time commitment is being a Brother</h3>
                        <p>
                           The answer to this question entirely depends on you! There are about two
                           events a month that Brothers are required to attend, and on top of that
                           each Brother must attend 5 additonal events at some point in the semester.
                           In total, the baseline time commitment is about two hours a week. That
                           being said, Brothers are encouraged to join committees and attend our events
                           as much as they can to maximize their experience in Zeta Pi. 
                        </p>
                    </div>
                </section>

                <section className={styles.question}>
                    <div className={styles.questionText}>
                        <h3>What is a Big/Little mentorship?</h3>
                        <p>
                           Big/Little mentorship pairs less experienced "Littles" with more experienced
                           "Bigs" that act as mentors to help guide Brothers both professionally and
                           academically. Bigs act as a safety net for their Littles and help them
                           assimilate into the frat after their initiation. Big/Little reveals take
                           place during Pledge initiation each semester, and are based on the connections
                           made between Pledges and Brothers during the pledging process. 
                        </p>
                    </div>
                </section>

                <section className={styles.question}>
                    <div className={styles.questionText}>
                        <h3>How do I join a committee?</h3>
                        <p>
                           Any Brother can join a committee at any time during the semester, and can
                           be in as many as they like! Elections for committee heads are held every
                           year before winter break. Most events put on my our committees are exclusive
                           to only the Brothers of Zeta Pi.
                        </p>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default FAQSection; */