import styles from './About.module.css'
import { Text, Image } from '../../components'
import { Images } from '../../assets/Images';

export const About = () => {

    return (
        <section id="about" className={`${styles.about} container section`}>
            <div className={styles.content}>
                <h2 className={styles.title}>About</h2>
                <Text>Hello and thank you for coming by! I'm Luke, a <strong>front-end/full
                    stack</strong> developer based in Australia.
                    I start the day with a good mate 🧉 and a bit of exercise 🏃‍♂️ before sitting in front of my computer 🖥️🖱️
                    After that, I focus on delivering the tasks with the best approach and under a Pomodoro schedule.</Text>
                <Text>Old teammates from previous jobs would say that I might be an overthinker and a
                    comedian. I couldn't agree more. They would also say that we had a great time building solutions togheter, for
                    sure.</Text>
                <hr></hr>
                <h3 className={styles.subtitle}>Technologies</h3>
                <div className={styles.techContainer}>
                    <div className={styles.techColumn}>
                        <div className={styles.techBox}>
                            <Image className={styles.techBoxImg} src={Images.skillsCSS} />
                            <p className={styles.techBoxText}>CSS</p>
                        </div>
                        <div className={styles.techBox}>
                            <Image className={styles.techBoxImg} src={Images.skillsJSTS} />
                            <p className={styles.techBoxText}>JS / TS</p>
                        </div>
                        <div className={styles.techBox}>
                            <Image className={styles.techBoxImg} src={Images.skillsREACT} />
                            <p className={styles.techBoxText}>React</p>
                        </div>
                    </div>
                    <div className={styles.techColumn}>
                        <div className={styles.techBox}>
                            <Image className={styles.techBoxImg} src={Images.skillsMONGO} />
                            <p className={styles.techBoxText}>Mongo</p>
                        </div>
                        <div className={styles.techBox}>
                            <Image className={styles.techBoxImg} src={Images.skillsPOSTGRE} />
                            <p className={styles.techBoxText}>Postgre</p>
                        </div>
                        <div className={styles.techBox}>
                            <Image className={styles.techBoxImg} src={Images.skillsCSHARP} />
                            <p className={styles.techBoxText}>C#</p>
                        </div>
                        <div className={styles.techBox}>
                            <Image className={styles.techBoxImg} src={Images.skillsNET} />
                            <p className={styles.techBoxText}>.Net</p>
                        </div>
                    </div>
                    <div className={styles.techColumn}>
                        <div className={styles.techBox}>
                            <Image className={styles.techBoxImg} src={Images.skillsNODE} />
                            <p className={styles.techBoxText}>Node.Js</p>
                        </div>
                        <div className={styles.techBox}>
                            <Image className={styles.techBoxImg} src={Images.skillsAWS} />
                            <p className={styles.techBoxText}>AWS</p>
                        </div>
                        <div className={styles.techBox}>
                            <Image className={styles.techBoxImg} src={Images.skillsGIT} />
                            <p className={styles.techBoxText}>Git</p>
                        </div>
                    </div>
            </div>
        </div>
        <div className={styles.imgWrapper}>
        <Image className={styles.img} src={Images.heroProfile} lazyLoading={true}
          alt="Business profile picture" />
      </div>
        </section >
    )
}