import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts
} from "unocss"
import transformerAttributifyJsx from "@unocss/transformer-attributify-jsx"
import {
  darkTheme,
  getCSSPreflights,
  lightTheme,
  presetDo
} from "@do-ui/preset"
import shortcuts from "./components/style"
const safelist = (shortcuts as string[][]).map((s) => s[0])

export default defineConfig({
  shortcuts,
  safelist,
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true
    }),
    presetWebFonts({
      fonts: {
        sans: "DM Sans",
        serif: "DM Serif Display",
        mono: "DM Mono"
      }
    }),
    presetDo()
  ],
  transformers: [transformerAttributifyJsx()],
  preflights: [
    {
      getCSS: () => `
      :root {
        ${getCSSPreflights(lightTheme)}
      }
      :root.dark {
        ${getCSSPreflights(darkTheme)}
      }
      button, select, input, option {
        outline: none;
        -webkit-appearance: none
      }
    `
    }
  ]
})
