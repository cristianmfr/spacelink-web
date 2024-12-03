import { TypedDocumentNode, gql } from '@apollo/client'

import { CreateUserInput, User } from '../../graphql'

export const CREATE_USER: TypedDocumentNode<{
    createUser: User
    createUserInput: CreateUserInput
}> = gql`
    mutation CREATE_USER($createUserInput: CreateUserInput!) {
        createUser(createUserInput: $createUserInput) {
            id
        }
    }
`
