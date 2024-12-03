interface PageRootProps {
    children: React.ReactNode
}

export const PageRoot = ({ children }: PageRootProps) => {
    return <div className='flex flex-col w-full'>{children}</div>
}
