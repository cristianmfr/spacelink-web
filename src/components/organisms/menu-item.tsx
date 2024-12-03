import clsx from 'clsx'
import { useLocation, useNavigate } from 'react-router-dom'
import { CaretDown, CaretUp } from '@phosphor-icons/react'
import { useState } from 'react'

export type ChildrenAside = {
    name: string
    path: string
    activated?: boolean
}

interface MenuItemsProps {
    type: 'small' | 'large'
    icon: React.ReactNode
    name: string
    path: string
    activated?: boolean
    childrens?: ChildrenAside[]
}

export const MenuItems = ({
    type,
    icon,
    name,
    path,
    activated,
    childrens,
}: MenuItemsProps) => {
    const navigate = useNavigate()
    const location = useLocation()

    const [open, setOpen] = useState(false)

    const isDashboardActive =
        path === 'dashboard' && location.pathname === '/app'
    const isOtherPath = path !== 'dashboard' && location.pathname.includes(path)

    const isActive = isDashboardActive || isOtherPath || (open && childrens)

    const MenuItemSubmit = () => {
        if (path === 'dashboard') {
            navigate('/app')
        } else {
            navigate(path)
        }
    }

    if (type === 'large') {
        return (
            <>
                <button
                    onClick={childrens ? () => setOpen(!open) : MenuItemSubmit}
                    className={clsx(
                        'flex flex-row w-full h-[52px] items-center justify-between gap-[6px] px-xxxs rounded-sm transition ease-in',
                        isActive || activated
                            ? 'bg-primary-light/10 text-primary-light'
                            : 'bg-transparent text-white hover:bg-primary-light/10 hover:text-primary-light'
                    )}
                >
                    <div className='flex flex-row items-center gap-2'>
                        <div>{icon}</div>
                        <span className='text-xxs font-medium antialiased'>
                            {name}
                        </span>
                    </div>
                    {childrens && (
                        <>
                            {open && <CaretUp size={16} weight='bold' />}
                            {!open && <CaretDown size={16} weight='bold' />}
                        </>
                    )}
                </button>
                {childrens && open ? (
                    <div className='bg-high-dark/30 rounded-md p-xxxs'>
                        {childrens?.map((item) => (
                            <button
                                onClick={() => navigate(item.path)}
                                className={clsx(
                                    'flex flex-row w-full h-[48px] items-center justify-start gap-[6px] px-xxxs rounded-sm transition ease-in',
                                    location.pathname.includes(item.path) ||
                                        activated
                                        ? 'bg-primary-light/70 text-primary-pure'
                                        : 'bg-transparent text-low-dark hover:bg-primary-light/70 hover:text-primary-pure'
                                )}
                            >
                                <span className='text-xxs font-medium antialiased'>
                                    {item.name}
                                </span>
                            </button>
                        ))}
                    </div>
                ) : undefined}
            </>
        )
    }

    if (type === 'small') {
        return (
            <button
                onClick={
                    path === 'dashboard'
                        ? () => navigate('/app')
                        : () => navigate(path)
                }
                className={clsx(
                    'flex flex-col w-[44px] h-[44px] items-center justify-center rounded-sm transition ease-in',
                    isActive || activated
                        ? 'bg-primary-light/70 text-primary-pure'
                        : 'bg-transparent text-low-dark hover:bg-primary-light/70 hover:text-primary-pure'
                )}
            >
                <div>{icon}</div>
            </button>
        )
    }
}
