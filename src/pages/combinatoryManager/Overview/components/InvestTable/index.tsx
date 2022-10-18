import React, { useCallback, useState } from "react"
import LcCard from '@/components/LcCard'
import Charts from '@/components/Charts'
import LcTable from '@/components/LcTable'
import { Row, Col } from 'antd'
import ButtonGroup, { ButtonProps } from '@/components/ButtonGroup'
import { formatChartSource, formatMoney, pickGroups } from "@/utils"
import './index.less'

interface ColumnProps {
  key: string;
  title: string;
  dataIndex: string
}

interface InvestTableProps {
  title: string;
  columns: ColumnProps[];
  dataSource: any;
  unit?: string;
}

export default (props: InvestTableProps) => {
  const {
    title,
    unit,
    dataSource,
    columns = []
  } = props

  return (
    <div className={'invest-table-wrapper'}>
      <LcCard
        title={title}
        extra={
          <div className={'card-extra'}>
            {unit ? <div style={{ marginRight: 16 }}>单位：{unit}</div> : null}
          </div>
        }
      >
        <div className={'tableWrap'}>
          <LcTable
            columns={columns}
            dataSource={dataSource}
            scroll={dataSource.length > 7 ? { y: 318 } : undefined}
          />
        </div>
      </LcCard>
    </div>
  )
}
