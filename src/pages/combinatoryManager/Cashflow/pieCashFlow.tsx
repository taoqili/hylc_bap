import React, { useEffect, useState } from 'react'
import ReactECharts from 'echarts-for-react'
// interface DataProps {
//     pieData: any;
//     pieColor: any;
// }

// interface customerProps {
//     data: DataProps
// }

// let chartBg = `${require('./images/totalCashInflow.png')}`;

const optionBasic = {
    // 背景图片设置
    // graphic: [
    //     {
    //         type: "image",
    //         // left: "0",
    //         // top: "0",
    //         // z: -10,
    //         bounding: "raw",
    //         rotation: 0, //旋转
    //         origin: [10, 80], //中心点
    //         scale: [0.9, 0.9], //缩放
    //         style: {
    //             // 背景图
    //             // image: 'https://www.boxuegu.com/assets/user/background1.png',
    //             // image: chartBg,
    //             width: 142,
    //             height:142,
    //             opacity: 1,
    //         },
    //     },
    // ],

    series: [
        {
            type: 'gauge',
            axisLine: {
                show:false,
                lineStyle: {
                    // width: 30,
                    color: [
                        [0.3, '#67e0e3'],
                        [0.7, '#37a2da'],
                        [1, '#fd666d']
                    ]
                }
            },
            pointer: {
                show:false,
                itemStyle: {
                    show:false,
                    color: 'auto'
                }
            },
            axisTick: {
                show:false,
                
            },
            splitLine: {
                show:false,
            },
            axisLabel: {
                show:false,
                color: 'auto',
                distance: 40,
                fontSize: 20
            },
            detail: {
                // valueAnimation: true,
                // formatter: '{value} 万',
                color: '#03111A'
            },
            data: [
                {
                    value: 70
                }
            ]
        }
    ],
    

};
// props: customerProps
export default () => {
    // const { data } = props
    const [option, setOption] = useState({})
    useEffect(() => {
        setOption(optionBasic)
        setTimeout(() => {
            setOption({
                ...optionBasic,

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
