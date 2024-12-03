/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from 'clsx'
import { Label } from './label'
import { UseFormRegisterReturn } from 'react-hook-form'

interface TextAreaProps {
    label?: string
    placeholder?: string
    value?: string
    readonly?: boolean
    variant?: 'default' | 'alternative'
    width?: 'small' | 'medium' | 'large' | 'full' | 'auto'
    className?: string
    register?: any
    registration?: Partial<UseFormRegisterReturn>
    error?: string
}

export const TextArea = ({
    label,
    placeholder,
    value,
    readonly,
    width = 'full',
    className,
    registration,
    variant = 'default',
    error,
}: TextAreaProps) => {
    if (variant === 'alternative') {
        return (
            <div
                className={clsx(
                    className,
                    width === 'small' && 'w-sm',
                    width === 'medium' && 'w-md',
                    width === 'large' && 'w-lg',
                    width === 'full' && 'w-full',
                    width === 'auto' && 'w-auto',
                    'flex flex-col gap-2'
                )}
            >
                {label && (
                    <span className='font-medium antialiased text-xsx text-[#828D9E]'>
                        {label}
                    </span>
                )}
                <div
                    className={clsx(
                        'flex flex-row w-full h-xl border-b-thin border-[#DEDEDE] bg-transparent min-h-md'
                    )}
                >
                    <textarea
                        readOnly={readonly}
                        value={value}
                        placeholder={placeholder}
                        className='flex w-full overflow-hidden bg-transparent outline-none font-light placeholder:text-[#C8D1E0] resize-none'
                        {...registration}
                    />
                </div>
            </div>
        )
    }

    if (variant === 'default') {
        return (
            <div
                className={clsx(
                    className,
                    width === 'small' && 'w-sm',
                    width === 'medium' && 'w-md',
                    width === 'large' && 'w-lg',
                    width === 'full' && 'w-full',
                    width === 'auto' && 'w-auto',
                    'flex flex-col gap-2'
                )}
            >
                {label && (
                    <Label variant='body' className='font-medium'>
                        {label}
                    </Label>
                )}
                <div
                    className={clsx(
                        error
                            ? 'border-red-pure/20 bg-red-light/30'
                            : 'bg-high-light border-high-dark',
                        'flex flex-row w-full h-[200px] border-thin rounded-sm'
                    )}
                >
                    <textarea
                        readOnly={readonly}
                        value={value}
                        placeholder={placeholder}
                        className='flex w-full overflow-hidden bg-transparent outline-none px-xxs py-xxxs font-light resize-none'
                        {...registration}
                    />
                </div>
                {error && (
                    <span className='text-red-pure text-xxs font-light'>
                        {error}
                    </span>
                )}
            </div>
        )
    }
}
