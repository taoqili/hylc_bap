import React from 'react'
import { Card } from 'antd'
import './index.less'

export default (props: any) => {
  const { title, style = {}, extra, children  } = props
  const renderStyle = {
    ...style,
    borderRadius: 8
  }
  return (
    <div className={'lc-bap-card'}>
      <Card size="small" title={title} extra={extra} style={renderStyle}>
        {children}
      </Card>
    </div>
  )
}
