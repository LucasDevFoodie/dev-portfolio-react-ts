type ButtonProps = { //type alias
    ariaLabel: string, /* Force to write ariaLabels */
    className?: string,
    children?: React.ReactNode
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = (props: ButtonProps) => {
    const {children, ariaLabel, ...rest} = props;
    return (
        <button aria-label={ariaLabel} {...rest}
            >
            {children}
        </button>
    )
}

export default Button;