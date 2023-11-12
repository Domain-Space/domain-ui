import { parseColor } from "@unocss/preset-mini/utils"
import type { ParsedColorValue, Rule, RuleContext } from "unocss"
import type { Theme } from "@unocss/preset-uno"
import theme from "../theme"
import { SwitchSizeMap } from "../constants"

export function parseColors(
  body: string,
  _theme: Theme = theme
): ParsedColorValue | undefined {
  return parseColor(body, _theme)
}

export default [
  [
    /^do-(.*)$/,
    ([, body]: string[], { theme }: RuleContext<Theme>) => {
      const color = parseColor(body, theme)
      if (color?.cssColor?.type === "rgb" && color.cssColor.components) {
        return {
          "--do-c-context": `${color.cssColor.components.join(",")}`
        }
      } else {
        return {
          "--do-c-context": color?.color
        }
      }
    }
  ],
  [
    /^do-switch-(.+)$/,
    ([, s]: string[]) => {
      if (["sm", "md", "lg"].includes(s)) {
        return {
          "--o-switch-offset": SwitchSizeMap[s][2],
          width: SwitchSizeMap[s][0],
          height: SwitchSizeMap[s][1]
        }
      }
    }
  ],
  ["do-dashed", { "border-style": "dashed" }],
  [
    "do-solid",
    {
      "background-color": "rgba(var(--do-c-context), 1) !important",
      "border-color": "rgba(var(--do-c-context), 1)",
      color: "white !important"
    }
  ],
  [
    "do-bg-clip-half",
    { "clip-path": "polygon(0% 0%, 50% 0, 50% 50%, 50% 100%, 0% 100%)" }
  ],
  [
    /^psdc-(.*)$/,
    ([, s]: string[]) => ({ content: `'${s === "DEFAULT" ? "" : s}'` })
  ] // set content for pseudo element
] as Rule<Theme>[]
