import { gql, TypedDocumentNode } from '@apollo/client'
import { User } from '../../graphql'

export const GET_USERS: TypedDocumentNode<{
    getUsers: User[]
}> = gql`
    query GET_USERS {
        getUsers {
            id
            name
            email
            document
            surname
            reffererCode
            createdAt
            updatedAt
        }
    }
`
