import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'build',
        assetsDir: 'bundle',
        chunkSizeWarningLimit: 2000,
        commonjsOptions: {
            ignoreDynamicRequires: true,
        },
    },
    optimizeDeps: {
        include: ['@lottiefiles/react-lottie-player'],
    },
    publicDir: 'src/assets',
    server: {
        port: 3000,
    },
})
