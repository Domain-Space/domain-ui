export const defaultNamespace = "do"

type Bem = {
  namespace: string
  block: string
  blockSuffix?: string
  element?: string
  modifier?: string
}

const _bem = ({ namespace, block, blockSuffix, element, modifier }: Bem) => {
  let className = `${namespace}-${block}`
  if (blockSuffix) {
    className += `-${blockSuffix}`
  }
  if (element) {
    className += `__${element}`
  }
  if (modifier) {
    className += `--${modifier}`
  }
  return className
}

export function namespace(block: string, namespace = defaultNamespace) {
  const b = (blockSuffix = "") => _bem({ namespace, block, blockSuffix })
  const e = (element?: string) => _bem({ namespace, block, element })
  const m = (modifier?: string) => _bem({ namespace, block, modifier })
  const be = (blockSuffix?: string, element?: string) =>
    _bem({ namespace, block, blockSuffix, element })
  const em = (element?: string, modifier?: string) =>
    _bem({ namespace, block, element, modifier })
  const bm = (blockSuffix?: string, modifier?: string) =>
    _bem({ namespace, block, blockSuffix, modifier })
  const bem = (blockSuffix?: string, element?: string, modifier?: string) =>
    _bem({ namespace, block, blockSuffix, element, modifier })

  return {
    b,
    e,
    m,
    be,
    bm,
    em,
    bem
  }
}
