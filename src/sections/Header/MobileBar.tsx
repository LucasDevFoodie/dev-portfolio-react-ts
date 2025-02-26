import { MouseEventHandler, useCallback, useRef, useState } from "react";
import {Button} from "../../components/Button";
import Links from "../../data/sections";
import styles from "./MobileBar.module.css";

const MobileBar = ({ handleThemeToggle }: { handleThemeToggle: MouseEventHandler }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    const closeNav = useCallback(() => {
        if (navRef.current) {
            console.log(navRef.current)
            navRef.current.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }

    }, [isOpen])

    const handleMenuClick = useCallback(() => {
        setIsOpen(!isOpen);
        if (isOpen) {
            closeNav();
        }
        else {
            if (navRef.current) {
                navRef.current.style.display = 'flex';
                document.body.style.overflowY = 'hidden';
            }
        }
    }, [isOpen])

    return (
        <>
            <header className={`${styles.header} container`}>
                <Button ariaLabel="navigation button" className={styles.bars} onClick={handleMenuClick}>
                    {isOpen ?
                        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 490 490">
                            <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 
                                   489.292,457.678 277.331,245.004 489.292,32.337 "/>
                        </svg> :
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path fillRule="evenodd"
                                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                                clipRule="evenodd" />
                        </svg>
                    }
                </Button>
            </header>
            <div className={styles.nav} ref={navRef}>
                {isOpen &&
                    <nav >
                        <ul className={styles.menu}>
                            {Links.map(link => (
                                <li key={link.id}>
                                    <a className={styles.link} href={link.href} onClick={handleMenuClick}>{link.name}</a>
                                </li>
                            ))
                            }
                            <li className={styles.linkLine}></li>
                            <li>
                                <Button ariaLabel='theme toggle button'
                                    className={styles.icon}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        handleThemeToggle(e)
                                        handleMenuClick()
                                    }
                                    }>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                        stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                                    </svg>
                                </Button>
                            </li>
                            <li>
                                <a className={`${styles.resume} btn`} download="Lucas-Atala-Resume" href="/Lucas-Atala-Resume.pdf">Resume</a>
                            </li>
                        </ul>
                    </nav>
                }
            </div>
        </>
    )
}

export default MobileBar;