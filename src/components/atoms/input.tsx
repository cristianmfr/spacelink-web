import { Eye, EyeClosed } from '@phosphor-icons/react'
import clsx from 'clsx'
import { useState } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface InputProps {
    label?: string
    placeholder?: string
    value?: string | number
    readonly?: boolean
    variant?: 'default' | 'alternative'
    type?: 'text' | 'number' | 'password' | 'date'
    width?: 'small' | 'medium' | 'large' | 'full' | 'auto'
    className?: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register?: any
    registration?: Partial<UseFormRegisterReturn>
    error?: string
}

export const Input = ({
    label,
    placeholder,
    type = 'text',
    value,
    readonly,
    width = 'full',
    className,
    registration,
    variant = 'default',
    error,
}: InputProps) => {
    const [isVisible, setIsVisible] = useState(false)

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
                    'flex flex-col'
                )}
            >
                {label && (
                    <span className='font-medium antialiased text-xsx text-[#828D9E]'>
                        {label}
                    </span>
                )}
                <div
                    className={clsx(
                        error ? 'border-red-700' : 'border-[#DEDEDE]',
                        'flex flex-row w-full h-smx border-b-thin  bg-transparent'
                    )}
                >
                    <input
                        value={value}
                        type={type}
                        readOnly={readonly}
                        placeholder={placeholder}
                        className={clsx(
                            error ? 'bg-red-light/20' : 'bg-transparent',
                            'flex w-full overflow-hidden outline-none font-light placeholder:text-[#C8D1E0]',
                            '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                        )}
                        {...registration}
                    />
                </div>
                {error && (
                    <span className='text-red-pure text-xxs font-light mt-1'>
                        {error}
                    </span>
                )}
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
                    <span className='font-medium text-gray-100'>{label}</span>
                )}
                <div
                    className={clsx(
                        error
                            ? 'border-red-pure/20 bg-red-light/30'
                            : 'bg-gray-800 border-gray-700',
                        'flex flex-row w-full h-md border-thin rounded-sm'
                    )}
                >
                    <input
                        type={
                            type === 'password'
                                ? isVisible
                                    ? 'text'
                                    : 'password'
                                : type
                        }
                        value={value}
                        readOnly={readonly}
                        placeholder={placeholder}
                        className={clsx(
                            '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
                            'flex w-full overflow-hidden bg-transparent outline-none px-xxxs text-white font-light'
                        )}
                        {...registration}
                    />
                    {type === 'password' && (
                        <button
                            type='button'
                            className='text-secondary-dark/30 p-xxxs'
                            onClick={() => setIsVisible(!isVisible)}
                        >
                            {isVisible ? (
                                <Eye size={20} weight='bold' />
                            ) : (
                                <EyeClosed size={20} weight='bold' />
                            )}
                        </button>
                    )}
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
