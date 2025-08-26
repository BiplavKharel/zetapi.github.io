import styles from './CommitteeSection.module.css';
import technology_committee from '../../assets/CommitteeIcons/technology_committee.png';
import professional_development_committee from '../../assets/CommitteeIcons/professional_development_committee.png';
import recruitment_and_membership_committee from '../../assets/CommitteeIcons/recruitment_and_membership_committee.png';
import social_committee from '../../assets/CommitteeIcons/social_committee.png';
import marketing_committee from '../../assets/CommitteeIcons/marketing_committee.png';
import fundraising_committee from '../../assets/CommitteeIcons/fundraising_committee.png';

const committees = [
    {
        name: 'Technology',
        image: technology_committee,
        bgColor: 'var(--color-accent-light)',
        description: `The Technology Committee covers three large domains in 
        our Fraternity. First, they are responsible for the development and 
        maintnenance of our official app and website. This fosters the learning 
        of web and app development skills to our members who are interested. 
        Second, the Technology Committee forms Project Teams between Brothers to bring 
        their technological creative ideas to life. At the end of each school year we 
        have a symposium for these teams to display their progress. Third, this committee 
        supports the technical skill building for the whole Fraternity, holding activities 
        such as hackathons, design jams, LeetCode grind sessions, and introductory tech workshops.`
    },
    {
        name: 'Professional Development',
        image: professional_development_committee,
        bgColor: 'white',
        description: `The Professional Development committee hosts events that aim to 
        aid brothers in advancing their careers and professional skills. Some events that 
        are hosted by this committee include mock interviews, resume workshops, lightning 
        talks, and professional headshots. Professional Development also maintains corporate 
        and Alumni connections. Additionally, this committee facilitates the formation of 
        study groups and team formation for classes as well as holding cram nights.`
    },
    {
        name: 'Recruitment & Membership',
        image: recruitment_and_membership_committee,
        bgColor: 'var(--color-accent-light)',
        description: `As the name implies, the Recruitment and Membership committee 
        handles rushing, pledging, and retaining membership in the Frat. Although 
        any brother can choose to attend rush events, and all are required to 
        participate in inducting the pledges each semester, the members of this 
        committee will be in charge of organizing and hosting these events. Members 
        are also responsible for tracking the participation of current brothers, 
        as each brother is required to attend at least 5 events or meetings every 
        semester in order to retain their standing.`
    },
    {
        name: 'Social',
        image: social_committee,
        bgColor: 'white',
        description: `The Social Committee organizes all of Zeta Pi's fun, non-academic 
        or professional events. Some typical events hosted by the social committee are 
        date parties, big/little events, the Zeta Pi Retreat, game nights, IM sports 
        and seasonal activities such as pumpkin carving and snowball fights.`
    },
    {
        name: 'Marketing',
        image: marketing_committee,
        bgColor: 'var(--color-accent-light)',
        description: `The Marketing Committee focuses on the design aspect of Zeta Pi. 
        Some responsibilities of members of this committee involve running the social 
        media, designing merch, creating advertising material for rush, and anything 
        else that involves an artistic touch (including the design of this website!).`
    },
    {
        name: 'Fundraising',
        image: fundraising_committee,
        bgColor: 'white',
        description: `Since Zeta Pi is meant to be inclusive for everyone, our dues 
        are kept low. Because of this, we must get funding for our events through other 
        means. Insert the fundraising committee! Members hold frequent fundraisers, 
        selling things like food, stickers and pins. Fundraising committee also works 
        closely with businesses and the univeristy to obtain grants.`
    },
];


export default function CommitteeSection() {
    return (
        <div className={styles.committeeDetails}>
            <h2 className={styles.title}>Our Committees</h2>

            {committees.map((committee, idx) => (
                <section
                    key={idx}
                    className={styles.committee}
                    style={{ backgroundColor: committee.bgColor }}
                >
                    <img
                        src={committee.image}
                        alt={`${committee.name} Icon`}
                        className={styles.image}
                    />
                    <div className={styles.committeeText}>
                        <h3>{committee.name}</h3>
                        <p>{committee.description}</p>
                    </div>
                </section>
            ))}
        </div>
    );
}