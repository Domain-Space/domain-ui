import fs from "fs"
import path from "path"

const componentsPath = path.resolve("./components")
const componentsStyle = path.resolve("./components/style/index.ts")

let style = `import type { Theme } from "@unocss/preset-uno"
import type { UserShortcuts } from "unocss"
`
const styles = []

fs.readdirSync(componentsPath).forEach((file) => {
  if (file === "style" || file.endsWith(".d.ts")) return
  const shortcuts = file + "Shortcuts"
  styles.push("..." + shortcuts)
  style += `import { ${shortcuts} } from "../${file}/style"\n`
})

style += `export default [
  ${styles.join(",\n  ")}
]as UserShortcuts<Theme>
`

fs.writeFileSync(componentsStyle, style)
