import React from 'react'
import { Col, Row } from 'antd'
import LcCard from '@/components/LcCard'
import LineProdNetAssets from './lineProdNetAssets'
import LineProdNetValue from './lineProdNetValue'
import LineProdAnnualizedYield from './lineProdAnnualizedYield'
import BarLeverageTiming from './barLeverageTiming'
import LineHistoryAsset from './lineHistoryAsset'
import TableInvest from './tableInvest'
import TableTopInvestor from './tableTopInvestor'
import BarInvest from './barInvest'
import PieCustomer from './pieCustomer'
import './index.less'
import { getAssets } from "@/utils";
import IndicatorCard from "@/components/IndicatorCard";

interface CombinatoryOverviewProps {
  type?: 'multiple' | 'single',

}

export default (props: CombinatoryOverviewProps) => {
  // 产品总规模等4个卡片数据
  let cardDimensions = {
    name: '产品总规模',
    unit: '亿',
    amt: '27.26',
    com_lastd: '1',
    com_lastm: '-0.32',
    com_lasty: '4.32',
    img: getAssets('img/combinatory/scale@2x.png')
  }
  let cardQuantity = {
    name: '产品数量',
    amt: '2700',
    unit: '个',
    com_lastd: '-2',
    com_lastm: '-0.32',
    com_lasty: '4.32',
    img: getAssets('img/combinatory/num@2x.png')
  }
  let cardRepurchase = {
    name: '产品正回购',
    amt: '27.26',
    unit: '亿',
    com_lastd: '0',
    com_lastm: '-0.32',
    com_lasty: '4.32',
    img: getAssets('img/combinatory/buyback@2x.png')
  }
  let cardCashAvailable = {
    name: '产品可用现金',
    amt: '27.26',
    unit: '亿',
    com_lastd: '0',
    com_lastm: '-0.32',
    com_lasty: '4.32',
    img: getAssets('img/combinatory/cash@2x.png')
  }
  // 最大回撤等3个卡片数据
  let cardMaxRollback = {
    name: '最大回撤',
    amt: '27.26',
    unit: '亿',
    img: getAssets('img/combinatory/zdhc@2x.png')
  }
  let cardVolatility = {
    name: '波动率',
    amt: '-7.26',
    unit: '%',
    img: getAssets('img/combinatory/bdl@2x.png')
  }
  let cardSharpe = {
    name: '夏普比',
    amt: '5.3',
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
  let barInvest = {
    xAxisData: [10, 200, 300, 400, 500, 600],
    yAxisData: ['信用债', '利率债', '基金', '回购', '专户', '现金']

  }
  // 历史资产配置
  let historyAsset = {
    xAxisData: ['2021-01-13', '2021-02-13', '2021-03-13', '2021-04-13', '2021-05-13', '2021-06-13', '2021-07-13', '2021-08-13', '2021-09-13', '2021-10-13', '2021-11-13', '2021-12-13'],
    series: [{
      name: '股票A',
      data: [10, 30, 50, 40, 80, 10, 30, 50, 40, 80, 70, 40],
    },
    {
      name: '债券',
      data: [20, 70, 60, 60, 100, 20, 70, 60, 60, 100, 40, 90],
    },
    {
      name: '基金',
      data: [40, 90, 50, 80, 120, 40, 90, 50, 80, 120, 70, 40],
    },
    {
      name: '现金',
      data: [70, 110, 80, 50, 140, 70, 110, 80, 50, 140, 50, 20],
    },
    {
      name: '其他',
      data: [90, 130, 90, 70, 125, 90, 130, 90, 70, 125, 40, 90],
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

  const { type = 'multiple' } = props
  return (
    <div className={'overview-wrapper'}>
      <Row gutter={[16, 16]}>
        {
          type === 'multiple'
            ? <>
              {
                [cardDimensions, cardQuantity, cardRepurchase, cardCashAvailable].map(item => {
                  return (
                    <Col span={6}>
                      <IndicatorCard
                        title={item.name}
                        value={item.amt}
                        unit={item.unit}
                        trendsDirection={'v'}
                        trends={[
                          {title: '比上日', value: item.com_lastd, unit: item.unit},
                          {title: '比上月', value: item.com_lastm, unit: item.unit},
                          {title: '比上年', value: item.com_lasty, unit: item.unit}
                        ]}
                      >
                        <div style={{textAlign: 'right'}}>
                          <img width={42} src={item.img} alt=""/>
                        </div>
                      </IndicatorCard>
                    </Col>
                  )
                })
              }
            </> : null
        }
        {
          type === 'single'
            ? <>
              {
                [cardDimensions, cardRepurchase, cardCashAvailable].map(item => {
                  return (
                    <Col span={5}>
                      <IndicatorCard
                        title={item.name}
                        value={item.amt}
                        unit={item.unit}
                        trendsDirection={'v'}
                        trends={[
                          {title: '比上日', value: item.com_lastd, unit: item.unit},
                          {title: '比上月', value: item.com_lastm, unit: item.unit},
                          {title: '比上年', value: item.com_lasty, unit: item.unit}
                        ]}
                      >
                        <div style={{textAlign: 'right'}}>
                          <img width={42} src={item.img} alt=""/>
                        </div>
                      </IndicatorCard>
                    </Col>
                  )
                })
              }

              {
                [cardMaxRollback,cardVolatility, cardSharpe].map(item => {
                  return (
                    <Col span={3}>
                      <IndicatorCard
                        value={item.amt}
                        style={{
                          fontSize: 30,
                          color: String(item.amt).indexOf('-') === 0 ? '#2AC97D': '#000',
                          textAlign: 'center'
                        }}
                        unit={item.unit || ''}
                        topExtra={
                          <div style={{textAlign: 'center', marginBottom: 0}}>
                            <div><img width={42} height={42} src={item.img} alt=""/></div>
                            <div style={{marginTop:14}}>{item.name}</div>
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
          <LcCard>
            <div className="titieWrap">
              <span className="tableTitle">产品净资产走势</span>
              <span className="monetaryUnit">单位:万元</span>
            </div>
            <LineProdNetAssets data={prodNetAssets}></LineProdNetAssets>
          </LcCard>
        </Col>
        <Col span={12}>
          <LcCard>
            <div className="titieWrap">
              <span className="tableTitle">杠杆率时序分布</span>
              <span className="monetaryUnit">单位:万元</span>
            </div>
            <BarLeverageTiming data={LeverageTiming}></BarLeverageTiming>
          </LcCard>
        </Col>

        {type === 'single' ? <Col span={12}>
          <LcCard>
            {/* 产品净值走势 */}
            <div className="titieWrap">
              <span className="tableTitle">产品净值走势</span>
              <span className="monetaryUnit">单位:万元</span>
            </div>

            <LineProdNetValue data={prodNetValue}></LineProdNetValue>
          </LcCard>
        </Col> : null}
        {type === 'single' ? <Col span={12}>
          <LcCard>
            {/* 产品年化收益走势 */}
            <div className="titieWrap">
              <span className="tableTitle">产品年化收益走势</span>
              <span className="monetaryUnit">单位:万元</span>
            </div>

            <LineProdAnnualizedYield data={prodAnnualizedYield}></LineProdAnnualizedYield>
          </LcCard>
        </Col> : null}

        <Col span={12}>
          <LcCard>
            <div>
              <div className="titieWrap">
                <span className="tableTitle">投资端分类统计表</span>
                <span className="monetaryUnit">单位:万元</span>
              </div>
              <TableInvest></TableInvest>
            </div>
          </LcCard>
        </Col>
        <Col span={12}>
          <LcCard >
            <div>
              <div className="titieWrap">
                <span className="tableTitle">投资端分布情况</span>
                <span className="monetaryUnit">单位:万元</span>
              </div>
              <BarInvest data={barInvest}></BarInvest>
            </div>
          </LcCard>
        </Col>

        <Col span={24}>
          <LcCard>
            <div className="titieWrap titleRelative">
              <span className="tableTitle titleFloat">历史资产配置</span>
              <LineHistoryAsset data={historyAsset}></LineHistoryAsset>
            </div>
          </LcCard>
        </Col>

        <Col span={12}>
          <LcCard>
            {/* 前十投资者分布 */}
            <div >
              <div className="titieWrap">
                <span className="tableTitle">前十投资者分布</span>
                <span className="monetaryUnit">单位:万元</span>
              </div>
              <TableTopInvestor></TableTopInvestor>
            </div>
          </LcCard>
        </Col>
        <Col span={12}>
          <LcCard>
            <div className=" titieWrap">
              <span className="tableTitle ">客户数分布情况</span>
            </div>
            <div className="customerWrap">
              {/*  个人客户总数  */}
              <div className="customerleft">
                <div className="customerTop">
                  <div className="rowFlex">
                    <img style={{ marginRight: '10px' }} src={getAssets('img/combinatory/IndividualCustomers.png')} />
                    <span>个人客户总数</span>
                  </div>
                  <div>
                    <span className="cardNum">100981</span>
                    <span>人</span>
                  </div>
                </div>
                <div className="customerBottom">
                  <PieCustomer data={individualCustomers}></PieCustomer>
                </div>

              </div>
              {/*  企业客户总数  */}
              <div className="customerleft customerright">
                <div className="customerTop">
                  <div className="rowFlex">
                    <img style={{ marginRight: '10px' }} src={getAssets("img/combinatory/enterpriseCustomers.png")} />
                    <div className="customerTitle">企业客户总数</div>
                  </div>
                  <div>
                    <span className="cardNum">209</span>
                    <span>家</span>
                  </div>
                </div>
                <PieCustomer data={enterpriseCustomers}></PieCustomer>
              </div>

            </div>
          </LcCard>
        </Col>

      </Row>
    </div>
  )
}
