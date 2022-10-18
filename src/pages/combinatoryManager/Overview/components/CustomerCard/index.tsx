import React, { useCallback, useState } from "react"
import LcCard from '@/components/LcCard'
import Charts from '@/components/Charts'
import LcTable from '@/components/LcTable'
import { Row, Col } from 'antd'
import ButtonGroup, { ButtonProps } from '@/components/ButtonGroup'
import { formatChartSource, formatMoney, pickGroups, getAssets } from "@/utils"
import './index.less'

interface ColumnProps {
  key: string;
  title: string;
  dataIndex: string
}

interface EChartsConfigProps {
  barColors?: string[];
}

interface BondHoldingProps {
  title: string;
  unit?: string;
  customerNum: any;
  piedata: Record<string, any>[];
  color: any;
  echartsConfig?: EChartsConfigProps;
}

export default (props: BondHoldingProps) => {
  const {
    title,
    unit,
    customerNum,
    piedata,
    color
  } = props


  // 图表配置
  const option = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',//设置图例的方向
      right: 10,
      top: "center",
      itemGap: 10,//设置图例的间距
      itemWidth: 20,
      itemHeight: 8
    },
    color: color,
    series: [
      {
        name: '个人客户总数',
        type: 'pie',
        radius: ['35%', '50%'], //图例大小
        center: ["30%", "50%"], // 饼图位置
        label: {
          show: false,
        },

        labelLine: {
          show: false
        },
        data: piedata,
      }
    ]
  };

  return (
    <div className={'customer-card-wrapper'}>
      <div className="customerTop">
        <div className="rowFlex">
          <img style={{ marginRight: '10px' }} src={getAssets('img/combinatory/IndividualCustomers.png')} />
          <span>{title}</span>
        </div>
        <div>
          <span className="cardNum">{customerNum}</span>
          <span>{unit}</span>
        </div>
      </div>
      <Charts option={option} style={{ height: '332px', width: '100%' }} />
    </div>
  )
}
