import {defineConfig} from 'vite'

export default defineConfig({
    esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment',
    },
    pages: {
        '/login': {
          entry: '/login.html'
        },
        '/register': {
          entry: '/register.html'
        }
      }
})