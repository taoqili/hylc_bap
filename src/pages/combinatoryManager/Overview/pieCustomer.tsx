import React, { useEffect, useState } from 'react'
import ReactECharts from 'echarts-for-react'
interface DataProps {
    pieData: any;
    pieColor: any;
}

interface customerProps {
    data: DataProps
}

const optionBasic = {
    tooltip: {
        trigger: 'item',
    },
    legend: {
        orient: 'vertical',//设置图例的方向
        right: 10,
        top: "center",
        itemGap: 10,//设置图例的间距
        itemWidth: 20,
        itemHeight: 8
    },
    color: [],
    series: [
        {
            name: '个人客户总数',
            type: 'pie',
            radius: ['35%', '50%'], //图例大小
            center: ["30%", "50%"], // 饼图位置
            label: {
                show: false,
            },

            labelLine: {
                show: false
            },
            data: [],
        }
    ]
};

export default (props: customerProps) => {
    const { data } = props
    const [option, setOption] = useState({})
    useEffect(() => {
        setOption(optionBasic)
        setTimeout(() => {
            setOption({
                ...optionBasic,
                color: data.pieColor,
                series: {
                    data: data.pieData
                }
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
