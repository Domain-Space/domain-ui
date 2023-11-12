// import {
//   defineConfig,
//   presetAttributify,
//   presetIcons,
//   presetUno,
//   presetWebFonts
// } from "unocss"
// import {
//   darkTheme,
//   getCSSPreflights,
//   lightTheme,
//   presetDo
// } from "@do-ui/preset"
// import shortcuts from "./components/style"

// export default defineConfig({
//   shortcuts,
//   presets: [
//     presetUno(),
//     presetAttributify(),
//     presetIcons({
//       scale: 1.2,
//       warn: true
//     }),
//     presetWebFonts({
//       fonts: {
//         sans: "DM Sans",
//         serif: "DM Serif Display",
//         mono: "DM Mono"
//       }
//     }),
//     presetDo()
//   ],
//   preflights: [
//     {
//       getCSS: () => `
//       :root {
//         ${getCSSPreflights(lightTheme)}
//       }
//       :root.dark {
//         ${getCSSPreflights(darkTheme)}
//       }
//       button, select, input, option {
//         outline: none;
//         -webkit-appearance: none
//       }
//     `
//     }
//   ]
// })
