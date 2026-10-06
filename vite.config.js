import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const page = (path) => fileURLToPath(new URL(path, import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Each page is its own HTML file, so /terms/ and /privacy/ work on any static host.
    rolldownOptions: {
      input: {
        main: page('./index.html'),
        terms: page('./terms/index.html'),
        privacy: page('./privacy/index.html'),
      },
    },
  },
})
