import { useState } from "react";
import { NavigationProps } from ".";
import Button from "../../components/Button";
import Links from "../../data/sections";
import styles from "./MobileBar.module.css";

const MobileBar = ({ props }: { props: NavigationProps }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    }

    return (

        <header className={`${styles.header} container`}>
            {isOpen ?
                <div className={styles.nav}>
                    <nav>
                        <ul className={styles.menu}>
                            {Links.map(link => (
                                <li key={link.id}>
                                    <a className={styles.link} href={link.href}>{link.name}</a>
                                </li>
                            ))
                            }
                            <li className={styles.linkLine}></li>
                            <li>
                                <Button ariaLabel='theme toggle button'
                                    className={styles.icon}
                                    onClick={(e) => {
                                        //Close mobile menu
                                        console.log('clicked on MobileNav')
                                        props.onClick(e)
                                    }
                                    }>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                        stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                                    </svg>
                                </Button>
                            </li>
                            <li>
                                <a className={styles.btn} download="Lucas-Atala-Resume" href="/Lucas-Atala-Resume.pdf">Resume</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                :

                <Button ariaLabel="navigation button" className={styles.bars} onClick={handleMenuClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd"
                            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                            clipRule="evenodd" />
                    </svg>
                </Button>}
        </header>
    )
}

export default MobileBar;