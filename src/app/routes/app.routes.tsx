import { useLocation, useRoutes } from 'react-router-dom'
import { useEffect } from 'react'

import { useAuth } from '../../lib/hooks/auth.hook'
import { publicRoutes } from './public.routes'
import { privateRoutes } from './private.routes'

export const AppRoutes = () => {
    const { pathname } = useLocation()
    const { user, refreshUser } = useAuth()

    useEffect(() => {
        refreshUser()
    }, [refreshUser, pathname])

    const routes = user ? privateRoutes : publicRoutes
    const element = useRoutes([...routes])

    return <>{element}</>
}
