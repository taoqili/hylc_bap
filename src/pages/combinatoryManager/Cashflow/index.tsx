import React, { useCallback, useEffect, useState } from 'react'
import { Col, Row } from "antd";
import { getAssets } from "@/utils";
import './index.less'
import LcCard from "@/components/LcCard";
import CashflowFilter from './components/CashflowFilter';
import ButtonGroup from '@/components/ButtonGroup'
import CashflowCard from './components/CashflowCard'
import CashflowBar from './components/CashflowBar'
import CashflowTable from './components/CashflowTable'

let cashflow_day = [{
  amt_in: '4323.58',
  amt_out: '2165.30'
}]
let cashflow_month = [{
  amt_in: '346.58',
  amt_out: '565.30'
}]

let CashflowBarData = {
  xAxisData: ['2021-01-13', '2021-02-13', '2021-03-13', '2021-04-13', '2021-05-13', '2021-06-13', '2021-07-13', '2021-08-13', '2021-09-13', '2021-10-13', '2021-11-13', '2021-12-13'],
  yAxisdata: [-100, 30, -70, 40, 125, 50, 30, 70, 40, -125, 70, 40],
}

let buttonArr = [
  { label: '日', value: 'day' },
  { label: '周', value: 'week' },
  { label: '月', value: 'month' },
  { label: '季度', value: 'quarter' },
  { label: '半年', value: 'halfYear' }
]

let cashflowTableData = [
  {
    asset_cate: '信用债',
    amt: '609960',
    amt_pct: '30.9%',
    reve_rt: '5.6%',
    asset_dura: '1.6'
  },
  {
    asset_cate: '利率债',
    amt: '609960',
    amt_pct: '30.9%',
    reve_rt: '5.6%',
    asset_dura: '1.6'
  },
  {
    asset_cate: '基金',
    amt: '-609960',
    amt_pct: '30.9%',
    reve_rt: '5.6%',
    asset_dura: '1.6'
  },
  {
    asset_cate: '回购',
    amt: '609960',
    amt_pct: '30.9%',
    reve_rt: '5.6%',
    asset_dura: '1.6'
  },
  {
    asset_cate: '专户',
    amt: '609960',
    amt_pct: '30.9%',
    reve_rt: '5.6%',
    asset_dura: '1.6'
  },
  {
    asset_cate: '现金',
    amt: '609960',
    amt_pct: '30.9%',
    reve_rt: '5.6%',
    asset_dura: '1.6'
  },
  {
    asset_cate: '专户',
    amt: '609960',
    amt_pct: '30.9%',
    reve_rt: '5.6%',
    asset_dura: '1.6'
  },
  {
    asset_cate: '现金',
    amt: '609960',
    amt_pct: '30.9%',
    reve_rt: '5.6%',
    asset_dura: '1.6'
  },

]

let cashflowTableColumns = [
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
let filterArr = ['选项一', '选项二', '选项三', '选项四']

export default () => {
  const [defaultSelected, setDefaultSelected] = useState('day')

  const changeButton = useCallback((event) => {
    const { target } = event
    setDefaultSelected(target.value)
    console.log('defaultSelected', defaultSelected)
  }, [])

  return (
    <div className={'cashflow-wrapper'}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <CashflowFilter filterArr={filterArr} />
        </Col>
        <Col span={8}>
          <LcCard>
            {/* 总流入和总流出 */}
            <div className='cardWraper'>
              <ButtonGroup defaultActivated={defaultSelected} items={buttonArr} onChange={changeButton}></ButtonGroup>
              <div className="cardButtom">
                {/*  现金总流入  */}
                <CashflowCard
                  title={'现金总流入'}
                  cardData={cashflow_day[0].amt_in}
                  unit={'万'}
                  bgimg={getAssets('img/combinatory/cashflow-in.png')}
                />
                {/*  现金总流出  */}
                <CashflowCard
                  title={'现金总流出'}
                  cardData={cashflow_day[0].amt_out}
                  unit={'万'}
                  bgimg={getAssets('img/combinatory/cashflow-out.png')}
                />
              </div>
            </div>
          </LcCard>
        </Col>
        <Col span={16}>
          <CashflowBar
            title={'现金流分布2'}
            dataSource={CashflowBarData}
            echartsConfig={{
              barColor: ['#2199FF', '#4FC7FF'],
            }}
          />
        </Col>
        <Col span={24}>
          <CashflowTable
            title={'现金流分布'}
            unit={'万元'}
            dataSource={cashflowTableData}
            columns={cashflowTableColumns}
          />
        </Col>
      </Row>
    </div>
  )
}
