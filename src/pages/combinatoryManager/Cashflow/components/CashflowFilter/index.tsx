import React, { useCallback, useEffect, useState } from "react"
import { Button, Form, Input, Select } from "antd";
import LcCard from '@/components/LcCard'
import Charts from '@/components/Charts'
import * as echarts from 'echarts'
import LcTable from '@/components/LcTable'
import ButtonGroup, { ButtonProps } from '@/components/ButtonGroup'
import { formatChartSource, formatMoney, pickGroups } from "@/utils"
import './index.less'
const {Option} = Select

interface cashflowFilterProps {
    filterArr: string[];
}

export default (props: cashflowFilterProps) => {
    const { filterArr } = props
    return (
        <div className={'cashflow-filter-wrapper'}>
            <LcCard>
                <Form.Item name="cashflowArea" label="未来现金流区间">
                    <Select
                        placeholder="请选择"
                        allowClear
                        style={{ width: '10%' }}
                    >
                        {filterArr.map(item => {
                            return <Option key={item}>{item}</Option>;
                        })}

                    </Select>
                    <span className='queryBtn' >查询</span>
                    <span className='clearBtn' >重置</span>
                </Form.Item>
            </LcCard>
        </div>
    )
}
