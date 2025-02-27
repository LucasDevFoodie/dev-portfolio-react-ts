import { Button, Text, Image } from '../../components';
import { Images } from '../../assets/Images';

import styles from './Featured.module.css';

export const Featured = () => {
  return (
    <section id='featured' className='container section'>
      <h3 className={styles.subtitle}>Featured projects</h3>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Ppro Developer Hub</h2>
        <a target="_blank" href="https://developerhub.ppro.com/">
          <Button ariaLabel='button redirect website'>
            Website
          </Button>
        </a>
      </div>
      <Text>Front end development. Migration from Vue 2 to React18+ and
        creation of landing page with Figma in cooperation with UI/UX designer.
      </Text>
      <div className={styles.infoContainer}>
        <div>
          <h3 className={styles.label}>Tech Stack</h3>
          <ul className={styles.techStack}>
            <li className={styles.info}>Javascript/ReactJS</li>
            <li className={styles.info}>CSS/TailwindCSS</li>
            <li className={styles.info}>Vite</li>
            <li className={styles.info}>Figma</li>
            <li className={styles.info}>Readme.io</li>
          </ul>
        </div>
        <div>
          <h3 className={styles.label}>Project Type</h3>
          <p className={styles.info}>Front-End</p>
          <p className={styles.info}>JAMStack</p>
        </div>
        <div>
          <h3 className={styles.label}>Timeline</h3>
          <p className={styles.info}>Mid 2022 to Feb 2023</p>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <div className={styles.imgWrapper}>
          <Image lazyLoading={true} src={Images.pproWeb1} alt="ppro project hero" />
        </div>
        <div className={styles.imgWrapper}>
          <Image lazyLoading={true} src={Images.pproWeb2} alt="ppro project api" />
        </div>
        <div className={styles.imgWrapper}>
          <Image lazyLoading={true} src={Images.pproWeb3} alt="ppro project contact" />
        </div>
        <div className={styles.imgWrapper}>
          <Image lazyLoading={true} src={Images.pproWeb4} alt="ppro project documentation" />
        </div>
        <div className={styles.imgWrapper}>
          <Image lazyLoading={true} src={Images.pproWeb5} alt="ppro project next documentation page" />
        </div>
        <div className={styles.imgWrapper}>
          <Image lazyLoading={true} src={Images.pproMobile1} alt="ppro project mobile hero" />
        </div>
        <div className={styles.imgWrapper}>
          <Image lazyLoading={true} src={Images.pproMobile2} alt="ppro project mobile api" />
        </div>
        <div className={styles.imgWrapper}>
          <Image lazyLoading={true} src={Images.pproMobile3} alt="ppro project mobile contact" />
        </div>
      </div>
    </section>
  )
}