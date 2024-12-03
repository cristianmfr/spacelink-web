import { Route, Routes } from 'react-router-dom'

import { SignIn } from './sign-in'
import { SignUp } from './sign-up'
import { ForgotPassword } from './forgot-password'
import { ResetPassword } from './reset-password'

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path='login' element={<SignIn />} />
            <Route path='cadastro' element={<SignUp />} />
            <Route path='recuperacao' element={<ForgotPassword />} />
            <Route path='recuperar-senha' element={<ResetPassword />} />
        </Routes>
    )
}
