import React, { useCallback, useState } from "react"
import LcCard from '@/components/LcCard'
import Charts from '@/components/Charts'
import LcTable from '@/components/LcTable'
import ActionGroup, { ActionProps } from '@/components/ActionGroup'
import { formatChartSource, formatMoney, pickGroups } from "@/utils"
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
  columns: ColumnProps[];
  defaultAction?: string;
  actions?: ActionProps[];
  dataSource: Record<string, any>[];
  unit?: string;
  dimensions: [string, string];
  echartsConfig?: EChartsConfigProps;
}

export default (props: BondHoldingProps) => {
  const {
    title,
    defaultAction,
    dataSource,
    unit,
    columns = [],
    actions = [],
    dimensions,
    echartsConfig = {},
  } = props
  const {barColors = ['#4FFFF5', '#2ECCFE']} = echartsConfig
  const [curAction, setCurAction] = useState(defaultAction)

  const getCurDataSource = (
    dataSource: Record<string, any> [],
    actions: ActionProps[],
    dataIndex: string = 'Index_Cd'
  ) => {
    const groupNames = actions.reduce((prev: string[], cur: ActionProps): any => {
      prev.push(cur.value)
      return prev
    }, [])
    const groups = pickGroups(dataSource, groupNames, dataIndex)
    return groups[curAction || groupNames[0]]
  }

  const curDataSource = !actions.length ? dataSource : getCurDataSource(dataSource, actions)
  const curChartSource = formatChartSource(curDataSource, dimensions)

  // 图表配置
  const option = {
    dataset: [
      {
        dimensions,
        source: curChartSource
      }
    ],
    grid: {
      left: 88,
      right: 70,
      top: 10,
      bottom: 20
    },
    xAxis: {
      max: 'dataMax',
      axisLabel: {
        formatter(value: any) {
          return formatMoney(value, true) + ' 亿'
        }
      }
    },
    yAxis: {
      type: 'category',
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
    dataZoom: {
      show: curChartSource.length > 7,
      type: 'slider',
      yAxisIndex: 0,
      startValue: 1,
      endValue: 7,
      width: 10,
      showDetail: false
    },
    // tooltip: {
    //   trigger: 'axis',
    //   axisPointer: {
    //     type: 'shadow'
    //   },
    //   formatter(params: any) {
    //     const { value } = params[0] || {}
    //     return '<div>' + value[0] + '</div><div>' + value[1] + '</div>'
    //   }
    // },
    series: {
      type: 'bar',
      barWidth: 20,
      label: {
        show: true,
        position: 'right',
        valueAnimation: true,
        formatter(params: any = {}) {
          const {data = []} = params
          return formatMoney(data[1])
        }
      },
      itemStyle: {
        color: {
          colorStops: (() => {
            const ret: Record<string, any>[] = []
            barColors.forEach((item, index) => {
              ret.push({
                offset: index / barColors.length,
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

  // 类型切换
  const onActionChange = useCallback((event) => {
    const {target} = event
    setCurAction(target.value)
  }, [])

  return (
    <div className={'holding-card-wrapper'}>
      <LcCard
        title={title}
        extra={
          <div className={'card-extra'}>
            {unit ? <div style={{marginRight: 16}}>单位：{unit}</div> : null}
            <ActionGroup
              defaultAction={defaultAction}
              actions={actions}
              onChange={onActionChange}
            />
          </div>
        }
      >
        <div className={'card-content'}>
          <div className={'table'}>
            <LcTable
              columns={columns}
              dataSource={curDataSource}
              scroll={{y: 268}}
            />
          </div>
          <div className={'chart'}>
            <Charts option={option}/>
          </div>
        </div>
      </LcCard>
    </div>
  )
}
