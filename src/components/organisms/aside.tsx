import clsx from 'clsx'
import { MenuItems } from './menu-item'
import {
    ChartDonut,
    UsersThree,
    GraduationCap,
    Gear,
} from '@phosphor-icons/react'

interface AsideProps {
    type: 'small' | 'large'
    className?: string
}

export type ChildrenAside = {
    name: string
    path: string
    activated?: boolean
}

export type AsideButtons = {
    icon: React.ReactNode
    name: string
    path: string
    activated?: boolean
    childrens?: ChildrenAside[]
}

export const AsideMenu = ({ type, className }: AsideProps) => {
    const menuItems: AsideButtons[] = [
        {
            icon: <ChartDonut size={24} />,
            name: 'Dashboard',
            path: 'dashboard',
            activated: true,
        },
        {
            icon: <UsersThree size={24} />,
            name: 'Usuários',
            path: 'usuarios',
            activated: true,
        },
        {
            icon: <GraduationCap size={24} />,
            name: 'Grupos',
            path: 'grupos',
            activated: true,
        },
        {
            icon: <Gear size={24} />,
            name: 'Configurações',
            path: 'configurações',
            activated: true,
        },
    ]

    return (
        <aside
            className={clsx(
                'bg-gray-900 border-r-thin border-gray-800',
                className
            )}
        >
            <div
                className={clsx(
                    type === 'large' &&
                        'flex flex-col w-full h-full p-xxxs pt-[75px] gap-2',
                    type === 'small' &&
                        'flex flex-col w-full h-full items-center pt-[75px] gap-2'
                )}
            >
                {menuItems.map((item) => (
                    <MenuItems
                        type={type}
                        icon={item.icon}
                        name={item.name}
                        path={item.path}
                        childrens={item.childrens}
                    />
                ))}
            </div>
        </aside>
    )
}
