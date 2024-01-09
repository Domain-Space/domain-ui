import React from 'react'

export interface AffixProps {
  /**
   * offset distance
   * @type number
   * @default 0
   * @required false
   */
  offset?: number
  /**
   * Callback when affix state is changed
   * @type (fixed?: boolean) => void
   * @default -
   * @required false
   */
  onChange?: (fixed: boolean) => void
  children: React.ReactNode
}
