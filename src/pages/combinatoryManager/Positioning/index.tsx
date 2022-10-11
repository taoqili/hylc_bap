import React, { useEffect } from 'react'
import { Col, Row } from "antd"
import IndicatorCard from '@/components/IndicatorCard'
import HoldingCard from "./components/HoldingCard";
import AssetRatioChart from './components/AssetRatioChart'
import assetImg from '@/assets/img/asset.png'
import debtImg from '@/assets/img/debt.png'
import netValueImg from '@/assets/img/net-value.png'
import './index.less'

import bondData from './mock/bondData'
import stockData from "./mock/stockData"
import nonstandardData from './mock/nonstandardData'
import Trends from "@/components/Trends";
import { formatMoney } from "@/utils";
const bondColumns = [
  {
    key: 'Asset_Class',
    title: '分类名称',
    dataIndex: 'Asset_Class',
    ellipsis: true,
    align: 'right'

  },
  {
    key: 'Asset_Bal',
    title: '资产余额',
    dataIndex: 'Asset_Bal',
    align: 'right'

  },
  {
    key: 'Bal_Pct',
    title: '余额占比',
    dataIndex: 'Bal_Pct',
    align: 'right'

  },
  {
    key: 'Mature_Reve_Rate',
    title: '到期收益率',
    dataIndex: 'Mature_Reve_Rate',
    align: 'right',
    render(value: any) {
      return (
        <Trends data={[{value}]}></Trends>
      )
    }
  },
  {
    key: 'Rura',
    title: '久期',
    dataIndex: 'Rura',
    align: 'right'

  }
]
const stockColumns = [
  {
    key: 'Class',
    title: '分类',
    dataIndex: 'Class',
    ellipsis: true,
    align: 'right'

  },
  {
    key: 'MakePos_Cost',
    title: '持仓成本',
    dataIndex: 'MakePos_Cost',
    align: 'right'
  },
  {
    key: 'MakePos_MarketVal',
    title: '持仓市值',
    dataIndex: 'MakePos_MarketVal',
    align: 'right'

  },
  {
    key: 'floating_amt',
    title: '浮盈浮亏',
    dataIndex: 'floating_amt',
    align: 'right',
    render(value: any) {
      return <Trends align={'right'} data={[
        {title: '', value: value}
      ]}/>
    }
  },
  {
    key: 'Accum_Reve',
    title: '累计收益',
    dataIndex: 'Accum_Reve',
    align: 'right'

  }
]
const nonstandardColumns = [
  {
    key: 'Class',
    title: '分类',
    dataIndex: 'Class',
    ellipsis: true,
    align: 'right'

  },
  {
    key: 'Asset_Bal',
    title: '资产余额',
    dataIndex: 'Asset_Bal',
    align: 'right',
    render(value: any) {
      return <Trends align={'right'} data={[
        {title: '', value: value}
      ]}/>
    }
  },
  {
    key: 'Com_Lastm',
    title: '比上月',
    dataIndex: 'Com_Lastm',
    align: 'right'
  },
  {
    key: 'Bal_Pct',
    title: '余额占比',
    dataIndex: 'Bal_Pct',
    align: 'right'

  },
  {
    key: 'Mature_Reve_Rate',
    title: '到期收益率',
    dataIndex: 'Mature_Reve_Rate',
    align: 'right'

  },
  {
    key: 'Rura',
    title: '久期',
    dataIndex: 'Rura',
    align: 'right'
  }
]
export default () => {
  useEffect(() => {

  }, [])

  return (
    <div className={'positioning-wrapper'}>
      <Row gutter={[16, 16]}>
        <Col span={14}>
          <IndicatorCard
            title={'总资产规模'}
            value={'232326523'}
            unit={'亿'}
            titleIcon={assetImg}
            trends={[
              {title: '余额', value: '300025', unit: '亿', formatter: (value) => formatMoney(value)},
              {title: '比上月', value: '0', unit: '%'},
              {title: '比上年', value: '-2.5', unit: '%'}
            ]}
          >
            <AssetRatioChart data={[
              [
                {name: '债券', value: 5123.6},
                {name: '股票', value: 1123},
                {name: '基金', value: 123.8},
                {name: '现金', value: 12313.5},
                {name: '非标', value: 2323.5},
                {name: '逆回购', value: 1233.8},
                {name: '其他', value: 2123.8}
              ]
            ]} />
          </IndicatorCard>
        </Col>
        <Col span={5}>
          <IndicatorCard
            title={'总负债规模'}
            value={'34342500'}
            titleIcon={debtImg}
            height={110}
            trends={[
              {title: '比上月', value: '13.5', unit: '%'}
            ]}
          />
        </Col>
        <Col span={5}>
          <IndicatorCard
            title={'总净值规模'}
            value={'31423601'}
            titleIcon={netValueImg}
            height={110}
            trends={[
              {title: '比上年', value: '11.2', unit: '%'}
            ]}
          />
        </Col>

        <Col span={24}>
          <HoldingCard
            title={'债券持仓分析'}
            columns={bondColumns}
            dataSource={bondData}
            dimensions={['Asset_Class', 'Asset_Bal']}
            unit={'亿元'}
            defaultAction={'Rating_Spread'}
            actions={[
              {
                label: '评级分布',
                value: 'Rating_Spread'
              },
              {
                label: '久期分布',
                value: 'Rura_Spread'
              },
              {
                label: '剩余期限分布',
                value: 'Remain_Term_Spread'
              },
              {
                label: '行业分布',
                value: 'Industry_Spread'
              }
            ]}
          />
        </Col>
        <Col span={24}>
          <HoldingCard
            title={'股票持仓分析'}
            columns={stockColumns}
            dataSource={stockData}
            dimensions={['Class', 'MakePos_Cost']}
            unit={'万元'}
            echartsConfig={{
              barColors: ['#69B6FB', '#6691FD']
            }}
          />
        </Col>
        <Col span={24}>
          <HoldingCard
            title={'非标持仓分析'}
            columns={nonstandardColumns}
            dataSource={nonstandardData}
            dimensions={['Class', 'Asset_Bal']}
            defaultAction={'Industry'}
            echartsConfig={{
              barColors: ['#87E4ED', '#C0E978']
            }}
            actions={[
              {label: '行业', value: 'Industry'},
              {label: '融资区域', value: 'Fin_Region'},
              {label: '担保方式', value: 'Oblig_Mode'}
            ]}
          />
        </Col>

      </Row>
    </div>
  )
}
