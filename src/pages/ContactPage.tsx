import styles from "../components/ContactForm/ContactForm.module.css";
import ContactForm from "../components/ContactForm/ContactForm.tsx"

export default function Contact() {
    return (
        <div id={styles.contactForm} className={styles.contactWrapper}>
            <h2>contact us!</h2>
            <ContactForm />
        </div>

    );
}