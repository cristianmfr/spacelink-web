import { ReactNode } from 'react'

type PageContentProps = {
    children: ReactNode
}

export function PageContent({ children }: PageContentProps) {
    return <main className='flex flex-col w-full p-xxs gap-4'>{children}</main>
}
