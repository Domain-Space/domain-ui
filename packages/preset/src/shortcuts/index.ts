import type { Theme } from "@unocss/preset-uno"
import type { UserShortcuts } from "unocss"
import { baseShortcuts } from "./base"
import { commonShortcuts } from "./common"

export default [baseShortcuts, commonShortcuts] as UserShortcuts<Theme>
