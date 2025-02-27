import styles from './Work.module.css'
import { Text, Image, Button } from '../../components'
import { Images } from '../../assets/Images'

export const Work = () => {
    return (


        <section className={`${styles.work} container section`}>
            <h2 className={styles.title}>Projects</h2>
            <Text className={styles.description}>This is a glance of the previous works were I was lucky to contribute to their
                success!
            </Text>
            <div className={styles.container}>
                <h3 className={styles.projectTitle}>My Local Foodie</h3>
                <div className={`${styles.imgWrapper} ${styles.image1}`}>
                    <Image lazyLoading={true} src={Images.projectMLF}
                        alt="My local foodie web page demo" /></div>
                <div className={styles.project}>
                    <h3 className={styles.projectTitleGrid}>My Local Foodie</h3>
                    <p className={styles.projectDescription}>Restaurant Manager and Distributors Software. Technologies: Django,
                        React16,
                        Webpack, PostgreSql</p>
                    <p className={styles.projectDetails}>Manual development were architecture, databases,libraries, styles, services
                        and
                        external apis are explained and reviewed thoroughly. Rebranding for the new look and feel of the core hub
                        and
                        support for new tasks.</p>
                    <a target="_blank" href="https://mylocalfoodie.com.au/">
                        <Button ariaLabel='link website mylocalfoodie'>
                            Website
                        </Button>
                    </a>
                </div>

                <h3 className={styles.projectTitle}>Alpha Fintech - PPRO</h3>
                <div className={`${styles.imgWrapper} ${styles.image2}`}>
                    <Image lazyLoading={true} src={Images.projectAlpha}
                        alt="Alpha fintech Hub web page demo" /></div>
                <div className={styles.project}>
                    <h3 className={styles.projectTitleGrid}>Alpha Fintech - PPRO</h3>
                    <p className={styles.projectDescription}>Saas - Payment Gateway. Technologies: ASP.net 4 and Core, React18+/Hooks,
                        Vue
                        2/Vuex, MUI/Tailwind, EF Core, MongoDB/PostgreSql.</p>
                    <p className={styles.projectDetails}>Platform for merchants under Vue and migration to React18+ with
                        micro-architecture. Models and controllers migration to BFB architecture
                        Dashboard design with Sisense and PowerBi integration. Stored procedures and Transaction api under .Net
                        Core.
                        AWS Lambda functions (Terraform) for managing user pool authentication.</p>
                    <a className="btn work__project-btn" target="_blank"
                        href="https://appsource.microsoft.com/en-us/product/web-apps/alphafintech.alphahub_azure?tab=overview">
                        <Button ariaLabel='Alpha fintech Hub web page demo'>
                            Website
                        </Button>
                    </a>
                </div>

                <h3 className={styles.projectTitle}>Wheelsky</h3>
                <div className={`${styles.imgWrapper} ${styles.image3}`}>
                    <Image lazyLoading={true} src={Images.projectWheelsky}
                        alt="Wheelsky inline skate web page demo" /></div>
                <div className={styles.project}>
                    <h3 className={styles.projectTitleGrid}>Wheelsky</h3>
                    <p className={styles.projectDescription}>Ecommerce solution for inline skates shop. Technologies: React18+, Vite,
                        MUI/Kendo, i18n, MongoDB, Vercel</p>
                    <p className={styles.projectDetails}>Fullstack solo development for a inline skate company that required payment
                        methods integration, carousel for products and sales and a responsive design for their previous webpage.
                        Also, they required different sections with routing and a free deploy to reduce costs while transitioning to
                        a
                        bigger franchise.</p>
                    <a className="btn work__project-btn" target="_blank"
                        href="https://wheelsky.vercel.app/Wheelsky/Welcome">
                        <Button ariaLabel='Wheelsky inline skate web page demo'>Website</Button>
                    </a>
                </div>
            </div>
        </section>
    )
}