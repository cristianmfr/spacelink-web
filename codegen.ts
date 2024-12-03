import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: process.env.VITE_GRAPHQL_URL ?? 'http://localhost:3001/graphql',
    documents: ['src/**/*.tsx'],
    generates: {
        './src/graphql/': {
            preset: 'client',
            plugins: [],
            presetConfig: {
                gqlTagName: 'gql',
            },
        },
    },
    ignoreNoDocuments: true,
}

export default config
