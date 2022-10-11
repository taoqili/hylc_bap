import React from 'react'
import { Col, Row } from "antd";
import LcCard from "@/components/LcCard";
import './index.less'

export default () => {
  return (
    <div className={'cashflow-wrapper'}>
      <div className={'cashflow-filter'}>
        筛选条
      </div>
      <Row gutter={[16, 16]}>
        <Col span={6}><LcCard>总流入和总流出</LcCard></Col>
        <Col span={18}><LcCard>现金流分布</LcCard></Col>
        <Col span={24}><LcCard>现金流分析表</LcCard></Col>
      </Row>
    </div>
  )
}
