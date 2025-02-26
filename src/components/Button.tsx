interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> { 
    ariaLabel: string, /* Force to write aria-labels */   
}

export const Button = (props: ButtonProps) => {
    const {children, ariaLabel, ...rest} = props;
    return (
        <button aria-label={ariaLabel} {...rest}
            >
            {children}
        </button>
    )
}