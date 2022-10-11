import React from "react";
import { Table, TableProps } from 'antd'
import './index.less'

export default (props: TableProps<any>) => {
  const renderProps = {
    className: 'lc-table',
    pagination: false,
    size: 'small',
    bordered: false,
    rowClassName: (record: Record<string, any>, index: number) => {
      return index % 2 === 0 ? 'odd-row' : 'even-row'
    },
    ...props
  }
  // @ts-ignore
  return <Table {...renderProps} />
}
