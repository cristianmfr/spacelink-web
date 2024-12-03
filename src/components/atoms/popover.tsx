/* eslint-disable react-hooks/exhaustive-deps */
import clsx from 'clsx'
import { useEffect, useRef } from 'react'

interface PopoverProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
    className?: string
}

export const Popover: React.FC<PopoverProps> = ({
    isOpen,
    onClose,
    children,
    className,
}) => {
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                onClose()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    if (!isOpen) {
        return null
    }

    return (
        <div
            className={clsx(
                className,
                'absolute w-[200px] text-white p-2 bg-gray-900 border-thin border-gray-800 rounded-sm shadow-md shadow-secondary-medium/5'
            )}
            ref={dropdownRef}
        >
            {children}
        </div>
    )
}
