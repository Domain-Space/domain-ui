import classNames from "classnames"
import { b } from "./scope"

const classes = classNames(b("xs"))

function Button() {
  return (
    <button type="button" className={classes}>
      Default
      <slot />
    </button>
  )
}

export default Button
