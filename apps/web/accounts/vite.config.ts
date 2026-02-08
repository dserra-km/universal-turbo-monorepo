import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import reactNativeWeb from 'vite-plugin-react-native-web'
import tailwindcss from '@tailwindcss/vite'
import { uniwind } from 'uniwind/vite'
import { federation } from '@module-federation/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    tanstackRouter({ routesDirectory: './src/routes' }),
    react(),
    reactNativeWeb(),
    tailwindcss(),
    uniwind({
      cssEntryFile: './src/global.css',
    }),
    federation({
      name: 'Accounts',
      filename: 'remoteEntry.js',
      exposes: {
        './TechStack': './src/components/TechStack',
      },
      shared: ['react', 'react-dom'],
    }),
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
