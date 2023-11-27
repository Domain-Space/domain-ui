process.on("exit", () => {})

if (!process.argv[2]) {
  console.error("new [component] required - Please enter new component name")
  process.exit(1)
}

import fs from "fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const component_name = kebabCase(process.argv[2])
const componentName = camelCase(component_name)
const ComponentName = capitalize(componentName)
const componentPath = join(__dirname, "../components/", component_name)

if (fs.existsSync(componentPath)) {
  console.error(
    `${componentName} already exists - Please enter new component name`
  )
  process.exit(1)
}

const dirs = [
  componentPath,
  join(__dirname, "../components/", component_name, "/__tests__"),
  join(__dirname, "../components/", component_name, "/style")
]

dirs.forEach((dir) => fs.mkdirSync(dir))

const files = [
  {
    filename: "index.ts",
    content: `import ${ComponentName} from "./${component_name}"

export default ${ComponentName}
`
  },
  {
    filename: `scope.ts`,
    content: `import { namespace } from "@do-ui/shared"
export const { b, e, m, be, bm, em, bem } = namespace("${component_name}")
`
  },
  {
    filename: `${component_name}.tsx`,
    content: `import classNames from "classnames"
import { b } from "./scope"

const classes = classNames(b())

function ${ComponentName}() {
  return (
    <div className={classes}>
      <slot />
    </div>
  )
}

export default ${ComponentName}
`
  },
  {
    filename: "/style/index.ts",
    content: `import { b } from "../scope"

export const ${componentName}Shortcuts = [
  [b(), "border"],
]
`
  },
  {
    filename: `/__tests__/${component_name}.test.tsx`,
    content: `import { describe, expect, it } from 'vitest'

describe('${ComponentName}', () => {
  it('create', () => {
    expect(1+1).toBe(2)
  })
})
`
  }
]

files.forEach((file) => {
  fs.writeFileSync(join(componentPath, file["filename"]), file["content"])
})

function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1)
}

function kebabCase(s) {
  return s.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
}

function camelCase(s) {
  return s.replace(/-(\w)/g, (_, a) => (a ? a.toUpperCase() : ""))
}
