import styles from './WebBar.module.css'
import Button from '../../components/Button'
import Links from '../../data/sections';
import { MouseEventHandler } from 'react';

const WebBar = ({handleThemeToggle}: {handleThemeToggle: MouseEventHandler}) => {
    return (
        <header className={`${styles.header} container`}>
            <nav>
                <ul className={styles.menu}>
                    {Links.map(link => (
                        <li key={link.id}>
                            <a className={styles.link} href={link.href}>{link.name}</a>
                        </li>
                    ))
                    }
                    <li className={styles.line}></li>
                    <li>
                        <Button ariaLabel='theme toggle button'
                            className={styles.icon}
                            onClick={(e) => {handleThemeToggle(e)}
                            }>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                            </svg>
                        </Button>
                    </li>
                    <li>
                        <a className={`${styles.resume} btn`} download='Lucas-Atala-Resume' href='/Lucas-Atala-Resume.pdf'>Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default WebBar;