import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { luneuiInstance } from 'luneui/integration'

export default defineConfig({
    plugins: [react(), luneuiInstance()]
})
