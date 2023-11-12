import type { Theme } from "@unocss/preset-uno"
import type { UserShortcuts } from "unocss"
import { buttonShortcuts } from "../button/style"
export default [
  ...buttonShortcuts
]as UserShortcuts<Theme>
