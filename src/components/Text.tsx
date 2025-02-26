import './Text.module.css';

export const Text = (props: React.ComponentPropsWithoutRef<'p'>) => {
    return (
        <p className={props.className}>
            {props.children}
        </p>
        )
}