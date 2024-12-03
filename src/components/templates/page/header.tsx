import { Label } from '../../../components/atoms/label'

type PageHeaderProps = {
    children?: React.ReactNode
    title?: React.ReactNode
    subtitle?: React.ReactNode
}

export function PageHeader({ children, title, subtitle }: PageHeaderProps) {
    return (
        <header className='grid grid-cols-2 w-full h-[100px]'>
            <div className='flex flex-col w-full h-full justify-center items-start px-xs'>
                <Label variant='title'>{title}</Label>
                <Label
                    variant='body'
                    className='text-gray-400 antialiased font-normal -mt-2'
                >
                    {subtitle}
                </Label>
            </div>
            <div className='flex flex-col w-full h-full justify-center items-end px-xs'>
                {children}
            </div>
        </header>
    )
}
