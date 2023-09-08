import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    globals: true,
    alias: { "@do-ui/*": "./packages/*/src" },
    include: ["./packages/**/__tests__/*.{test,spec}.?(c|m)[jt]s?(x)"]
  }
})
