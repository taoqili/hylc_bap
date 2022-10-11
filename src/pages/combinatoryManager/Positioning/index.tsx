import React, { useEffect } from 'react'
import { Col, Row } from "antd"
import { PicCenterOutlined } from '@ant-design/icons'
import IndicatorCard from '@/components/IndicatorCard'
import HoldingCard from "./components/HoldingCard";
import AssetRatioChart from './components/AssetRatioChart'

import './index.less'

const data = [
  {
    Asset_Class: '分类名称1',
    Asset_Bal: '41123',
    Bal_Pct: '30.9%',
    Mature_Reve_Rate: '5.6%',
    Rura: '123',
    Index_Cd: 'Rating_Spread'
  },
  {
    Asset_Class: '分类名称11',
    Asset_Bal: '213123',
    Bal_Pct: '30.9%',
    Mature_Reve_Rate: '5.6%',
    Rura: '123',
    Index_Cd: 'Rating_Spread'
  },
  {
    Asset_Class: '分类名称111',
    Asset_Bal: '41123123',
    Bal_Pct: '30.9%',
    Mature_Reve_Rate: '5.6%',
    Rura: '123',
    Index_Cd: 'Rating_Spread'
  },
  {
    Asset_Class: '分类称111',
    Asset_Bal: '423123',
    Bal_Pct: '30.9%',
    Mature_Reve_Rate: '5.6%',
    Rura: '123',
    Index_Cd: 'Rating_Spread'
  },{
    Asset_Class: '分类名称1111',
    Asset_Bal: '411223',
    Bal_Pct: '30.9%',
    Mature_Reve_Rate: '5.6%',
    Rura: '123',
    Index_Cd: 'Rating_Spread'
  },{
    Asset_Class: '分类名称2111',
    Asset_Bal: '45123123',
    Bal_Pct: '30.9%',
    Mature_Reve_Rate: '5.6%',
    Rura: '123',
    Index_Cd: 'Rating_Spread'
  },

  {
    Asset_Class: '分类名称2',
    Asset_Bal: '4112123',
    Bal_Pct: '30.9%',
    Mature_Reve_Rate: '5.6%',
    Rura: '123',
    Index_Cd: 'Rura_Spread'
  },
  {
    Asset_Class: '分类名称3',
    Asset_Bal: '41123123',
    Bal_Pct: '30.9%',
    Mature_Reve_Rate: '5.6%',
    Rura: '123',
    Index_Cd: 'Rating_Spread'
  },
  {
    Asset_Class: '分类名称4',
    Asset_Bal: '41123123',
    Bal_Pct: '30.9%',
    Mature_Reve_Rate: '5.6%',
    Rura: '123',
    Index_Cd: 'Rura_Spread'
  },
  {
    Asset_Class: '分类名称5',
    Asset_Bal: '41123123',
    Bal_Pct: '30.9%',
    Mature_Reve_Rate: '5.6%',
    Rura: '123',
    Index_Cd: 'Remain_Term_Spread'
  },
  {
    Asset_Class: '分类名称6',
    Asset_Bal: '41123123',
    Bal_Pct: '30.9%',
    Mature_Reve_Rate: '5.6%',
    Rura: '123',
    Index_Cd: 'Industry_Spread'
  },
  {
    Asset_Class: '分类名称7',
    Asset_Bal: '41123123',
    Bal_Pct: '30.9%',
    Mature_Reve_Rate: '5.6%',
    Rura: '123',
    Index_Cd: 'Industry_Spread'
  },
  {
    Asset_Class: '分类名称71',
    Asset_Bal: '41123123',
    Bal_Pct: '30.9%',
    Mature_Reve_Rate: '5.6%',
    Rura: '123',
    Index_Cd: 'Industry_Spread'
  },
  {
    Asset_Class: '分类名称711',
    Asset_Bal: '41123123',
    Bal_Pct: '30.9%',
    Mature_Reve_Rate: '5.6%',
    Rura: '123',
    Index_Cd: 'Industry_Spread'
  },
  {
    Asset_Class: '分类11',
    Asset_Bal: '41123123',
    Bal_Pct: '30.9%',
    Mature_Reve_Rate: '5.6%',
    Rura: '123',
    Index_Cd: 'Industry_Spread'
  },
  {
    Asset_Class: '分类1111',
    Asset_Bal: '41123123',
    Bal_Pct: '30.9%',
    Mature_Reve_Rate: '5.6%',
    Rura: '123',
    Index_Cd: 'Industry_Spread'
  },
  {
    Asset_Class: '分类名31',
    Asset_Bal: '4112312',
    Bal_Pct: '30.9%',
    Mature_Reve_Rate: '5.6%',
    Rura: '123',
    Index_Cd: 'Industry_Spread'
  },
  {
    Asset_Class: '分类名33',
    Asset_Bal: '413123',
    Bal_Pct: '30.9%',
    Mature_Reve_Rate: '5.6%',
    Rura: '123',
    Index_Cd: 'Industry_Spread'
  },
  {
    Asset_Class: '分类名34',
    Asset_Bal: '4123123',
    Bal_Pct: '30.9%',
    Mature_Reve_Rate: '5.6%',
    Rura: '123',
    Index_Cd: 'Industry_Spread'
  }
]

