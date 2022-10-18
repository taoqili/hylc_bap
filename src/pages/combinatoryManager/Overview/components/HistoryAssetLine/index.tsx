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
  areaColor: string[];
  lineColor: string;
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

  // 处理图例函数
  // let handleLegend = () => {
  //   dataSource.series.forEach((item: any) => {
  //     legendData.push(item.name)
  //   });
  //   console.log('legendData', legendData)
  //   return legendData
  // }

  // 图表配置
  const option = {
    tooltip: {
      trigger: 'axis',
      triggerOn: 'mousemove'
    },

    legend: {
      x: 'right',
      y: ' top',
      itemWidth: 10,
      itemHeight: 10,
      icon: 'rect',
    },

    grid: {
      left: 16,
      right: 40,
      top: 36,
      bottom: 0,
      borderWidth: 1,
      containLabel: true  //X轴与区域缩放重叠
    },

    xAxis: {
      type: 'category',
      boundaryGap: false,
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
        textStyle: {
        }
      },
      scale: true
    },

    series: dataSource.series.map((item: any) => {
      return {
        name: item.name,
        data: item.data,
        type: 'line',
        barGap: 0,
        symbol: 'none',
        smooth: true,
        itemStyle: {
          color: item.lineStyleColor
        },
        lineStyle: {
          width: 1.5,
          type: 'solid',
          color: item.lineStyleColor
        },
        stack: "总量",
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: item.areaStyleColor[0]
          }, {
            offset: 1,
            color: item.areaStyleColor[1]
          }])
        },

      }
    })
  }

  return (
    <div className={'history-asset-wrapper'}>
      <LcCard
        title={title}
        extra={
          <div className={'card-extra'}>
            {unit ? <div style={{ marginRight: 16 }}>单位：{unit}</div> : null}
          </div>
        }
      >
        <Charts option={option} style={{ height: 372 }} />
      </LcCard>
    </div>
  )
}
