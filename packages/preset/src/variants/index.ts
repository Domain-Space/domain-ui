import type { Variant } from "unocss"
import type { Theme } from "@unocss/preset-uno"

export default [
  (input: string) => {
    const prefix = "is-disabled:"
    if (input.startsWith(prefix)) {
      return {
        matcher: input.slice(prefix.length),
        selector: (input) => `[disabled] ${input}, ${input}[disabled]`
      }
    }
  },
  (input: string) => {
    const prefix = "is-checked:"
    if (input.startsWith(prefix)) {
      return {
        matcher: input.slice(prefix.length),
        selector: (input) => `[checked] ${input}, ${input}[checked]`
      }
    }
  },
  (input: string) => {
    const prefix = "is-after:"
    if (input.startsWith(prefix)) {
      return {
        matcher: input.slice(prefix.length),
        selector: (s) => `${s}::after`
      }
    }
  },
  (input: string) => {
    const prefix = "is-before:"
    if (input.startsWith(prefix)) {
      return {
        matcher: input.slice(prefix.length),
        selector: (s) => `${s}::before`
      }
    }
  },
  (input: string) => {
    const prefix = "is-children:"
    const reg = /(is-children:)\[(.*)\]:(.*)$/
    if (input.startsWith(prefix)) {
      return {
        matcher: input.replace(reg, "$3"),
        selector: (s) => `${s} > ${input.replace(reg, "$2")}`
      }
    }
  },
  (input: string) => {
    const prefix = "is-sibling:"
    const reg = /(is-sibling:)\[(.*)\]:(.*)$/
    if (input.startsWith(prefix)) {
      return {
        matcher: input.replace(reg, "$3"),
        selector: (s) => `${s} + ${input.replace(reg, "$2")}`
      }
    }
  }
] as Variant<Theme>[]
