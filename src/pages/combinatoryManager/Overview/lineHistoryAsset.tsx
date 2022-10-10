import React, { Component, useEffect, useState } from 'react'
import ReactECharts from 'echarts-for-react'
import * as echarts from 'echarts'

interface DataProps {
    xAxisData: any;
    series: any;
}

interface historyAssetProps {
    data: DataProps
}

let legendData: any = []

const optionBasic = {
    tooltip: {
        trigger: 'axis',
        triggerOn: 'mousemove',
    },

    legend: {
        x: 'right',
        y: ' top',
        itemWidth: 7,
        itemHeight: 7,
        icon: 'rect',
        padding: [5, 0, 0, 0],
        data: []
    },

    grid: {
        left: 16,
        right: 28,
        top: 50,
        bottom: 0,
        borderWidth: 1,
        containLabel: true  //X轴与区域缩放重叠
    },

    xAxis: {
        type: 'category',
        boundaryGap: false,
        nameLocation: 'start',
        data: ['2021-01-13', '2021-02-13', '2021-03-13', '2021-04-13', '2021-05-13', '2021-06-13', '2021-07-13', '2021-08-13', '2021-09-13', '2021-10-13', '2021-11-13', '2021-12-13'],
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
            },
            formatter: '{value} %'
        },
        min: 0, //y轴的最小值
        // interval: 30, //值之间的间隔
        scale: true,
    },
    series: [
        {
            name: '股票',
            type: 'line',
            barGap: 0,
            symbol: 'none',
            smooth: true,
            data: [],
            itemStyle: {
                color: "#F89C30"
            },
            lineStyle: {
                width: 1,
                type: 'solid',
                color: '#F89C30'
            },
            stack: "总量",
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#fbcd97'
                }, {
                    offset: 1,
                    color: '#fef5ea'
                }])
            },

        }, {
            name: '债券',
            type: 'line',
            barGap: 0,
            symbol: 'none',
            smooth: true,
            data: [],
            itemStyle: {
                color: "#2CD3F7"
            },
            lineStyle: {
                width: 1,
                type: 'solid',
                color: '#2CD3F7'
            },
            stack: "总量",
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#95e9fb'
                }, {
                    offset: 1,
                    color: '#e9fbfe'
                }])
            },
        }, {
            name: '基金',
            type: 'line',
            barGap: 0,
            symbol: 'none',
            smooth: true,
            data: [],
            itemStyle: {
                color: "#2883FF"
            },
            lineStyle: {
                width: 1,
                type: 'solid',
                color: '#2883FF'
            },
            stack: "总量",
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#95ddfb'
                }, {
                    offset: 1,
                    color: '#e9f8fe'
                }])
            },
        }, {
            name: '现金',
            type: 'line',
            barGap: 0,
            symbol: 'none',
            smooth: true,
            data: [],
            itemStyle: {
                color: "#E15AF4"
            },
            lineStyle: {
                width: 1,
                type: 'solid',
                color: '#E15AF4'
            },
            stack: "总量",
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#f0acf9'
                }, {
                    offset: 1,
                    color: '#fceefe'
                }])
            },
        }, {
            name: '其他',
            type: 'line',
            barGap: 0,
            symbol: 'none',
            smooth: true,
            data: [],
            itemStyle: {
                color: "#8159E7"
            },
            lineStyle: {
                width: 1,
                type: 'solid',
                color: '#8159E7'
            },
            stack: "总量",
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#95c2fb'
                }, {
                    offset: 1,
                    color: '#e9f3fe'
                }])
            },
        }]
}

export default (props: historyAssetProps) => {
    const { data } = props
    const [option, setOption] = useState({})
    useEffect(() => {
        setOption(optionBasic)
        handleLegend()
        setTimeout(() => {
            setOption({
                ...optionBasic,
                xAxis: {
                    data: data.xAxisData
                },
                series: [
                    {
                        name: data.series[0].name,
                        data: data.series[0].data
                    },
                    {
                        name: data.series[1].name,
                        data: data.series[1].data
                    },
                    {
                        name: data.series[2].name,
                        data: data.series[2].data
                    },
                    {
                        name: data.series[3].name,
                        data: data.series[3].data
                    }
                    ,
                    {
                        name: data.series[4].name,
                        data: data.series[4].data
                    }
                ],
                legend: {
                    data: legendData
                }
            })
        })
    }, [])

    // 处理图例函数
    let handleLegend = () => {
        data.series.forEach((item: any) => {
            legendData.push(item.name)
        });
        console.log('legendData', legendData)
        return legendData
    }

    return (
        // <div className={'wrapper'} style={{ width: '100%', height: '30%' }}>
        <div className={'wrapper'} >
            <ReactECharts option={option} />
        </div>
    )
}
