import React, {lazy} from 'react'

const EChartsDemo = lazy(() => import('@/pages/EChartsDemo'))
const Render = lazy(() => import('@/pages/Render'))

export const routes =  [
  {
    key: 'lineDemo',
    path: '/echarts/line',
    label: 'ECharts示例',
    element: <EChartsDemo />
  },
  {
    key: 'render',
    path: '/render/:module/:page',
    label: '测试页面',
    element: <Render />
  }
]
