import React, { useEffect } from 'react'
import { Col, Row } from "antd"
import { PicCenterOutlined } from '@ant-design/icons'
import IndicatorCard from '@/components/IndicatorCard'
import HoldingCard from "./HoldingCard";
import AssetRatioChart from './AssetRatioChart'

import './index.less'

export default () => {
  useEffect(() => {

  }, [])

  return (
    <div className={'positioning-wrapper'}>
      <Row gutter={[16, 16]}>
        <Col span={16}>
          <IndicatorCard
            title={'总资产规模'}
            value={'232326523'}
            unit={'亿'}
            titleIcon={<PicCenterOutlined style={{fontSize: 16, color: '#4CB2F4'}}/>}
            // titleIcon={testImg}
            // trends={[
            //   {title: '余额', value: '300025'},
            //   {title: '比上月', value: '2.51', unit: '%'},
            //   {title: '比上年', value: '-2.5', unit: '%'}
            // ]}
          >
            <AssetRatioChart data={[
              [
                {name: '债券', value: 5123.6},
                {name: '股票', value: 1123},
                {name: '基金', value: 123.8},
                {name: '现金', value: 12313.5},
                {name: '非标', value: 2323.5},
                {name: '逆回购', value: 1233.8},
                {name: '其他', value: 2123.8}
              ]
            ]} />
          </IndicatorCard>
        </Col>
        <Col span={4}>
          <IndicatorCard
            title={'总负债规模'}
            value={'34342500'}
            height={144}
            // trends={[
            //   {title: '比上月', value: '13.5', unit: '%'}
            // ]}
          />
        </Col>
        <Col span={4}>
          <IndicatorCard
            title={'总净值规模'}
            value={'31423601'}
            height={144}
            // trends={[
            //   {title: '比上年', value: '11.2', unit: '%'}
            // ]}
          />
        </Col>

        <Col span={24}>
          <HoldingCard
            title={'债券持仓分析'}
            columns={[]}
            dataSource={[]}
            unit={'万元'}
            defaultAction={'pingji'}
            actions={[
              {
                label: '评级分布',
                value: 'pingji'
              },
              {
                label: '久期分布',
                value: 'jiuqi'
              },
              {
                label: '剩余期限分布',
                value: 'shengyu'
              },
              {
                label: '行业分布',
                value: 'hangye'
              }
            ]}
            onActionChange={({target}) => {
              debugger
            }}
          />
        </Col>
        <Col span={24}>
          <HoldingCard title={'股票持仓分析'} columns={[]} dataSource={[]} unit={'万元'}/>
        </Col>
        <Col span={24}>
          <HoldingCard
            title={'非标持仓分析'}
            columns={[]}
            dataSource={[]}
            defaultAction={'rongzi'}
            actions={[
              {label: '行业', value: 'hangye'},
              {label: '融资区域', value: 'rongzi'},
              {label: '担保方式', value: 'danbao'}
            ]}
            onActionChange={() => {

            }}
          />
        </Col>

      </Row>
    </div>
  )
}
