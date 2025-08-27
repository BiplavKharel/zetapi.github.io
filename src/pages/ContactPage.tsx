import styles from "../components/ContactForm/ContactForm.module.css";
import ContactForm from "../components/ContactForm/ContactForm.tsx"

export default function Contact() {
    return (
        <div className={styles.contactWrapper}>
            <h2 className={styles.contactTitle}>Contact Us!</h2>
            <ContactForm />
        </div>

    );
}