import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
      host: '0.0.0.0',  // Bind to all network interfaces
      port: 5169,       // Specify a port (optional)

    // proxy: {
    //   // '/api': {
    //   //   target: 'https://www.objective-kirch.109-228-49-52.plesk.page',
    //   //   changeOrigin: true,
    //   //   rewrite: (path) => path.replace(/^\/api/, ''),
    //   // },

    //   '/api': 'https://adminukmla.targetukmla.com/'
    // },
  }
})
