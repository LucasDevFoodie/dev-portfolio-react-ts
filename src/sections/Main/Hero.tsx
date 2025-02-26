import {Image} from "../../components/Image";
import styles from "./Hero.module.css";
import HeroImage from "../../assets/images/hero_image.jpeg"
import {Text} from "../../components/Text";

const Hero = () => {
    return (
        <section className={`${styles.hero} container`}>
            <Image src={HeroImage} 
            alt="gentle profile picture"
            className={styles.img} >                
            </Image>
            <h2 className={styles.subtitle}>Hi, I'm Luke 👋</h2>
            <h1 className={styles.title}>FRONT-END<br /> WEB DEVELOPER</h1>
            <Text>A passionate <strong>front-end/full stack</strong> developer specialized in
            <br />delivering <strong>high quality software</strong> while enjoying teamwork!</Text>
        </section>
   )
}

export default Hero;