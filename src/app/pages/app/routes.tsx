import { Route, Routes } from 'react-router-dom'
import { Board } from './dashboard/board'
import { UsersList } from './users/users-list'
import { GroupsList } from './group/groups-list'

export const DashboardRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Board />} />
        </Routes>
    )
}

export const UsersRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<UsersList />} />
        </Routes>
    )
}

export const GroupsRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<GroupsList />} />
        </Routes>
    )
}
