import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { uniwind } from 'uniwind/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    uniwind({
      cssEntryFile: './global.css',
    }),
  ],
  resolve: {
    alias: {
      'react-native': 'react-native-web',
      'react-native/Libraries/Utilities/codegenNativeComponent': 'react-native-web',
    },
    extensions: [
      '.web.tsx',
      '.web.ts',
      '.web.jsx',
      '.web.js',
      '.tsx',
      '.ts',
      '.jsx',
      '.js',
    ],
  },
  optimizeDeps: {
    esbuildOptions: {
      resolveExtensions: [
        '.web.js',
        '.web.ts',
        '.web.tsx',
        '.js',
        '.jsx',
        '.ts',
        '.tsx',
        '.json',
      ],
      loader: {
        '.js': 'jsx',
      },
    },
  },
})