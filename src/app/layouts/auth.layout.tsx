interface AuthLayoutProps {
    children: React.ReactNode
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <div className='flex flex-col w-full h-full items-center justify-center bg-gray-950'>
            {children}
        </div>
    )
}
