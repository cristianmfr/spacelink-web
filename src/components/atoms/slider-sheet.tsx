import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { X } from '@phosphor-icons/react'

interface SliderSheetProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

export const SliderSheet: React.FC<SliderSheetProps> = ({
    isOpen,
    onClose,
    children,
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
                    className={`h-full w-full fixed top-0 bg-black/20 flex justify-center items-center z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={(event) => {
                        if (event.target === event.currentTarget) {
                            onClose()
                        }
                    }}
                >
                    <div
                        className={`bg-white h-full w-[400px] absolute right-0 overflow-scroll scrollbar-hide transition-transform duration-300 ${isOpen ? 'animate-sliderOpen' : 'animate-sliderClose'}`}
                    >
                        <div className='pt-xxxs px-xxxs flex items-center justify-between w-full'>
                            <span className='text-smx font-semibold antialiased z-20 ml-xxxs'>
                                Notificações
                            </span>
                            <button
                                className='w-xxs h-xxs rounded-xs flex items-center justify-center bg-gray-200/40 hover:bg-gray-200 text-low-medium transition ease-in'
                                onClick={onClose}
                            >
                                <X size={14} weight='bold' />
                            </button>
                        </div>
                        <div className='pt-xxxs pb-xs px-xxxs overflow-scroll scrollbar-hide'>
                            {children}
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    )
}
