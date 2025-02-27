import styles from './Footer.module.css'
import { Image } from '../../components'
import { Images } from '../../assets/Images'

export const Footer = () => {
    return (
        <footer className={`${styles.footer} container section`}>
            <div className={styles.wrapper}>
                <h3 className={styles.label}>Thank you for visiting me!</h3>
                <h3 className={styles.label}> Reach me on Github & Linkedin</h3>
                <div className={styles.logos}>
                    <a className={styles.img} href="https://github.com/LucasDevFoodie" target="_blank">
                        <Image lazyLoading={true} src={Images.github} alt="Github logo" />
                    </a>
                    <a className={styles.img} href="https://www.linkedin.com/in/lucas-atala-99547a307" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" id="linkedin" data-supported-dps="34x34" fill="currentColor" width="34" height="34" focusable="false" className="lazy loading">
                            <g>
                                <path className="background-mercado" d="M34 2.5v29a2.5 2.5 0 01-2.5 2.5h-29A2.5 2.5 0 010 31.5v-29A2.5 2.5 0 012.5 0h29A2.5 2.5 0 0134 2.5zM10 13H5v16h5zm.45-5.5A2.88 2.88 0 007.5 4.6a2.9 2.9 0 100 5.8 2.88 2.88 0 002.95-2.9zM29 19.28c0-4.81-3.06-6.68-6.1-6.68a5.71 5.71 0 00-5.06 2.58h-.14V13H13v16h5v-8.51a3.32 3.32 0 013.23-3.59c1.59 0 2.77 1 2.77 3.52V29h5z"></path>
                            </g>
                        </svg>
                    </a>
                </div>
                <h4 className={styles.date}><strong>{new Date().getFullYear()}</strong></h4>
            </div>
        </footer>
    )
}