import React from 'react'
import './index.less'

export default (props: any) => {
  const { children } = props
  return (
    <div className={'lc-bap-card'}>
      {children}
    </div>
  )
}
