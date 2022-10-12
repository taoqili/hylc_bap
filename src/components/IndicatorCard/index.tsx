import React, { ReactElement } from 'react'
import { Card, CardProps } from "antd"
import Trends, { TrendProps } from "@/components/Trends"
import './index.less'

interface IndicatorCardProps extends CardProps {
  value: string|number;
  unit?: string;
  titleIcon?: ReactElement;
  trendsDirection?: 'v' | 'h';
  trends?: TrendProps[];
  topExtra?: ReactElement;
  height?: number,
  style?: Record<string, any>
}

export default (props: IndicatorCardProps) => {
  const {title, value, unit = '', style = {}, trendsDirection='h', topExtra, titleIcon, children, trends = [], height, ...rest} = props
  const { textAlign, ...restStyle } = style
  return (
    <div className={'lc-bap-indicator-card'}>
      <Card
        {...rest}
        bodyStyle={{
          paddingBottom: trends && trends.length ? 0 : 16,
        }}
        style={{
          boxShadow: '3px 3px 6px 0px rgba(56,82,143,0.12)',
          borderRadius: 6,
        }}
      >
        {topExtra ? <div className={'top-extra'}>{topExtra}</div> : null}
        <div className={'content'} style={{height, justifyContent: textAlign}}>
          <div className={'main'}>
            <div className={'title'}>
              {
                titleIcon ? <div className={'icon'}>{typeof titleIcon === 'string' ?
                  <img width={22} height={16} src={titleIcon} alt=""/> : titleIcon}</div> : null
              }
              {title}
            </div>
            <div className={'value'} style={{marginLeft: titleIcon ? 26 : 0}}>
              <span className={'number'} style={restStyle}>{value}</span>
              {unit ? <span className={'unit'}>{unit}</span>: null}
            </div>
          </div>
          {children ? <div className={'extra'}>{children}</div> : null}
        </div>
        {
          trends && trends.length
            ? <div style={{marginTop: 14,padding: `${trendsDirection === 'h'? 17 : 8}px 0`, borderTop: '1px solid #E8E8E8'}}>
              <Trends data={trends} align={'center'} direction={trendsDirection}/>
            </div> : null
        }
      </Card>
    </div>
  )
}
