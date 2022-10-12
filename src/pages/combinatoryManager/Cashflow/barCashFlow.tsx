import React, { useEffect, useState } from 'react'
import ReactECharts from 'echarts-for-react'
import * as echarts from 'echarts'

interface DataProps {
    xAxisData: any;
    yAxisdata: any;
}

interface LeverageTimingProps {
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
        top: 5,
        bottom: 40,
        borderWidth: 1,
        containLabel: true  //X轴与区域缩放重叠
    },

    dataZoom: [{
        type: 'inside',
        start: 0,
        end: 50,
        maxSpan: 50,
        zoomLock: true,

    }, {
        height: '12',//修改区域缩放高度
        width: '70%',
        left: "center",
        bottom: '14',
        // showDetail: false,
        borderColor: '#ddd',
        fillerColor: 'rgba(230,230,230,0.3)',
        backgroundColor: 'rgba(240,240,240,0.3)',//两边未选中的滑动条区域的颜色
        handleSize: 23,//滑动条的 左右2个滑动条的大小
        handleIcon: 'M0,0 v35h6 v-35h-6 a',
    }],

    xAxis: {
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
            height: 20,
            interval: 0,
            textStyle: {
                fontSize: 10,
                color: "#666666"
            }
        }
    },

    yAxis: {
        type: 'value',
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,  //隐藏刻度线
        },
        axisLabel: {
            margin: 14,
            textStyle: {
                fontSize: 10,
                color: "#666666"
            }
        },
        // min: 0, //y轴的最小值
        // interval: 30, //值之间的间隔
        scale: true,
    },
    series: [{
        name: '销售总金额',
        type: 'bar',
        barGap: 0,
        data: [50, 30, 70, 40, 125, 50, 30, 70, 40, 125, 70, 40],
        barWidth: 12,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#2199FF' },
            { offset: 1, color: '#4FC7FF' }
          ])
        },
      }],
}

export default (props: LeverageTimingProps) => {
    const { data } = props
    const [option, setOption] = useState({})
    useEffect(() => {
        setOption(optionBasic)
        setTimeout(() => {
            setOption({
                ...optionBasic,
                xAxis: {
                    data: data.xAxisData,
                },
                series: [
                    {
                        data: data.yAxisdata
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