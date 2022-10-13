import React, { useEffect, useState } from 'react'
import ReactECharts from 'echarts-for-react'
import * as echarts from 'echarts'

interface DataProps {
    xAxisData: any;
    yAxisData: any;
}

interface barInvestProps {
    data: DataProps
}

const optionBasic = {
    tooltip: {
        trigger: 'axis',
        triggerOn: 'mousemove',
    },

    grid: {
        left: 16,
        right: 28,
        top: 0,
        bottom: 0,
        containLabel: true
    },

    yAxis: {
        type: 'category',
        boundaryGap: true,
        nameLocation: 'start',
        data: [],
        axisLine: {
            show: false,

        },
        axisTick: {
            show: false,  //隐藏刻度线
            alignWithLabel: false,
        },
        axisLabel: {
            margin: 14,
            height: 70,
            interval: 0,
            textStyle: {
                fontSize: 10,
                color: "#666666"
            }
        }
    },
    xAxis: {
        type: 'value',
        axisLine: {
            show: false,   //隐藏轴线
        },
        axisTick: {
            show: false,  //隐藏刻度线
        },
        splitLine: {
            lineStyle: {
                type: 'dashed'//虚线
            }
        },

        axisLabel: {
            textStyle: {
                fontSize: 10,
                color: "#666666"
            }
        },
        min: 0, //y轴的最小值
        // interval: 100, //值之间的间隔
        scale: true,
    },
    series: [{
        name: '股票',
        type: 'bar',
        barGap: 0,
        data: [],
        barWidth: 16,
        itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: '#4FC7FF' },
                { offset: 1, color: '#2199FF' }
            ])
        }
    }]

}

export default (props: barInvestProps) => {
    const { data } = props
    const [option, setOption] = useState({})
    useEffect(() => {
        setOption(optionBasic)
        setTimeout(() => {
            setOption({
                ...optionBasic,
                yAxis: {
                    data: data.yAxisData
                },
                series: [
                    {
                        data: data.xAxisData
                    }
                ]
            })
        })

    }, [])

    return (
        // <div className={'wrapper'} style={{ width: '100%', height: '30%' }}>
        <div className={'wrapper'} >
            <ReactECharts option={option} />
        </div>
    )
}
