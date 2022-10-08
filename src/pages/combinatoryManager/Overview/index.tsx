import React from 'react'
import { Col, Row } from 'antd'
import Card from '@/components/Card'
import './index.less'

interface CombinatoryOverviewProps {
  type?: 'multiple'|'single'
}

export default (props: CombinatoryOverviewProps) => {
  const {type = 'multiple'} = props
  return (
    <div className={'overview-wrapper'}>
      <Row gutter={[16, 16]}>
        {
          type === 'multiple'
            ? <>
              <Col span={6}>
                <Card>产品总规模</Card>
              </Col>
              <Col span={6}><Card>产品数量</Card></Col>
              <Col span={6}><Card>产品正回购</Card></Col>
              <Col span={6}><Card>产品可用信息</Card></Col>
            </> : null
        }
        {
          type === 'single'
            ? <>
              <Col span={5}><Card>产品总规模</Card></Col>
              <Col span={5}><Card>产品正回购</Card></Col>
              <Col span={5}><Card>产品可用信息</Card></Col>
              <Col span={3}><Card>最大回撤</Card></Col>
              <Col span={3}><Card>波动率</Card></Col>
              <Col span={3}><Card>夏普比</Card></Col>
            </> : null
        }

        <Col span={12}><Card>产品净资产走势</Card></Col>
        <Col span={12}><Card>杠杆时序分布</Card></Col>

        {type === 'single' ? <Col span={12}><Card>产品净值走势</Card></Col> : null}
        {type === 'single' ? <Col span={12}><Card>产品年化收益走势</Card></Col> : null}

        <Col span={12}><Card>投资端分类统计表</Card></Col>
        <Col span={12}><Card>投资端分布情况</Card></Col>

        <Col span={24}><Card>历史资产配置</Card></Col>

        <Col span={12}><Card>前十投资者分布</Card></Col>
        <Col span={12}><Card>客户分布情况</Card></Col>

      </Row>
    </div>
  )
}
