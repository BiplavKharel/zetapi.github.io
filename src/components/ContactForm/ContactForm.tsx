// TODO: display list of contact emails in case backend can't be contacted
'use client';

import styles from './ContactForm.module.css';
import React, { useState } from "react";
import { z } from "zod";

const inputValidator = z.object({
    name: z.string().min(2).max(30),
    email: z.string().max(64).email("invalid email"),
    message: z.string().min(16).max(256)
});

export default function ContactForm() {
    const [httpResponse, setResponseText] = useState("");

    async function handleSubmit(event: React.FormEvent<HTMLElement>) {
        // Override default form submission
        event.preventDefault();

        // Reset error messages
        setResponseText("");

        // Create FormData object form from inputs and stuff into a JSON object
        const formData = new FormData(event.target as HTMLFormElement);
        const contactData: { [entry: string]: string } = {};
        formData.forEach((val: FormDataEntryValue, key: string) => contactData[key] = (val as string));

        // Validate input (also done on backend)
        try {
            inputValidator.parse(contactData);
        } catch (error) {
            if (error instanceof z.ZodError) {
                let errorMsg = "";
                for (const key in error.issues) {
                    errorMsg += error.issues[key]["message"] + "\n";
                }
                setResponseText(errorMsg);
                return;
            }
        }
        const res: Response = await fetch('/submit',
            {
                headers: {"Content-Type": "application/json"},
                method: 'POST',
                body: JSON.stringify(contactData)
            });
        if (!res.ok) {
            setResponseText("server unreachable");
        } else {
            // Clear the form
            (event.target as HTMLFormElement).reset();
        }
    }
    return (
        <>
            {httpResponse && <p id={styles.formResponse}>{httpResponse}</p>}
            <form id={styles.contactForm} className="form-horizontal" onSubmit={handleSubmit}>
                <input id={styles.formName} name="name" className="form-input" placeholder="Name"/>
                <input id={styles.formEmail} name="email" className="form-input" placeholder="Email"/>
                <textarea id={styles.formMessage} name="message" className="form-input" placeholder="Message"></textarea>
                <button id={styles.formSubmit} className="form-button" type="submit">Submit</button>
            </form>
        </>
    );
}