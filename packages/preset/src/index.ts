import { type Preset, definePreset } from "unocss"
import shortcuts from "./shortcuts/index"
import theme from "./theme"
import rules from "./rules"
import variants from "./variants"

export function presetDo(): Preset {
  return definePreset({
    name: "@do-ui/preset",
    theme,
    rules,
    variants,
    shortcuts
  })
}

export * from "./colors"
