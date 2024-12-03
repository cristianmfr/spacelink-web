import { TypedDocumentNode, gql } from '@apollo/client'

import { User } from '../../graphql'

export const GET_CURRENT_USER: TypedDocumentNode<{
    getCurrentUser: User
}> = gql`
    query GET_CURRENT_USER {
        getCurrentUser {
            id
            name
            surname
            email
            document
            documentType
            reffererCode
            createdAt
            updatedAt
        }
    }
`
