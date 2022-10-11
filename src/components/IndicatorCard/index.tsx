import React, { ReactElement } from 'react'
import { Card, CardProps } from "antd"
import Trends, { TrendProps } from "@/components/Trends"
import './index.less'
import { formatMoney } from "@/utils"

interface IndicatorCardProps extends CardProps {
  value: string|number;
  unit?: string;
  titleIcon?: ReactElement;
  trends?: TrendProps[];
  height?: number
}

export default (props: IndicatorCardProps) => {
  const {title, value, unit = '亿', titleIcon, children, trends = [], height, ...rest} = props
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
        <div className={'content'} style={{height}}>
          <div className={'main'}>
            <div className={'title'}>
              {
                titleIcon ? <div className={'icon'}>{typeof titleIcon === 'string' ?
                  <img width={22} height={16} src={titleIcon} alt=""/> : titleIcon}</div> : null
              }
              {title}
            </div>
            <div className={'value'} style={{marginLeft: titleIcon ? 26 : 0}}>
              <span style={{transform: 'scaleX(.8)'}}>{unit !== '亿' ? value : formatMoney(value)}</span>
              <span className={'unit'}>{unit || '亿'}</span>
            </div>
          </div>
          {children ? <div className={'extra'}>{children}</div> : null}
        </div>
        {
          trends && trends.length
            ? <div style={{marginTop: 14,padding: '14px 0', borderTop: '1px solid #E8E8E8'}}>
              <Trends data={trends} align={'center'}/>
            </div> : null
        }
      </Card>
    </div>
  )
}
