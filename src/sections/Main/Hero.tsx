import { Image, Text, Button } from "../../components";
import styles from "./Hero.module.css";
import { Images } from "../../assets/Images";

export const Hero = () => {
    return (
        <section className={`${styles.hero} container`}>
            <Image src={Images.hero}
                alt="gentle profile picture"
                className={styles.img} >
            </Image>
            <h2 className={styles.subtitle}>Hi, I'm Luke 👋</h2>
            <h1 className={styles.title}>FRONT-END<br /> WEB DEVELOPER</h1>
            <Text>A passionate <strong>front-end/full stack</strong> developer specialized in
                <br />delivering <strong>high quality software</strong> while enjoying teamwork!</Text>
                <a target="_blank" href="mailto:lucas.macias.atala@gmail.com">
            <Button ariaLabel='contact email'>
                Reach Out
            </Button >
                </a>
        </section>
   )
}