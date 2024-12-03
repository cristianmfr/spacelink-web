import { RootProvider } from './providers/root.provider'
import { AppRoutes } from './routes/app.routes'

export const App = () => {
    return (
        <RootProvider>
            <AppRoutes />
        </RootProvider>
    )
}
