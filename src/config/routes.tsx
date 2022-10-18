import React, {lazy} from 'react'
import { RouteProps } from 'react-router-dom'

//TODO 微前端内有问题，暂时改成同步加载
// const CombinatoryOverview = lazy(() => import('@/pages/combinatoryManager/Overview'))
// const CombinatoryCashflow = lazy(() => import('@/pages/combinatoryManager/Cashflow'))
// const CombinatoryPositioning = lazy(() => import('@/pages/combinatoryManager/Positioning'))

import CombinatoryOverview from '@/pages/combinatoryManager/Overview'
import CombinatoryCashflow from '@/pages/combinatoryManager/Cashflow'
import CombinatoryPositioning from '@/pages/combinatoryManager/Positioning'


export const routes: RouteProps[] =  [
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
