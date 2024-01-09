import type { Theme } from "@unocss/preset-uno"
import type { UserShortcuts } from "unocss"
import { affixShortcuts } from "../affix/style"
import { buttonShortcuts } from "../button/style"
export default [
  ...affixShortcuts,
  ...buttonShortcuts
]as UserShortcuts<Theme>
