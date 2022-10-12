import React from 'react'
import { Col, Row, Button, Form } from "antd";
import Card from "@/components/Card";
import './index.less'
import TableCashFlow from './tableCashFlow';
import BarCashFlow from './barCashFlow';
import PieCashFlow from './pieCashFlow'
// import CashBg from './images/totalCashInflow.png'

let barCashFlow = {
  xAxisData: ['2021-01-13', '2021-02-13', '2021-03-13', '2021-04-13', '2021-05-13', '2021-06-13', '2021-07-13', '2021-08-13', '2021-09-13', '2021-10-13', '2021-11-13', '2021-12-13'],
  yAxisdata: [-100, 30, -70, 40, 125, 50, 30, 70, 40, -125, 70, 40],
}

let buttonArr = ['日', '周', '月', '季度', '半年']
let buttonIndex = 0 //默认第一个被选中
let changeButton = (item:any,index:any) =>{
  buttonIndex = index  //更新状态
}



export default () => {
  


  return (
    <div className={'cashflow-wrapper'}>
      <div className={'cashflow-filter'}>
        {/* 筛选条 */}
        <Button type="primary" shape="round" >
          Download
        </Button>
      </div>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card>
            {/* 总流入和总流出 */}
            <div className='cardWraper'>
              <div className='btnWraper'>
                {/* <Button ghost>日</Button>
                <Button ghost>周</Button>
                <Button ghost>月</Button>
                <Button ghost >季度</Button>
                <Button ghost >半年</Button> */}

                {
                  buttonArr.map((item, index) => {
                    return ( <Button className={index === buttonIndex ? 'button_active' : ''}
                    key={index} onClick={() => changeButton(item, index)} ghost>
                    {item}
                  </Button>)
                   
                  })
                }

              </div>
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
          </Card>
        </Col>
        <Col span={18}>
          <Card>
            {/* 现金流分布 */}
            <div className="titieWrap">
              <span className="tableTitle">现金流分布</span>
            </div>
            <BarCashFlow data={barCashFlow}></BarCashFlow>
          </Card>
        </Col>
        <Col span={24}>
          <Card>
            {/* 现金流分析表 */}
            <div className="titieWrap">
              <span className="tableTitle">产品净资产走势</span>
              <span className="monetaryUnit">单位:万元</span>
            </div>
            <TableCashFlow></TableCashFlow>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
