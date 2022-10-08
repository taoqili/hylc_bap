import React from 'react'
import { Col, Row } from "antd";
import Card from "@/components/Card";
import './index.less'

export default () => {
  return (
    <div className={'cashflow-wrapper'}>
      <div className={'cashflow-filter'}>
        筛选条
      </div>
      <Row gutter={[16, 16]}>
        <Col span={6}><Card>总流入和总流出</Card></Col>
        <Col span={18}><Card>现金流分布</Card></Col>
        <Col span={24}><Card>现金流分析表</Card></Col>
      </Row>
    </div>
  )
}
