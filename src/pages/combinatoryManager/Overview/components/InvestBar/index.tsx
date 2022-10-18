import React, { useCallback, useEffect, useState } from "react"
import LcCard from '@/components/LcCard'
import Charts from '@/components/Charts'
import * as echarts from 'echarts'
import LcTable from '@/components/LcTable'
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
      right: 28,
      top: 5,
      bottom: 0,
      borderWidth: 1,
      containLabel: true  //X轴与区域缩放重叠
    },

    xAxis: {
      max: 'dataMax',
      // axisLabel: {
      //   formatter(value: any) {
      //     return formatMoney(value, true) + ' 亿'
      //   }
      // }
    },
    yAxis: {
      type: 'category',
      boundaryGap: true,
      data: dataSource.yAxisData,
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#666'
      },
      axisLine: {
        lineStyle: {
          color: '#ddd'
        }
      }
    },
    series: {
      type: 'bar',
      barWidth: 20,
      data:dataSource.xAxisData,
      label: {
        show: true,
        position: 'right',
        valueAnimation: true,
        // formatter(params: any = {}) {
        //   const {data = []} = params
        //   return formatMoney(data[1])
        // }
      },
      itemStyle: {
        color: {
          colorStops: (() => {
            const ret: Record<string, any>[] = []
            echartsConfig.barColor.forEach((item, index) => {
              ret.push({
                offset: index / echartsConfig.barColor.length,
                color: item
              })
            })
            return ret
          })(),
        }
      },
      datasetIndex: 0
    }
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
          <Charts option={option} style={{ height: 372 }} />
        </div>
      </LcCard>
    </div>
  )
}