const bondColumns = [
  {
    key: 'Asset_Class',
    title: '分类名称',
    dataIndex: 'Asset_Class'
  },
  {
    key: 'Asset_Bal',
    title: '资产余额',
    dataIndex: 'Asset_Bal'
  },
  {
    key: 'Bal_Pct',
    title: '余额占比',
    dataIndex: 'Bal_Pct'
  },
  {
    key: 'Mature_Reve_Rate',
    title: '到期收益率',
    dataIndex: 'Mature_Reve_Rate'
  },
  {
    key: 'Rura',
    title: '久期',
    dataIndex: 'Rura'
  }
]

const stockColumns = [
  {
    key: 'Class',
    title: '分类',
    dataIndex: 'Class'
  },
  {
    key: 'MakePos_Cost',
    title: '持仓成本',
    dataIndex: 'MakePos_Cost'
  },
  {
    key: 'MakePos_MarketVal',
    title: '持仓市值',
    dataIndex: 'MakePos_MarketVal'
  },
  {
    key: 'floating_amt',
    title: '浮盈浮亏',
    dataIndex: 'floating_amt'
  },
  {
    key: 'Accum_Reve',
    title: '累计收益',
    dataIndex: 'Accum_Reve'
  }
]

export default () => {
  useEffect(() => {

  }, [])

  return (
    <div className={'positioning-wrapper'}>
      <Row gutter={[16, 16]}>
        <Col span={16}>
          <IndicatorCard
            title={'总资产规模'}
            value={'232326523'}
            unit={'亿'}
            titleIcon={<PicCenterOutlined style={{fontSize: 16, color: '#4CB2F4'}}/>}
            // titleIcon={testImg}
            // trends={[
            //   {title: '余额', value: '300025'},
            //   {title: '比上月', value: '2.51', unit: '%'},
            //   {title: '比上年', value: '-2.5', unit: '%'}
            // ]}
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
        <Col span={4}>
          <IndicatorCard
            title={'总负债规模'}
            value={'34342500'}
            height={144}
            // trends={[
            //   {title: '比上月', value: '13.5', unit: '%'}
            // ]}
          />
        </Col>
        <Col span={4}>
          <IndicatorCard
            title={'总净值规模'}
            value={'31423601'}
            height={144}
            // trends={[
            //   {title: '比上年', value: '11.2', unit: '%'}
            // ]}
          />
        </Col>

        <Col span={24}>
          <HoldingCard
            title={'债券持仓分析'}
            columns={bondColumns}
            dataSource={data}
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
            dataSource={[]}
            unit={'万元'}
            echartsConfig={{
              barColors: ['#69B6FB', '#6691FD']
            }}
          />
        </Col>
        <Col span={24}>
          <HoldingCard
            title={'非标持仓分析'}
            columns={[]}
            dataSource={[]}
            defaultAction={'rongzi'}
            echartsConfig={{
              barColors: ['#87E4ED', '#C0E978']
            }}
            actions={[
              {label: '行业', value: 'hangye'},
              {label: '融资区域', value: 'rongzi'},
              {label: '担保方式', value: 'danbao'}
            ]}
          />
        </Col>

      </Row>
    </div>
  )
}
