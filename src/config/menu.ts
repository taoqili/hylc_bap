
export interface MenuProps {
  key: string;
  path: string;
  label: string;
}

export const menus: MenuProps[] = [
  {
    key: 'home',
    path: '/',
    label: '首页'
  },
  {
    key: 'combinatoryOverview',
    path: '/combinatory/overview',
    label: '组合总揽多产品',
  },
  {
    key: 'combinatoryOverviewSingle',
    path: '/combinatory/overview/single',
    label: '组合总揽单产品',
  },
  {
    key: 'combinatoryCashflow',
    path: '/combinatory/cashflow',
    label: '现金流分析',
  },
  {
    key: 'combinatoryPositioning',
    path: '/combinatory/positioning',
    label: '持仓分析',
  }
]
