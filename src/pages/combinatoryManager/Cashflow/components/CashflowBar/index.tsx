import React, { useCallback, useEffect, useState } from "react"
import LcCard from '@/components/LcCard'
import Charts from '@/components/Charts'
import * as echarts from 'echarts'
import LcTable from '@/components/LcTable'
import { Row, Col } from 'antd'
import ButtonGroup, { ButtonProps } from '@/components/ButtonGroup'
import { formatChartSource, formatMoney, pickGroups } from "@/utils"
import './index.less'

interface EChartsConfigProps {
  barColor: string[];
}

interface ProdAssetProps {
  title: string;
  unit?: string;
  dataSource: any;
  echartsConfig: EChartsConfigProps;
}

export default (props: ProdAssetProps) => {
  const {
    title,
    dataSource,
    unit,
    echartsConfig,
  } = props

  // 图表配置
  const option = {
    tooltip: {
      trigger: 'axis',
      triggerOn: 'mousemove'
    },

    grid: {
      left: 16,
      right: 16,
      top: 10,
      bottom: 40,
      borderWidth: 1,
      containLabel: true  //X轴与区域缩放重叠
    },

    dataZoom: {
      type: 'slider',
      startValue: 1,
      endValue: 7,
      height: 10,
      showDetail: false,
      bottom: 10
    },

    xAxis: {
      type: 'category',
      boundaryGap: true,
      nameLocation: 'start',
      data: dataSource.xAxisData,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,  //隐藏刻度线
        alignWithLabel: false,
      },
      axisLabel: {
        margin: 14,
        height: 20,
        interval: 0,
      }
    },

    yAxis: {
      type: 'value',
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,  //隐藏刻度线
      },
      axisLabel: {
        margin: 14,
      },
      // min: 0, //y轴的最小值
      scale: true
    },
    series: [{
      name: '销售总金额',
      type: 'bar',
      barWidth: 20,
      data: dataSource.yAxisdata,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#2199FF' },
          { offset: 1, color: '#4FC7FF' }
        ])
      },
    }],
  }

  return (
    <div className={'holding-card-wrapper'}>
      <LcCard
        title={title}
        extra={
          <div className={'card-extra'}>
            {unit ? <div style={{ marginRight: 16 }}>单位：{unit}</div> : null}
          </div>
        }
      >
        <div className={'chart'}>
          <Charts option={option} style={{ height: 322 }} />
        </div>
      </LcCard>
    </div>
  )
}
