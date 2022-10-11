import React from 'react'
import { Col, Row } from 'antd'
import LcCard from '@/components/LcCard'
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
                <LcCard>
                  dsfasdf
                </LcCard>
              </Col>
              <Col span={6}><LcCard>产品数量</LcCard></Col>
              <Col span={6}><LcCard>产品正回购</LcCard></Col>
              <Col span={6}><LcCard>产品可用信息</LcCard></Col>
            </> : null
        }
        {
          type === 'single'
            ? <>
              <Col span={5}><LcCard>产品总规模</LcCard></Col>
              <Col span={5}><LcCard>产品正回购</LcCard></Col>
              <Col span={5}><LcCard>产品可用信息</LcCard></Col>
              <Col span={3}><LcCard>最大回撤</LcCard></Col>
              <Col span={3}><LcCard>波动率</LcCard></Col>
              <Col span={3}><LcCard>夏普比</LcCard></Col>
            </> : null
        }

        <Col span={12}><LcCard>产品净资产走势</LcCard></Col>
        <Col span={12}><LcCard>杠杆时序分布</LcCard></Col>

        {type === 'single' ? <Col span={12}><LcCard>产品净值走势</LcCard></Col> : null}
        {type === 'single' ? <Col span={12}><LcCard>产品年化收益走势</LcCard></Col> : null}

        <Col span={12}><LcCard>投资端分类统计表</LcCard></Col>
        <Col span={12}><LcCard>投资端分布情况</LcCard></Col>

        <Col span={24}><LcCard>历史资产配置</LcCard></Col>

        <Col span={12}><LcCard>前十投资者分布</LcCard></Col>
        <Col span={12}><LcCard>客户分布情况</LcCard></Col>

      </Row>
    </div>
  )
}
