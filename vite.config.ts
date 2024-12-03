import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // resolve: {
    //     alias: {
    //         '@components': path.resolve(__dirname, './src/components'),
    //         '@app': path.resolve(__dirname, './src/app'),
    //         '@graphql': path.resolve(__dirname, './src/graphql/database'),
    //         '@models': path.resolve(__dirname, './src/graphql/types'),
    //         '@lib': path.resolve(__dirname, './src/lib'),
    //         '@assets': path.resolve(__dirname, './src/assets'),
    //     },
    // },
    build: {
        outDir: 'build',
        assetsDir: 'bundle',
    },
    publicDir: 'src/assets',
    server: {
        port: 3000,
    },
})
