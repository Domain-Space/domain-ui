import { resolve } from "node:path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import UnoCSS from "unocss/vite"
import dts from 'vite-plugin-dts'
import ViteRestart from "vite-plugin-restart"

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, "index.ts"),
      name: "@do-ui/components"
    },
    rollupOptions: {
      external: ['react', 'react-dom']
    }
  },
  plugins: [
    react(),
    UnoCSS(),
    dts({ rollupTypes: true, include: ["./components", './index.ts']}),
    ViteRestart({
      restart: ["components/**/style/*.ts"]
    })
  ]
})
