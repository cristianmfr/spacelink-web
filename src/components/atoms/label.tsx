import { cva, VariantProps } from 'class-variance-authority'
import { forwardRef, LabelHTMLAttributes } from 'react'

import { cn } from '../../lib/utils/cn'

const labelVariants = cva('text-white antialiased', {
    variants: {
        variant: {
            body: 'text-xs font-normal',
            footnote: 'text-xxs font-normal',
            title: 'text-md font-semibold',
            subtitle: 'text-sm font-normal',
            heading: 'text-lg font-semibold',
            pageTitle: 'text-smx font-semibold',
        },
    },
    defaultVariants: {
        variant: 'body',
    },
})

interface LabelProps
    extends LabelHTMLAttributes<HTMLLabelElement>,
        VariantProps<typeof labelVariants> {}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
    ({ variant, children, className, ...props }) => {
        return (
            <label
                className={cn(labelVariants({ variant, className }))}
                {...props}
            >
                {children}
            </label>
        )
    }
)
