import styles from './Button.module.css';

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> { 
    ariaLabel: string, /* Force to write aria-labels */   
}

export const Button = (props: ButtonProps) => {
    const {children, className = styles.btn, ariaLabel, ...rest} = props;

    return (
        <button className={className} aria-label={ariaLabel} {...rest}
            >
            {children}
        </button>
    )
}