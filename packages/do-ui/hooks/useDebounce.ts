export type UseDebounceReturn = [() => void, () => void]

export function useDebounce(fn: Function, ms = 300): UseDebounceReturn {
  let timeout: number

  return [
    () => {
      clearTimeout(timeout)
      timeout = setTimeout(fn, ms)
    },
    () => clearTimeout(timeout)
  ]
}
