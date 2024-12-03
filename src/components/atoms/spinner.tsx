import clsx from 'clsx'

const sizes = {
    xxs: 'h-xxs w-xxs',
    xs: 'h-xs w-xs',
    sm: 'h-sm w-sm',
    md: 'h-md w-md',
    lg: 'h-lg w-lg',
    xl: 'h-xl w-xl',
}

const variants = {
    light: 'text-high-pure',
    primary: 'text-primary-pure',
}

export type SpinnerProps = {
    size?: keyof typeof sizes
    variant?: keyof typeof variants
    className?: string
}

export const Spinner = ({
    size = 'lg',
    variant = 'primary',
    className = '',
}: SpinnerProps) => {
    return (
        <>
            <svg
                className={clsx(
                    'animate-spin',
                    sizes[size],
                    variants[variant],
                    className
                )}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                data-testid='loading'
            >
                <path
                    fill='currentColor'
                    d='M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z'
                >
                    <animateTransform
                        attributeName='transform'
                        dur='1.125s'
                        repeatCount='indefinite'
                        type='rotate'
                        values='0 12 12;360 12 12'
                    />
                </path>
            </svg>
            <span className='sr-only'>Loading</span>
        </>
    )
}
