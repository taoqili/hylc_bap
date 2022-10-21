import React, { useEffect, useState } from 'react'
import { Col, Row } from "antd"
import IndicatorCard from '@/components/IndicatorCard'
import HoldingCard from "./components/HoldingCard";
import AssetRatioChart from './components/AssetRatioChart'
import './index.less'

import mockData from './mock'

import Trends from "@/components/Trends";
import { formatMoney, getAssets, getLastDate } from "@/utils";
import { getPositioningInfo } from "@/apis";
import { useSearchParams } from "react-router-dom";
import { SearchParamsProps } from "@/types";
const bondColumns = [
  {
    key: 'Asset_Class',
    title: '分类名称',
    dataIndex: 'ASSET_CLASS',
    ellipsis: true,
    align: 'right'

  },
  {
    key: 'Asset_Bal',
    title: '资产余额',
    dataIndex: 'ASSET_BAL',
    align: 'right'

  },
  {
    key: 'Bal_Pct',
    title: '余额占比',
    dataIndex: 'BAL_PCT',
    align: 'right'

  },
  {
    key: 'Mature_Reve_Rat',
    title: '到期收益率',
    dataIndex: 'MATURE_REVE_RATE',
    align: 'right',
    render(value: any) {
      return <Trends data={[{value}]} />
    }
  },
  {
    key: 'Rura',
    title: '久期',
    dataIndex: 'RURA',
    align: 'right'

  }
]
const stockColumns = [
  {
    key: 'Class',
    title: '分类',
    dataIndex: 'ASSET_CLASS',
    ellipsis: true,
    align: 'right'
  },
  {
    key: 'MakePos_Cost',
    title: '持仓成本',
    dataIndex: 'POS_COST',
    align: 'right'
  },
  {
    key: 'MakePos_MarketVal',
    title: '持仓市值',
    dataIndex: 'POS_MARKETVAL',
    align: 'right'

  },
  {
    key: 'floating_amt',
    title: '浮盈浮亏',
    dataIndex: 'FLOATING_AMT',
    align: 'right',
    render(value: any) {
      return <Trends align={'right'} data={[{value}]}/>
    }
  },
  {
    key: 'Accum_Reve',
    title: '累计收益',
    dataIndex: 'ACCUM_REVE',
    align: 'right'

  }
]
const nonstandardColumns = [
  {
    key: 'Class',
    title: '分类',
    dataIndex: 'ASSET_CLASS',
    ellipsis: true,
    align: 'right'

  },
  {
    key: 'Asset_Bal',
    title: '资产余额',
    dataIndex: 'ASSET_BAL',
    align: 'right',
    render(value: any) {
      return <Trends align={'right'} data={[{value}]}/>
    }
  },
  {
    key: 'Com_Lastm',
    title: '比上月',
    dataIndex: 'COM_LASTM',
    align: 'right'
  },
  {
    key: 'Bal_Pct',
    title: '余额占比',
    dataIndex: 'BAL_PCT',
    align: 'right'

  },
  {
    key: 'Mature_Reve_Rate',
    title: '到期收益率',
    dataIndex: 'MATURE_REVE_RATE',
    align: 'right'

  },
  {
    key: 'Rura',
    title: '久期',
    dataIndex: 'RURA',
    align: 'right'
  }
]
export default () => {
  const [params] = useSearchParams()
  const lastDate = getLastDate()
  const [bondData, setBondData] = useState<Record<string, any>[]>([])
  const [stockData, setStockData] = useState<Record<string, any>[]>([])
  const [nonstandardData, setNonstandardData] = useState<Record<string, any>[]>([])
  const [totalAsset, setTotalAsset] = useState<Record<string, any>>({})
  const [totalNetVal, setTotalNetVal] = useState<Record<string, any>>({})
  const [totalLiab, setTotalLiab] = useState<Record<string, any>>({})
  // const fetchData = async (props: SearchParamsProps) => {
  //   const {
  //     products = '',
  //     startDate = `${new Date().getFullYear()}-01-01`,
  //     endDate = lastDate
  //   } = props
  //   const data: any = await getPositioningInfo({
  //     date: '20220808' || lastDate.replace(/-/, ''),
  //     i_page_type: 'com_analysis_position',
  //     i_start_dt: '20220807' || startDate.replace(/-/g, ''),
  //     i_end_dt: '20220808' || endDate.replace(/-/,''),
  //     i_prod_list: 'XQB1801' || products
  //   })
  //   if (data && data.result) {
  //     //
  //   }
  //   console.log(mockData)
  //   debugger
  // }

  useEffect(() => {
    // fetchData({
    //   startDate: params.get('startDate') || '',
    //   endDate: params.get('endDate') || '',
    //   products: params.get('products') || ''
    // }).catch()
    setBondData(mockData.BOND_POSITION_ANALYSIS)
    setStockData(mockData.STOCK_POSITION_ANALYSIS)
    setNonstandardData(mockData.NONSTD_POSITION_ANALYSIS)
    setTotalAsset(mockData.TOTAL_ASSET)
    setTotalLiab(mockData.TOTAL_LIAB)
    setTotalNetVal(mockData.TOTAL_NETVAL)
  }, [])

  return (
    <div className={'positioning-wrapper'}>
      <Row gutter={[16, 16]}>
        <Col span={14}>
          <IndicatorCard
            title={'总资产规模'}
            value={totalAsset.TOTAL_ASSET_SIZE}
            unit={'亿'}
            trendsDirection={'v'}
            titleIcon={<img width={22} src={getAssets('img/combinatory/asset.png')} alt="" />}
            // trends={[
            //   {title: '余额', value: '300025', unit: '亿', formatter: (value) => formatMoney(value)},
            //   {title: '比上月', value: '0', unit: '%'},
            //   {title: '比上年', value: '-2.5', unit: '%'}
            // ]}
          >
            <AssetRatioChart data={[[
                {name: '债券', value: totalAsset.BOND_SIZE},
                {name: '股票', value: totalAsset.STOCK_SIZE},
                {name: '基金', value: totalAsset.FUND_SIZE},
                {name: '现金', value: totalAsset.CASH_SIZE},
                {name: '非标', value: totalAsset.NONSTD_SIZE},
                {name: '逆回购', value: totalAsset.BUYBACK_SIZE},
                {name: '其他', value: totalAsset.OTHER_SIZE}
              ]]}
            />
          </IndicatorCard>
        </Col>
        <Col span={5}>
          <IndicatorCard
            title={'总负债规模'}
            value={totalLiab.TOTAL_LIAB_SIZE}
            unit={'亿'}
            titleIcon={<img width={22} src={getAssets('img/combinatory/debt.png')} alt="" />}
            height={110}
            // trends={[
            //   {title: '比上月', value: '13.5', unit: '%'}
            // ]}
          />
        </Col>
        <Col span={5}>
          <IndicatorCard
            title={'总净值规模'}
            value={totalNetVal.TOTAL_NETVAL_SIZE}
            unit={'亿'}
            titleIcon={<img width={22} src={getAssets('img/combinatory/net-value.png')} alt="" />}
            height={110}
            // trends={[
            //   {title: '比上年', value: '11.2', unit: '%'}
            // ]}
          />
        </Col>

        <Col span={24}>
          <HoldingCard
            title={'债券持仓分析'}
            columns={bondColumns}
            dataSource={bondData}
            dimensions={['ASSET_CLASS', 'ASSET_BAL']}
            unit={'亿元'}
            defaultAction={'02'}
            actions={[
              {
                label: '评级分布',
                value: '02'
              },
              {
                label: '久期分布',
                value: '01'
              },
              {
                label: '剩余期限分布',
                value: '03'
              },
              {
                label: '行业分布',
                value: '04'
              }
            ]}
          />
        </Col>
        <Col span={24}>
          <HoldingCard
            title={'股票持仓分析'}
            columns={stockColumns}
            dataSource={stockData}
            dimensions={['ASSET_CLASS', 'POS_COST']}
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
            dimensions={['ASSET_CLASS', 'ASSET_BAL']}
            defaultAction={'03'}
            echartsConfig={{
              barColors: ['#87E4ED', '#C0E978']
            }}
            actions={[
              {label: '行业', value: '03'},
              {label: '融资区域', value: '02'},
              {label: '担保方式', value: '04'}
            ]}
          />
        </Col>

      </Row>
    </div>
  )
}
