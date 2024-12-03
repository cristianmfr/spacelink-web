import { Player } from '@lottiefiles/react-lottie-player'

import SucessAnimation from '../../../assets/animations/success-white.json'
import { Modal } from '../../atoms/modal'
import { Button } from '../../atoms/button'

interface SuccessModalProps {
    title: string
    subtitle: string
    isOpen: boolean
    onClose: () => void
    primaryLabel: string
    primaryFunction: () => void
    secondaryLabel?: string
    secondaryFunction?: () => void
    blur?: boolean
}

export const SuccessModal = ({
    title,
    subtitle,
    isOpen,
    onClose,
    primaryLabel,
    primaryFunction,
    secondaryLabel,
    secondaryFunction,
    blur,
}: SuccessModalProps) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            closeButton={false}
            theme='blue'
            width='400px'
            blur={blur}
        >
            <div className='flex flex-col w-full items-center justify-center text-center'>
                <Player
                    loop={false}
                    autoplay
                    keepLastFrame
                    src={SucessAnimation}
                    style={{ height: '200px', width: '200px' }}
                />
                <span className='text-lg font-semibold text-white antialiased'>
                    {title}
                </span>
                <span className='w-4/5 text-white font-light text-xs antialiased'>
                    {subtitle}
                </span>
                <div className='flex flex-col w-full gap-2 mt-xs'>
                    <Button onClick={primaryFunction} variant='white'>
                        <span className='text-primary-pure'>
                            {primaryLabel}
                        </span>
                    </Button>
                    {secondaryLabel && (
                        <Button onClick={secondaryFunction} variant='low'>
                            <span>{secondaryLabel}</span>
                        </Button>
                    )}
                </div>
            </div>
        </Modal>
    )
}
