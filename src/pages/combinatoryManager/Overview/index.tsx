import React from 'react'
import { Col, Row } from 'antd'
import LcCard from '@/components/LcCard'
import { getAssets } from "@/utils";
import IndicatorCard from "@/components/IndicatorCard";
import ProdAssetLine from './components/ProdAssetLine'
import LeverageBar from './components/LeverageBar'
import InvestTable from './components/InvestTable'
import InvestBar from './components/InvestBar'
import HistoryAssetLine from './components/HistoryAssetLine'
import CustomerCard from './components/CustomerCard'
import './index.less'
import InvestTableData from './mock/InvestTableData'



interface CombinatoryOverviewProps {
  type?: 'multiple' | 'single',
}

export default (props: CombinatoryOverviewProps) => {
  // 产品总规模等4个卡片数据
  let cardDimensions = {
    name: '产品总规模',
    unit: '亿',
    amt: '5606',
    com_lastd: '12.62',
    com_lastm: '12.62',
    com_lasty: '12.62',
    img: getAssets('img/combinatory/scale@2x.png')
  }
  let cardQuantity = {
    name: '产品数量',
    amt: '6',
    unit: '个',
    com_lastd: '',
    com_lastm: '1',
    com_lasty: '2',
    img: getAssets('img/combinatory/num@2x.png')
  }
  let cardRepurchase = {
    name: '产品正回购',
    amt: '217.34',
    unit: '亿',
    com_lastd: '12.62',
    com_lastm: '12.62',
    com_lasty: '12.62',
    img: getAssets('img/combinatory/buyback@2x.png')
  }
  let cardCashAvailable = {
    name: '产品可用现金',
    amt: '217.34',
    unit: '亿',
    com_lastd: '12.62',
    com_lastm: '12.62',
    com_lasty: '12.62',
    img: getAssets('img/combinatory/cash@2x.png')
  }
  let cardDrawdown = {
    name: '最大回撤',
    unit: '亿',
    num: '-0.0001',
    img: getAssets('img/combinatory/zdhc@2x.png')
  }
  let cardVolatility = {
    name: '波动率',
    num: '0.10',
    unit: '%',
    img: getAssets('img/combinatory/bdl@2x.png')
  }
  let cardSharpe = {
    name: '夏普比',
    num: '27.19',
    unit: '',
    img: getAssets('img/combinatory/xpb@2x.png')
  }
  // 产品净资产折线图
  let prodNetAssets = {
    xAxisData: ['2021-01-13', '2021-02-13', '2021-03-13', '2021-04-13', '2021-05-13', '2021-06-13', '2021-07-13', '2021-08-13', '2021-09-13', '2021-10-13', '2021-11-13', '2021-12-13'],
    yAxisdata: [50, 30, 70, 40, 125, 50, 30, 70, 40, 125, 70, 40],
  }
  // 产品净值折线图
  let prodNetValue = {
    xAxisData: ['2021-01-13', '2021-02-13', '2021-03-13', '2021-04-13', '2021-05-13', '2021-06-13', '2021-07-13', '2021-08-13', '2021-09-13', '2021-10-13', '2021-11-13', '2021-12-13'],
    yAxisdata: [50, 30, 70, 40, 125, 50, 30, 70, 40, 125, 70, 40],
  }
  // 产品年化收益率折线图
  let prodAnnualizedYield = {
    xAxisData: ['2021-01-13', '2021-02-13', '2021-03-13', '2021-04-13', '2021-05-13', '2021-06-13', '2021-07-13', '2021-08-13', '2021-09-13', '2021-10-13', '2021-11-13', '2021-12-13'],
    yAxisdata: [50, 30, 70, 40, 125, 50, 30, 70, 40, 125, 70, 40],
  }
  // 产品杠杆率时序分布柱状图数据
  let LeverageTiming = {
    xAxisData: ['2021-01-13', '2021-02-13', '2021-03-13', '2021-04-13', '2021-05-13', '2021-06-13', '2021-07-13', '2021-08-13', '2021-09-13', '2021-10-13', '2021-11-13', '2021-12-13'],
    yAxisdata: [80, 30, 70, 40, 125, 50, 30, 70, 40, 125, 70, 40],
  }
  //投资端分布情况柱状图
  let investBarData = {
    xAxisData: [10, 200, 300, 400, 500, 600],
    yAxisData: ['现金', '专户', '回购', '基金', '利率债', '信用债']
  }
  // 历史资产配置
  let historyAsset = {
    xAxisData: ['2021-01-13', '2021-02-13', '2021-03-13', '2021-04-13', '2021-05-13', '2021-06-13', '2021-07-13', '2021-08-13', '2021-09-13', '2021-10-13', '2021-11-13', '2021-12-13'],
    series: [{
      name: '股票A',
      data: [10, 30, 50, 40, 80, 10, 30, 50, 40, 80, 70, 40],
      lineStyleColor: "#F89C30",
      areaStyleColor: ['#fbcd97', '#fef5ea']
    },
    {
      name: '债券',
      data: [20, 70, 60, 60, 100, 20, 70, 60, 60, 100, 40, 90],
      lineStyleColor: "#2CD3F7",
      areaStyleColor: ['#95e9fb', '#e9fbfe']
    },
    {
      name: '基金',
      data: [40, 90, 50, 80, 120, 40, 90, 50, 80, 120, 70, 40],
      lineStyleColor: "#2883FF",
      areaStyleColor: ['#95ddfb', '#e9f8fe']
    },
    {
      name: '现金',
      data: [70, 110, 80, 50, 140, 70, 110, 80, 50, 140, 50, 20],
      lineStyleColor: "#E15AF4",
      areaStyleColor: ['#f0acf9', '#fceefe']
    },
    {
      name: '其他',
      data: [90, 130, 90, 70, 125, 90, 130, 90, 70, 125, 40, 90],
      lineStyleColor: '#8159E7',
      areaStyleColor: ['#95c2fb', '#e9f3fe']
    },
    ]
  }
  // 个人客户总数
  let individualCustomers = {
    pieData: [
      { value: 1048, name: '≤5万' },
      { value: 735, name: '5~10万元' },
      { value: 580, name: '10~30万元' },
      { value: 484, name: '30~100万元' },
      { value: 300, name: '100~300万元' },
      { value: 300, name: '≥300万元' }
    ],
    pieColor: ['#49C9FF', '#2DADFF', '#3F90FF', '#4974FF', '#414AFF', '#9E43EC'],
  }
  // 企业客户总数
  let enterpriseCustomers = {
    pieData: [
      { value: 1048, name: '≤1000家' },
      { value: 735, name: '1000~5000家' },
      { value: 580, name: '5000~10000家' },
      { value: 300, name: '≥10000家' }
    ],
    pieColor: ['#37B1FF', '#25E3FF', '#63FFD1', '#00E97E']
  }
  // 投资端分类统计表表头数据
  const investTableColumns = [
    {
      key: 'asset_cate',
      title: '资产类型',
      dataIndex: 'asset_cate',
      ellipsis: true,
      align: 'right'

    },
    {
      key: 'amt',
      title: '余额',
      dataIndex: 'amt',
      align: 'right',
      // render(value: any) {
      //   return <Trends align={'right'} data={[{ value }]} />
      // }
    },
    {
      key: 'amt_pct',
      title: '余额占比',
      dataIndex: 'amt_pct',
      align: 'right'
    },
    {
      key: 'reve_rt',
      title: '加权收益率',
      dataIndex: 'reve_rt',
      align: 'right'

    },
    {
      key: 'asset_dura',
      title: '久期',
      dataIndex: 'asset_dura',
      align: 'right'

    },
  ]

  const { type = 'multiple' } = props
  return (
    <div className={'overview-wrapper'}>
      <Row gutter={[16, 16]}>
        {
          type === 'multiple'
            ? <>
              {
                [cardDimensions, cardQuantity, cardRepurchase, cardCashAvailable].map(item => {
                  if (item == cardQuantity) {
                    return (
                      <Col span={6}>
                        <IndicatorCard
                          title={item.name}
                          value={item.amt}
                          unit={item.unit}
                          trendsDirection={'v'}
                          trends={[
                            { title: '比上月', value: item.com_lastm, unit: item.unit },
                            { title: '比上年', value: item.com_lasty, unit: item.unit }
                          ]}
                        >
                          <div style={{ textAlign: 'right' }}>
                            <img width={42} src={item.img} alt="" />
                          </div>
                        </IndicatorCard>
                      </Col>
                    )

                  } else {
                    return (
                      <Col span={6}>
                        <IndicatorCard
                          title={item.name}
                          value={item.amt}
                          unit={item.unit}
                          trendsDirection={'v'}
                          trends={[
                            { title: '比上日', value: item.com_lastd, unit: item.unit },
                            { title: '比上月', value: item.com_lastm, unit: item.unit },
                            { title: '比上年', value: item.com_lasty, unit: item.unit }
                          ]}
                        >
                          <div style={{ textAlign: 'right' }}>
                            <img width={42} src={item.img} alt="" />
                          </div>
                        </IndicatorCard>
                      </Col>
                    )
                  }

                })
              }
            </> : null
        }
        {
          type === 'single'
            ? <>
              {
                [cardDimensions, cardQuantity, cardRepurchase].map(item => {
                  if (item == cardQuantity) {
                    return (
                      <Col span={5}>
                        <IndicatorCard
                          title={item.name}
                          value={item.amt}
                          unit={item.unit}
                          trendsDirection={'v'}
                          trends={[
                            { title: '比上月', value: item.com_lastm, unit: item.unit },
                            { title: '比上年', value: item.com_lasty, unit: item.unit }
                          ]}
                        >
                          <div style={{ textAlign: 'right' }}>
                            <img width={42} src={item.img} alt="" />
                          </div>
                        </IndicatorCard>
                      </Col>
                    )

                  } else {
                    return (
                      <Col span={5}>
                        <IndicatorCard
                          title={item.name}
                          value={item.amt}
                          unit={item.unit}
                          trendsDirection={'v'}
                          trends={[
                            { title: '比上日', value: item.com_lastd, unit: item.unit },
                            { title: '比上月', value: item.com_lastm, unit: item.unit },
                            { title: '比上年', value: item.com_lasty, unit: item.unit }
                          ]}
                        >
                          <div style={{ textAlign: 'right' }}>
                            <img width={42} src={item.img} alt="" />
                          </div>
                        </IndicatorCard>
                      </Col>
                    )
                  }

                })
              }

              {
                [cardDrawdown, cardVolatility, cardSharpe].map(item => {
                  return (
                    <Col span={3}>
                      <IndicatorCard
                        value={item.num}
                        style={{
                          fontSize: 30,
                          color: String(item.num).indexOf('-') === 0 ? '#2AC97D' : '#000',
                          textAlign: 'center'
                        }}
                        unit={item.unit || ''}
                        topExtra={
                          <div style={{ textAlign: 'center', marginBottom: 0 }}>
                            <div><img width={42} height={42} src={item.img} alt="" /></div>
                            <div style={{ marginTop: 14 }}>{item.name}</div>
                          </div>
                        }
                      />
                    </Col>
                  )
                })
              }
            </> : null
        }

        <Col span={12}>
          <ProdAssetLine
            title={'产品净资产走势'}
            unit={'万元'}
            dataSource={prodNetAssets}
            echartsConfig={{
              areaColor: ['rgba(26, 182, 246, 0.4)', 'rgba(26, 182, 246, 0.01)'],
              lineColor: '#1AB6F6'
            }}
          />
        </Col>
        <Col span={12}>
          <LeverageBar
            title={'杠杆率时序分布'}
            unit={'万元'}
            dataSource={LeverageTiming}
            echartsConfig={{
              barColor: ['#2199FF', '#4FC7FF'],
            }}
          />
        </Col>
        {type === 'single' ? <Col span={12}>
          <ProdAssetLine
            title={'产品净值走势'}
            unit={'万元'}
            dataSource={prodNetValue}
            echartsConfig={{
              areaColor: ['rgba(34, 224, 206, 0.4)', 'rgba(34, 224, 206, 0.01)'],
              lineColor: '#22E0CE'
            }}
          />
        </Col> : null}
        {type === 'single' ? <Col span={12}>
          <ProdAssetLine
            title={'产品年化收益走势2'}
            unit={'万元'}
            dataSource={prodAnnualizedYield}
            echartsConfig={{
              areaColor: ['rgba(93, 156, 240, 0.4)', 'rgba(93, 156, 240, 0.01)'],
              lineColor: '#5D9CF0'
            }}
          />
        </Col> : null}
        <Col span={12}>
          <InvestTable
            title={'投资端分类统计表'}
            unit={'万元'}
            dataSource={InvestTableData}
            columns={investTableColumns}
          />
        </Col>
        <Col span={12}>
          <InvestBar
            title={'投资端分布情况'}
            unit={'万元'}
            dataSource={investBarData}
            echartsConfig={{
              barColor: ['#2199FF', '#4FC7FF']
            }}
          />
        </Col>

        <Col span={24}>
          <HistoryAssetLine
            title={'历史资产配置'}
            dataSource={historyAsset}
            echartsConfig={{
              areaColor: ['rgba(26, 182, 246, 0.4)', 'rgba(26, 182, 246, 0.01)'],
              lineColor: '#1AB6F6'
            }}
          />
        </Col>
        <Col span={12}>
          <InvestTable
            title={'投资端分类统计表'}
            unit={'万元'}
            dataSource={InvestTableData}
            columns={investTableColumns}
          />
        </Col>
        <Col span={12}>
          <LcCard title={'客户分布情况'}>
            <div className='customerWrap'>
              <div className='customerleft'>
                <CustomerCard
                  title={'个人客户总数'}
                  unit={'人'}
                  customerNum={12345}
                  piedata={individualCustomers.pieData}
                  color={individualCustomers.pieColor}
                />
              </div>
              <div className='customerleft customerright'>
                <CustomerCard
                  title={'企业客户总数'}
                  unit={'家'}
                  customerNum={209}
                  piedata={individualCustomers.pieData}
                  color={individualCustomers.pieColor}
                />
              </div>
            </div>
          </LcCard>
        </Col>

      </Row>
    </div>
  )
}
