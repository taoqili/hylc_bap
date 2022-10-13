import React from 'react'
import { Card, CardProps } from 'antd'
import './index.less'

export default (props: CardProps) => {
  const { title, style = {}, extra, children, headStyle, bodyStyle, ...rest  } = props
  return (
    <div className={'lc-bap-card'}>
      <Card
        title={title}
        bordered={false}
        extra={extra}
        headStyle={{
          ...headStyle,
          borderBottom: 'none',
        }}
        bodyStyle={{
          ...bodyStyle,
          padding: title ? '0 16px 16px' : '16px 16px'
        }}
        style={{
          ...style,
          boxShadow: '3px 3px 6px 0px rgba(56,82,143,0.12)',
          borderRadius: 6
        }}
        {...rest}
      >
        {children}
      </Card>
    </div>
  )
}
