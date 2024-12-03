import { ApolloProvider } from '@apollo/client'
import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'

import { apolloClient } from '../../config/apollo.config'

interface RootProviderProps {
    children: React.ReactNode
}

export const RootProvider = ({ children }: RootProviderProps) => {
    return (
        <Suspense>
            <ApolloProvider client={apolloClient}>
                <BrowserRouter>{children}</BrowserRouter>
            </ApolloProvider>
            <Toaster richColors position='top-right' />
        </Suspense>
    )
}
