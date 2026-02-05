import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import reactNativeWeb from 'vite-plugin-react-native-web'
import path from 'path'

export default defineConfig({
  plugins: [
    tanstackRouter({ routesDirectory: './src/routes' }),
    react({
      jsxImportSource: 'nativewind',
      jsxRuntime: 'automatic',
    }),
    reactNativeWeb(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    chunkSizeWarningLimit: 600,
  },
})
