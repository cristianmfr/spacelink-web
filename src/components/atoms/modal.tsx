import { X } from '@phosphor-icons/react'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface ModalProps {
    title?: string | React.ReactNode
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
    width?: string
    height?: string
    maxHeight?: string
    closeButton?: boolean
    theme?: 'white' | 'blue' | 'red'
    blur?: boolean
}

export const Modal: React.FC<ModalProps> = ({
    title,
    isOpen,
    onClose,
    width = '455px',
    height,
    maxHeight = '90%',
    children,
    closeButton = true,
    theme = 'white',
    blur,
}) => {
    const [isVisible, setIsVisible] = useState(isOpen)

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true)
        } else {
            setTimeout(() => setIsVisible(false), 300)
        }
    }, [isOpen])

    if (!isVisible) return null

    return (
        <>
            {createPortal(
                <div
                    className={clsx(
                        blur && 'backdrop-blur-md',
                        `h-full w-full fixed top-0 bg-backdrop-pure flex justify-center items-center z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`
                    )}
                    onClick={(event) => {
                        if (event.target === event.currentTarget) {
                            onClose()
                        }
                    }}
                >
                    <div
                        style={{ width, maxHeight, height }}
                        className={clsx(
                            theme === 'white' &&
                                'bg-gray-900 border-thin border-gray-800',
                            theme === 'blue' && 'bg-primary-pure',
                            theme === 'red' && 'bg-[#CD0000]',
                            `rounded-md overflow-scroll scrollbar-hide transition-transform duration-300 ${isOpen ? 'animate-modalOpen' : 'animate-modalClose'}`
                        )}
                    >
                        <div className='pt-[20px] pl-xxxs pr-xxs flex justify-between items-center w-full'>
                            <span className='text-smx text-white font-semibold antialiased ml-2'>
                                {title}
                            </span>
                            {closeButton && (
                                <button
                                    className='w-[30px] h-[30px] text-white/50 bg-gray-800 hover:bg-high-medium/70 rounded-xs flex items-center justify-center transition-all'
                                    onClick={onClose}
                                >
                                    <X size={16} weight='bold' />
                                </button>
                            )}
                        </div>
                        <div className='pt-xxxs px-xs pb-xs overflow-scroll scrollbar-hide'>
                            {children}
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    )
}
