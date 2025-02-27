import styles from './Contact.module.css';
import { Text, Button } from '../../components';

export const Contact = () => {
    return (
        <section id="contact" className={`${styles.contact} container section`}>
            <h2 className={styles.title}>Let's talk business</h2>
            <Text>Whether you are starting a project, have business
                inquiries or just want to say hi, inbox is always open so feel free to reach out and
                I will get back to you as soon as possible.
            </Text>
            <a className="contact_btn btn" target="_blank" href="mailto:lucas.macias.atala@gmail.com">
                <Button ariaLabel='contact email'>Reach Out</Button>
            </a>
        </section>
    )
}