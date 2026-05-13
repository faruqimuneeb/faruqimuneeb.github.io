import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: 'https://github.com/faruqimuneeb/muneebfaruqi',
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('framer-motion')) return 'motion';
          if (id.includes('react') || id.includes('react-dom')) return 'vendor';
        },
      },
    },
  },
})
