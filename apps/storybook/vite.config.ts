import { defineConfig } from 'vite'
import reactNativeWeb from 'vite-plugin-react-native-web'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: 'nativewind',
      jsxRuntime: 'automatic',
    }),
    reactNativeWeb(),
  ],
})