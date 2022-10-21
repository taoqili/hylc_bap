import React from 'react'
import Charts from '@/components/Charts'

interface AssetRatioProps {
  data: any[]
}

export default (props: AssetRatioProps) => {
  const { data } = props;
  const option = {
    // title: {
    //   text: '资产分布',
    // },
    legend: {
      top: 'middle',
      left: '130px',
      orient: 'vertical',
      itemWidth: 8,
      formatter(name: string) {
        const { data }  = option.series[0]
        let total = 0;
        for (let i = 0; i < data.length; i++) {
          total += (Number(data[i].value || 0));
        }
        for (let i = 0; i < data.length; i++) {
          const percent = (Number(data[i].value|| 0) / total * 100).toFixed(2) + '%'
          if (data[i].name === name) {
            // 可以显示名称和值和百分比
            return name + '　' + Number(data[i].value||0) + '亿　' + percent
          }
        }
      }
    },
    color:['#51CAFD', '#71D1E6', '#37AFFC','#4493FC','#4c78fb','#4352FB','#9D4CFD'],
    series: data.map( (item) => {
      return {
        type: 'pie',
        radius: [30, 50],
        center: ['20%', '50%'],
        width: 300,
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1
        },
        label: {
          show: false,
        },
        data: item
      }
    })
  }
  return (
    <Charts option={option} style={{height: '110px', width: '100%'}}/>
  )
}
