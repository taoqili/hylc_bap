import React, { useCallback, useState } from "react"
import LcCard from '@/components/LcCard'
import Charts from '@/components/Charts'
import LcTable from '@/components/LcTable'
import { Row, Col } from 'antd'
import ButtonGroup, { ButtonProps } from '@/components/ButtonGroup'
import { formatChartSource, formatMoney, pickGroups, getAssets } from "@/utils"
import './index.less'


interface BondHoldingProps {
    title: String;
    unit: String;
    cardData: any;
    bgimg: any;
}

export default (props: BondHoldingProps) => {
    const {
        title,
        unit,
        bgimg,
        cardData,
    } = props

    return (
        <div>
            <div className='cashflow-card-Wrapper'>
                <div className="cardTitle">
                    <img width={180} src={bgimg} alt="现金总流入"></img>
                    <h3>{title}</h3>
                </div>
                <div className='cardNum'>
                    <span>{cardData}</span>
                    <span>{unit}</span>
                </div>
            </div>
        </div>
    )
}
