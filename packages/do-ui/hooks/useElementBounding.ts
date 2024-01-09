import { useEffect, useState } from 'react'
import { useDebounce } from './useDebounce'

export interface UseElementBoundingOptions {
  /**
   * Listen to window resize event
   *
   * @default true
   */
  windowResize?: boolean
  /**
   * Listen to window scroll event
   *
   * @default true
   */
  windowScroll?: boolean
}
export type UseElementBoundingRect = Pick<
  DOMRectReadOnly,
  'x' | 'y' | 'top' | 'left' | 'right' | 'bottom' | 'height' | 'width'
>
export type UseElementBoundingRef<E extends Element = HTMLDivElement> = (element: E) => void
export type UseElementBoundingReturn<E extends Element = HTMLDivElement> = [
  UseElementBoundingRef<E>,
  UseElementBoundingRect,
  () => void
]

/**
 * Reactive bounding box of an HTML element.
 *
 * @param target
 * @param options
 */
export function useElementBounding<E extends Element = HTMLDivElement>(
  options: UseElementBoundingOptions = {
    windowResize: true,
    windowScroll: true
  }
): UseElementBoundingReturn<E> {
  const { windowResize, windowScroll } = options
  const defaultState: UseElementBoundingRect = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
  const [element, ref] = useState<any | null>(null)
  const [rect, setRect] = useState<UseElementBoundingRect>(defaultState)

  const getBoundingClientRect = (): UseElementBoundingRect => {
    if (!element) return defaultState
    const { x, y, width, height, top, left, bottom, right } = element.getBoundingClientRect()
    return { x, y, width, height, top, left, bottom, right }
  }

  const update = () => {
    if (!element) return
    setRect(getBoundingClientRect())
  }
  const [handleScroll, cancel] = useDebounce(update, 0)

  useEffect(update, [element])

  if (windowScroll) window.addEventListener('scroll', handleScroll)
  if (windowResize) window.addEventListener('resize', handleScroll)

  return [ref, rect, cancel]
}
