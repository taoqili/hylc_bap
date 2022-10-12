import React from "react";
import { Table, TableProps } from 'antd'
import './index.less'

export default (props: TableProps<any>) => {
  const { columns, ...rest } = props
  const renderProps = {
    ...rest,
    className: 'lc-table',
    pagination: false,
    // size: 'normal',
    bordered: false,
    columns,
    rowClassName: (record: Record<string, any>, index: number) => {
      return index % 2 === 0 ? 'odd-row' : 'even-row'
    }
  }
  // @ts-ignore
  return <Table {...renderProps} />
}
