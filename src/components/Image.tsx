interface ImageProps extends React.ComponentPropsWithoutRef<'img'> {
    lazyLoading?: boolean
}

export const Image = ({src, alt, className, lazyLoading = false}: ImageProps ) => {
    return (
        <img src={src} alt={alt} className={className} loading={lazyLoading ? 'lazy' : undefined}  />
    )
}