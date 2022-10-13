import React, { useCallback, useEffect, useState } from 'react'
import { Col, Row, Button, Form } from "antd";
import LcCard from "@/components/LcCard";
import './index.less'
import TableCashFlow from './tableCashFlow';
import BarCashFlow from './barCashFlow';
import ButtonGroup from '@/components/ButtonGroup'
import PieCashFlow from './pieCashFlow'
// import CashBg from './images/totalCashInflow.png'

let barCashFlow = {
  xAxisData: ['2021-01-13', '2021-02-13', '2021-03-13', '2021-04-13', '2021-05-13', '2021-06-13', '2021-07-13', '2021-08-13', '2021-09-13', '2021-10-13', '2021-11-13', '2021-12-13'],
  yAxisdata: [-100, 30, -70, 40, 125, 50, 30, 70, 40, -125, 70, 40],
}

let buttonArr = [
  {label: '日', value: 'day'},
  {label: '周', value: 'week'},
  {label: '月', value: 'month'},
  {label: '季度', value: 'quarter'},
  {label: '半年', value: 'halfYear'}
]
let buttonIndex = 0 //默认第一个被选中




export default () => {
  const [defaultSelected, setDefaultSelected] = useState('day')

  const changeButton = useCallback(() => {

  }, [])
  return (
    <div className={'cashflow-wrapper'}>
      <div className={'cashflow-filter'}>
        {/* 筛选条 */}
        <Button type="primary" shape="round" >
          Download
        </Button>
      </div>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <LcCard>
            {/* 总流入和总流出 */}
            <div className='cardWraper'>
              {/*<div className='btnWraper'>*/}
              {/*  /!* <Button ghost>日</Button>*/}
              {/*  <Button ghost>周</Button>*/}
              {/*  <Button ghost>月</Button>*/}
              {/*  <Button ghost >季度</Button>*/}
              {/*  <Button ghost >半年</Button> *!/*/}

              {/*  {*/}
              {/*    buttonArr.map((item, index) => {*/}
              {/*      return ( <Button className={index === buttonIndex ? 'button_active' : ''}*/}
              {/*      key={index} onClick={() => changeButton(item, index)} ghost>*/}
              {/*      {item}*/}
              {/*    </Button>)*/}

              {/*    })*/}
              {/*  }*/}
              {/*</div>*/}
              <ButtonGroup defaultActivated={defaultSelected} items={buttonArr} onChange={changeButton}></ButtonGroup>
              <div className="cardButtom">
                {/*  现金总流入  */}
                <div className='cardLeft'>
                  <div>
                    <img src={require('./images/totalCashOutflow.png')} alt="现金总流入"></img>
                    <h3>现金总流入</h3>
                  </div>
                  <div className='cardNum'>
                    <span>25.6</span>
                    <span>万</span>
                  </div>
                </div>
                {/*  现金总流出  */}
                <div className='cardLeft'>
                  <div>
                    <img src={require('./images/totalCashOutflow.png')} alt="现金总流出"></img>
                    <h3>现金总流出</h3>
                  </div>
                  <div className='cardNum'>
                    <span>25.6</span>
                    <span>万</span>
                  </div>
                </div>

              </div>
            </div>
          </LcCard>
        </Col>
        <Col span={16}>
          <LcCard title={'现金流分布'}>
            <BarCashFlow data={barCashFlow}></BarCashFlow>
          </LcCard>
        </Col>
        <Col span={24}>
          <LcCard title={'产品净资产走势'} extra={<span>单位:万元</span>}>
            <TableCashFlow></TableCashFlow>
          </LcCard>
        </Col>
      </Row>
    </div>
  )
}
