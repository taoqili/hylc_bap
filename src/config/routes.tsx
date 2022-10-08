import React, {lazy} from 'react'
import { RouteProps } from 'react-router-dom'

const EChartsDemo = lazy(() => import('@/pages/EChartsDemo'))
const Render = lazy(() => import('@/pages/Render'))

const CombinatoryOverview = lazy(() => import('@/pages/combinatoryManager/Overview'))
const CombinatoryCashflow = lazy(() => import('@/pages/combinatoryManager/Cashflow'))
const CombinatoryPositioning = lazy(() => import('@/pages/combinatoryManager/Positioning'))

export const routes: RouteProps[] =  [
  {
    path: '/echarts/line',
    element: <EChartsDemo />
  },
  {
    path: '/render/:module/:page',
    element: <Render />
  },
  {
    path: '/combinatory/overview',
    element: <CombinatoryOverview />
  },
  {
    path: '/combinatory/overview/single',
    element: <CombinatoryOverview type={'single'} />
  },
  {
    path: '/combinatory/cashflow',
    element: <CombinatoryCashflow />
  },
  {
    path: '/combinatory/positioning',
    element: <CombinatoryPositioning />
  }
]
