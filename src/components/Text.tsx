import styles from './Text.module.css';

export const Text = (props: React.ComponentPropsWithoutRef<'p'>) => {
    return (
        <p className={`${props.className ? props.className : ''} ${styles.text}`}>
            {props.children}
        </p>
        )
}