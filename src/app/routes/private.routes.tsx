import { Suspense } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AppLayout } from '../layouts/app.layout'
import { DashboardRoutes, GroupsRoutes, UsersRoutes } from '../pages/app/routes'

// eslint-disable-next-line react-refresh/only-export-components
const AppRoutes = () => {
    const isAppRoute = window.location.pathname.includes('app')

    return (
        <AppLayout>
            <Suspense>
                {isAppRoute && <DashboardRoutes />}
                <Outlet />
            </Suspense>
        </AppLayout>
    )
}

export const privateRoutes = [
    {
        path: '/app',
        element: <AppRoutes />,
        exact: true,
        children: [
            { path: 'grupos/*', element: <GroupsRoutes /> },
            { path: 'usuarios/*', element: <UsersRoutes /> },
            { path: '*', element: <Navigate to='/app' /> },
        ],
    },
    { path: '*', element: <Navigate to='/app' /> },
]
