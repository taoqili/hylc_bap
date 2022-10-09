import React from "react"
import Card from '@/components/Card'
import ActionGroup, { ActionProps } from '@/components/ActionGroup'
import './index.less'

interface ColumnProps {
  key: string;
  title: string;
  dataIndex: string
}

interface BondHoldingProps {
  title: string;
  columns: ColumnProps[];
  defaultAction?: string;
  actions?: ActionProps[];
  onActionChange?: (e: any) => void;
  dataSource: Record<string, any>[];
  unit?: string
}

export default (props: BondHoldingProps) => {
  const { title, defaultAction, dataSource, unit, columns, actions, onActionChange = () => {} } = props

  return (
    <div className={'holding-card-wrapper'}>
      <Card
        title={title}
        extra={
          <div className={'card-extra'}>
            {unit ? <div style={{marginRight: 16}}>单位：{unit}</div> : null }
            <ActionGroup
              defaultAction={defaultAction}
              actions={actions}
              onChange={onActionChange}
            />
          </div>
        }
      >
        <div className={'card-content'}>
          <div className={'table'}>123</div>
          <div className={'chart'}>123123</div>
        </div>
      </Card>
    </div>
  )
}
