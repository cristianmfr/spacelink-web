import { useMutation } from '@apollo/client'
import { Button } from '../../../../../components/atoms/button'
import { Input } from '../../../../../components/atoms/input'
import { Modal } from '../../../../../components/atoms/modal'
import { CREATE_USER } from '../../../../../graphql/database/mutations/create-user.mutation'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { DocumentType } from '../../../../../graphql/graphql'

interface CreateUserProps {
    isOpen: boolean
    onClose: () => void
    onSuccess: () => void
}

export const CreateUser = ({ isOpen, onClose, onSuccess }: CreateUserProps) => {
    const [createUser] = useMutation(CREATE_USER)

    const schema = z.object({
        name: z.string(),
        surname: z.string(),
        email: z.string(),
        document: z.string(),
        password: z.string(),
        reffererCode: z.string(),
    })

    type UserData = z.infer<typeof schema>

    const { register, handleSubmit } = useForm<UserData>({
        resolver: zodResolver(schema),
    })

    const onSubmit = (data: UserData) => {
        createUser({
            variables: {
                createUserInput: {
                    name: data.name,
                    surname: data.surname,
                    email: data.email,
                    document: data.document,
                    documentType: DocumentType.Cpf,
                    password: data.password,
                    reffererCode: data.reffererCode,
                },
            },
        })
            .then(() => {
                onSuccess()
            })
            .catch((err) => {
                console.log(err.message)
                toast.error('Erro ao adicionar o usuário')
            })
    }

    return (
        <Modal title='Novo usuário' isOpen={isOpen} onClose={onClose}>
            <div className='flex flex-col w-full gap-4'>
                <div className='grid grid-cols-2 w-full gap-2'>
                    <Input
                        placeholder='Nome do usuário'
                        registration={register('name')}
                    />
                    <Input
                        placeholder='Sobrenome do usuário'
                        registration={register('surname')}
                    />
                </div>
                <Input
                    placeholder='Email do usuário'
                    registration={register('email')}
                />
                <div className='grid grid-cols-3 gap-2'>
                    <Input
                        placeholder='Senha'
                        type='password'
                        className='col-span-2'
                        registration={register('password')}
                    />
                    <Input
                        placeholder='CPF/CNPJ'
                        registration={register('document')}
                    />
                </div>
                <div className='grid grid-cols-3 gap-2'>
                    <Input
                        placeholder='Crie o código de referencia'
                        className='col-span-2'
                        registration={register('reffererCode')}
                    />
                    <Button variant={'dark'}>auto</Button>
                </div>
                <Button onClick={handleSubmit(onSubmit)}>
                    adicionar usuário
                </Button>
            </div>
        </Modal>
    )
}
