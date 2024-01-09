import { FC, useEffect, useState } from 'react'
import classNames from 'classnames'
import { b } from './scope'
import { AffixProps } from './props'
import { useElementBounding } from '../../hooks/useElementBounding'

const Affix: FC<AffixProps> = ({ offset, children, onChange }) => {
  const [ref, rect] = useElementBounding()
  const [fixed, setFixed] = useState(false)
  const rootClasses = classNames(b())
  const contentClasses = classNames(b('content'), { fixed })
  let [rootStyle, setRootStyle] = useState({})
  let [affixStyle, setAffixStyle] = useState({})

  useEffect(() => {
    const { top, width, height } = rect
    if (offset && top < offset) {
      setRootStyle({
        width: `${width}px`,
        height: `${height}px`
      })
      setAffixStyle({
        top: `${offset}px`,
        width: `${width}px`,
        height: `${height}px`
      })
      setFixed(true)
    } else {
      setRootStyle({})
      setAffixStyle({})
      setFixed(false)
    }
  }, [rect])

  useEffect(() => {
    onChange?.(fixed)
  }, [fixed])

  return (
    <div className={rootClasses} ref={ref} style={rootStyle}>
      <div className={contentClasses} style={affixStyle}>
        {children}
      </div>
    </div>
  )
}

export default Affix
