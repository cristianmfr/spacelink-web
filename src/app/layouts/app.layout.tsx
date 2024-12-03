import { useState } from 'react'
import {
    Bell,
    SignOut,
    TextIndent,
    TextOutdent,
    UserCircle,
    UsersThree,
} from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'

import { useQuery } from '@apollo/client'
import { GET_CURRENT_USER } from '../../graphql/database/queries/get-current-user.query'
import { useAuth } from '../../lib/hooks/auth.hook'
import { Popover } from '../../components/atoms/popover'
import { AsideMenu } from '../../components/organisms/aside'
import { SliderSheet } from '../../components/atoms/slider-sheet'

interface AppLayoutProps {
    children: React.ReactNode
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    const navigate = useNavigate()
    const { data: me } = useQuery(GET_CURRENT_USER)
    const { signOut } = useAuth()

    const [notification, setNotification] = useState(false)
    const [profileMenu, setProfileMenu] = useState(false)
    const [asideType, setAsideType] = useState<'small' | 'large'>('large')

    return (
        <>
            <div className='absolute top-0 w-full h-[60px] border-b-thin border-gray-800 bg-gray-900 z-30 shadow-md'>
                <div
                    className={clsx(
                        asideType === 'large' &&
                            'grid grid-cols-12 w-full h-full',
                        asideType === 'small' &&
                            'grid grid-cols-20 w-full h-full'
                    )}
                >
                    <div
                        className={clsx(
                            asideType === 'large' &&
                                'col-span-2 flex flex-row w-full h-full items-center justify-between pl-3 pr-3',
                            asideType === 'small' &&
                                'col-span-1 flex flex-row w-full h-full items-center justify-center'
                        )}
                    >
                        <div className='flex flex-row gap-2 items-center'>
                            {/* {asideType === 'large' && (
                                <img src={Logo} alt='Logo' width={140} />
                            )}

                            {asideType === 'small' && (
                                <img src={Icon} alt='Logo' width={42} />
                            )} */}
                        </div>
                        {asideType === 'large' && (
                            <button
                                className='text-secondary-medium hover:bg-primary-light/50 p-2 rounded-xs -mr-1 transition ease-in'
                                onClick={() => setAsideType('small')}
                            >
                                <TextOutdent size={18} weight='bold' />
                            </button>
                        )}
                    </div>
                    <div
                        className={clsx(
                            asideType === 'large' &&
                                'col-span-10 flex flex-row w-full h-full items-end justify-between px-xxs',
                            asideType === 'small' &&
                                'col-span-19 flex flex-row w-full h-full items-end justify-between px-xxs'
                        )}
                    >
                        <div className='flex flex-row w-full items-center gap-xs'>
                            {asideType === 'small' && (
                                <div className='flex flex-col h-full items-center justify-center'>
                                    <button
                                        className='text-secondary-medium hover:bg-primary-light/50 p-2 rounded-xs -mr-1 transition ease-in'
                                        onClick={() => setAsideType('large')}
                                    >
                                        <TextIndent size={18} weight='bold' />
                                    </button>
                                </div>
                            )}
                            <div className='flex flex-row items-end gap-xs'>
                                <div className='flex flex-row gap-xs h-[60px] overflow-hidden'>
                                    <button className='flex flex-col h-full items-center justify-end -mb-[5px]'>
                                        <span className='mb-[14px] text-xxs font-medium antialiased text-primary-light'>
                                            Gerenciamento
                                        </span>
                                        <div className='h-[9px] -mb-1 rounded-[4px] w-[30px] bg-primary-light'></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row items-center justify-center h-full gap-xxs'>
                            <button
                                className='text-white/75'
                                onClick={() => setNotification(true)}
                            >
                                <div className='absolute bg-red-500 w-[16px] h-[16px] rounded-full text-[10px] ml-3 -mt-1'>
                                    <span className='flex flex-col w-full h-full items-center justify-center text-white'>
                                        5
                                    </span>
                                </div>
                                <Bell size={24} weight='bold' />
                            </button>
                            <button
                                onClick={() => setProfileMenu(true)}
                                className='flex flex-col bg-primary-dark rounded-full w-[40px] h-[40px] text-white items-center justify-center transition ease-in hover:brightness-95'
                            >
                                {me?.getCurrentUser.name?.slice(0, 1)}
                                {me?.getCurrentUser.surname?.slice(0, 1)}
                            </button>
                            <Popover
                                isOpen={profileMenu}
                                onClose={() => setProfileMenu(false)}
                                className='mr-xxl mt-[200px]'
                            >
                                <button
                                    onClick={() => navigate('me')}
                                    className='flex flex-row items-center w-full gap-2 hover:bg-high-medium/50 transition ease-in rounded-sm h-[44px] px-xxxs text-xxs font-normal antialiased'
                                >
                                    <UserCircle size={20} />
                                    <span>Meu Perfil</span>
                                </button>
                                <button
                                    onClick={() => navigate('usuarios')}
                                    className='flex flex-row items-center w-full gap-2 hover:bg-high-medium/50 transition ease-in rounded-sm h-[44px] px-xxxs text-xxs font-normal antialiased'
                                >
                                    <UsersThree size={20} />
                                    <span>Usuários</span>
                                </button>
                                <button
                                    onClick={signOut}
                                    className='flex flex-row w-full items-center gap-2 hover:bg-red-light/50 text-red-pure transition ease-in rounded-sm h-[44px] px-xxxs text-xxs font-normal antialiased'
                                >
                                    <SignOut size={20} />
                                    <span>Sair</span>
                                </button>
                            </Popover>
                        </div>
                    </div>
                </div>
            </div>
            {asideType === 'small' && (
                <div className='grid grid-cols-20 h-full bg-gray-950'>
                    <AsideMenu type='small' className='col-span-1 z-10' />
                    <div className='col-span-19 overflow-scroll scrollbar-hide h-full'>
                        <div className='grid-in-content scrollbar-hide h-full relative pt-[90px] px-xxxs'>
                            {children}
                        </div>
                    </div>
                </div>
            )}

            {asideType === 'large' && (
                <div className='grid grid-cols-12 h-full bg-gray-950'>
                    <AsideMenu type='large' className='col-span-2 z-10' />
                    <div className='col-span-10 overflow-scroll scrollbar-hide h-full'>
                        <div className='grid-in-content scrollbar-hide h-full relative pt-[90px] px-xxxs'>
                            {children}
                        </div>
                    </div>
                </div>
            )}
            <SliderSheet
                isOpen={notification}
                onClose={() => setNotification(false)}
            >
                <div className='flex flex-col w-full h-full gap-2'></div>
            </SliderSheet>
        </>
    )
}
