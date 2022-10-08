import React from 'react'
import { Col, Row } from "antd";
import Card from "@/components/Card";
import './index.less'

export default () => {
  return (
    <div className={'positioning-wrapper'}>
      <Row gutter={[16, 16]}>
        <Col span={16}>
          <Card>总资产规模</Card>
        </Col>
        <Col span={4}><Card>总负债规模</Card></Col>
        <Col span={4}><Card>总净值规模</Card></Col>

        <Col span={24}><Card>债权持仓分析</Card></Col>
        <Col span={24}><Card>股票持仓分析</Card></Col>
        <Col span={24}><Card>非标持仓分析</Card></Col>

      </Row>
    </div>
  )
}
