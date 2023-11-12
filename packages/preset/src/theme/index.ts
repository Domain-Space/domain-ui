import type { Theme } from "@unocss/preset-uno"

const PREFIX_THEME = "--do-theme"

function getColorsTheme(theme: string) {
  return {
    [`${theme}`]: `var(${PREFIX_THEME}-${theme}Hsl)`,
    [`${theme}Base`]: `var(${PREFIX_THEME}-${theme})`,
    [`${theme}Light`]: `var(${PREFIX_THEME}-${theme}Light)`,
    [`${theme}LightHover`]: `var(${PREFIX_THEME}-${theme}LightHover)`,
    [`${theme}LightActive`]: `var(${PREFIX_THEME}-${theme}LightActive)`,
    [`${theme}LightContrast`]: `var(${PREFIX_THEME}-${theme}LightContrast)`,
    [`${theme}Border`]: `var(${PREFIX_THEME}-${theme}Border)`,
    [`${theme}BorderHover`]: `var(${PREFIX_THEME}-${theme}BorderHover)`,
    [`${theme}BorderActive`]: `var(${PREFIX_THEME}-${theme}BorderActive)`,
    [`${theme}SolidHover`]: `var(${PREFIX_THEME}-${theme}SolidHover)`,
    [`${theme}SolidContrast`]: `var(${PREFIX_THEME}-${theme}SolidContrast)`,
    [`${theme}Shadow`]: `var(${PREFIX_THEME}-${theme}Shadow)`
  }
}

export default {
  colors: {
    context: "rgba(var(--do-c-context),%alpha)",
    ...getColorsTheme("primary"),
    ...getColorsTheme("secondary"),
    ...getColorsTheme("success"),
    ...getColorsTheme("warning"),
    ...getColorsTheme("error"),
    ...getColorsTheme("info"),
    baseText: "var(--do-colors-text)",
    baseBorder: "var(--do-colors-border)",
    lightBorder: "var(--do-colors-border-light)",
    darkerBorder: "var(--do-colors-border-darker)",
    baseBackground: "var(--do-colors-background)",
    lightBackground: "var(--do-colors-background-light)",
    placeholder: "var(--do-colors-placeholder)",
    grayBd: "var(--do-colors-background-gray)",
    arrow: "var(--do-colors-arrow)",
    title: "var(--do-colors-title)",
    darkText: "var(--do-colors-text-darker)",
    darkSubText: "var(--do-colors-text-light)",
    grayBg: "var(--do-colors-grayBg)",
    darkerBg: "var(--do-colors-darker)",
    embed: "var(--do-colors-embed)",
    darkContext: "var(--do-colors-darkContext)",
    lightContext: "var(--do-colors-lightContext)"
  },
  fontFamily: {
    sans: "Avenir, Helvetica, Arial, sans-serif"
  },
  boxShadow: {
    xs: "var(--un-shadow-inset) 0 1px 1px 0 var(--un-shadow-color, rgba(0,0,0,0.03))",
    switch:
      "calc(var(--o-switch-offset) * -1) 0 0 2px var(--o-switch-bc) inset, 0 0 0 2px var(--o-switch-bc) inset;",
    switchActive:
      "calc(var(--o-switch-offset)) 0 0 2px var(--o-switch-c) inset, 0 0 0 2px var(--o-switch-c) inset;",
    trigger: "0px 4px 10px #0000001a",
    cardMD: "0px 0px 12px rgb(0 0 0 / 12%)",
    cardSM: "0px 0px 6px rgb(0 0 0 / 12%)"
  },
  animation: {
    keyframes: {
      switching: `{0%{ box-shadow: 0 0 0 2px #1890ff66; }
        60%{ box-shadow: 0 0 0 4px #1890ff33; }
        80%{ box-shadow: 0 0 0 6px #1890ff1a; }
        100%{ box-shadow: 0 0 0 8px #1890ff0d; }}`,
      indeterminate: "{0%{ left: -100%; } 100%{ left: 100%; }}",
      stripedFlowing:
        "{0%{background-position: -100%;} 100%{background-position: 100%;}}"
    },
    durations: {
      switching: "0.3s",
      indeterminate: "3s",
      stripedFlowing: "3s"
    },
    counts: {
      indeterminate: "infinite",
      stripedFlowing: "infinite"
    }
  }
} as Theme
