import { TypedDocumentNode, gql } from '@apollo/client'

import { Auth, SignInInput } from '../../graphql'

export const SIGN_IN: TypedDocumentNode<{
    signIn: Auth
    signInInput: SignInInput
}> = gql`
    mutation SIGN_IN($signInInput: SignInInput!) {
        signIn(signInInput: $signInInput) {
            user {
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
            accessToken
        }
    }
`
