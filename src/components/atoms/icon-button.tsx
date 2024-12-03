import { cva, VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes, forwardRef } from 'react'

import { cn } from '../../lib/utils/cn'

const buttonVariants = cva(
    'flex flex-row gap-1 items-center px-xxxs justify-center w-full hover:brightness-95 transition ease-in',
    {
        variants: {
            variant: {
                primary: 'bg-primary-pure text-high-pure',
                secondary: 'bg-secondary-pure text-high-pure',
                low: 'bg-[#114EB8] text-high-pure',
                redLow: 'bg-[#A90000] text-high-pure',
                light: 'bg-high-light text-low-pure',
                white: 'bg-high-pure text-low-pure',
                dark: 'bg-low-dark text-high-pure',
                destructive: 'bg-red-pure text-high-pure',
                disabled:
                    'bg-high-medium text-low-light/50 hover:brightness-100 cursor-not-allowed',
                outline:
                    'bg-transparent text-primary-medium border border-[2px] border-primary-medium/90 hover:backdrop-blur-sm hover:bg-primary-light/30 hover:brightness-100',
                text: 'bg-transparent text-low-dark font-normal antialiased text-xxs',
            },
            rounded: {
                default: 'rounded-sm',
                sharp: 'rounded-none',
                pill: 'rounded-pill',
            },
            size: {
                small: 'h-sm w-[40px] font-normal antialised',
                medium: 'h-md w-[52px] font-medium antialised text-xs',
                large: 'h-lg w-[64px] font-medium antialised text-sm',
            },
            border: {
                none: '',
                thin: 'border-thin',
                medium: 'border-medium',
                bold: 'border-bold',
            },
        },
        defaultVariants: {
            variant: 'primary',
            rounded: 'default',
            size: 'medium',
            border: 'none',
        },
    }
)

interface IconButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ variant, rounded, border, size, ...props }) => {
        return (
            <button
                className={cn(
                    buttonVariants({ variant, rounded, border, size })
                )}
                {...props}
            ></button>
        )
    }
)
