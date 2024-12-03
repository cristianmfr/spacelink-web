/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from 'clsx'
import { UseFormRegisterReturn } from 'react-hook-form'
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'
import { Label } from '../atoms/label'

interface SearchInputProps {
    label?: string
    placeholder?: string
    width?: 'small' | 'medium' | 'large' | 'full' | 'auto'
    className?: string
    register?: any
    registration?: Partial<UseFormRegisterReturn>
}

export const SearchInput = ({
    label,
    placeholder,
    width = 'full',
    className,
    registration,
}: SearchInputProps) => {
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
                    'flex flex-row w-full items-center h-smx rounded-sm bg-gray-800'
                )}
            >
                <MagnifyingGlass
                    size={16}
                    weight='bold'
                    className='ml-xxxs -mr-[6px] text-[#828D9E]/80'
                />
                <input
                    type='text'
                    placeholder={placeholder}
                    className='flex w-full text-white overflow-hidden bg-transparent outline-none px-xxxs font-light text-xxs'
                    {...registration}
                />
            </div>
        </div>
    )
}
