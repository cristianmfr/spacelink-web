import { useState } from 'react'
import { Button } from '../../../../../components/atoms/button'
import { ColumnTitle, Table } from '../../../../../components/molecules/table'
import { Page } from '../../../../../components/templates/page'
import { CreateUser } from '../create-user'
import { SuccessModal } from '../../../../../components/templates/modals/success-modal'
import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import { User } from '../../../../../graphql/graphql'
import { DotsThreeVertical } from '@phosphor-icons/react'
import { useQuery } from '@apollo/client'
import { GET_USERS } from '../../../../../graphql/database/queries/get-users.query'

export const UsersList = () => {
    const { data: users } = useQuery(GET_USERS)

    const [successModal, setSuccessModal] = useState(false)
    const [createModal, setCreateModal] = useState(false)

    const columnHelper = createColumnHelper<User>()

    const columnsTitle: ColumnTitle[] = [
        {
            id: 'id',
            header: 'ID',
        },
        {
            id: 'name',
            header: 'Nome',
        },
        {
            id: 'email',
            header: 'Email',
        },
    ]

    const columns: ColumnDef<User, string>[] = [
        columnHelper.accessor((row) => row.id, {
            id: 'id',
            cell: (info) => info.getValue().slice(0, 5).toUpperCase(),
            header: () => <span>ID</span>,
            enableColumnFilter: false,
        }),
        columnHelper.accessor((row) => row.name, {
            id: 'name',
            cell: (info) => info.getValue(),
            header: () => <span>Nome</span>,
            enableColumnFilter: false,
        }),
        columnHelper.accessor((row) => row.email, {
            id: 'email',
            cell: (info) => info.getValue(),
            header: () => <span>Email</span>,
            enableColumnFilter: false,
        }),
        columnHelper.accessor((row) => row.id, {
            id: 'id',
            cell: () => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const [_, setIsOpen] = useState(false)

                return (
                    <div>
                        <button
                            onClick={() => setIsOpen((prev) => !prev)}
                            className='flex flex-col w-[25px] h-[25px] text-low-light items-center justify-center hover:bg-high-dark/30 transition ease-in rounded'
                        >
                            <DotsThreeVertical size={20} weight='bold' />
                        </button>
                    </div>
                )
            },
            header: () => <span></span>,
            enableColumnFilter: false,
        }),
    ]

    const onSuccess = () => {
        setSuccessModal(true)
        setCreateModal(false)
    }

    return (
        <Page>
            <Page.Header title='Usuários'>
                <Button onClick={() => setCreateModal(true)}>
                    novo usuário
                </Button>
            </Page.Header>
            <Page.Content>
                <div className='flex flex-col w-full p-xs bg-gray-900 rounded-lg border-thin border-gray-800'>
                    <Table
                        data={users?.getUsers || []}
                        columns={columns}
                        columnsTitle={columnsTitle}
                    />
                </div>
            </Page.Content>
            <CreateUser
                isOpen={createModal}
                onClose={() => setCreateModal(false)}
                onSuccess={onSuccess}
            />
            <SuccessModal
                title='Sucesso!'
                subtitle='Usuário adicionado com sucesso!'
                isOpen={successModal}
                onClose={() => setSuccessModal(false)}
                primaryLabel='concluir'
                primaryFunction={() => setSuccessModal(false)}
            />
        </Page>
    )
}
