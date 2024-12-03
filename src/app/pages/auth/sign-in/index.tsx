import { Button } from '../../../../components/atoms/button'
import { Input } from '../../../../components/atoms/input'
import { AuthLayout } from '../../../layouts/auth.layout'
import Logo from '../../../../assets/branding/logo.svg'
import { useForm } from 'react-hook-form'
import { SignInSchema } from './types/sign-in-schema'
import { Spinner } from '../../../../components/atoms/spinner'
import { useAuth } from '../../../../lib/hooks/auth.hook'

export const SignIn = () => {
    const { signIn, isLoggingIn, setIsLoggingIn } = useAuth()

    const { register, handleSubmit } = useForm<SignInSchema>()

    const handleSignIn = async (data: SignInSchema) => {
        setIsLoggingIn(true)
        await signIn({
            email: data.email,
            normalizedPassword: data.normalizedPassword,
        }).then(() => setIsLoggingIn(false))
    }

    if (isLoggingIn) {
        return (
            <div className='flex flex-col w-full h-full items-center justify-center'>
                <Spinner />
            </div>
        )
    }

    return (
        <AuthLayout>
            <div className='flex flex-col items-center justify-center'>
                <img
                    src={Logo}
                    alt='logo'
                    width={250}
                    className='-mt-[100px]'
                />
                <div className='flex flex-col w-[400px] p-xs rounded-md bg-gray-900 gap-2'>
                    <Input
                        label='Email'
                        placeholder='seu@email.com'
                        registration={register('email')}
                    />
                    <Input
                        label='Senha'
                        placeholder='*************'
                        type='password'
                        registration={register('normalizedPassword')}
                    />
                    <Button onClick={handleSubmit(handleSignIn)}>login</Button>
                </div>
            </div>
        </AuthLayout>
    )
}
