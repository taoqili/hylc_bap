import React from 'react'
import Charts from '@/components/Charts'

const data = [
  ////////////////////////////////////////
  [
    {name: '债券', value: 5123.6},
    {name: '股票', value: 1123},
    {name: '基金', value: 123.8},
    {name: '现金', value: 12313.5},
    {name: '非标', value: 2323.5},
    {name: '逆回购', value: 1233.8},
    {name: '其他', value: 2123.8}
  ]
];
const option = {
  // title: {
  //   text: '阅读书籍分布',
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
        total += data[i].value;
      }
      for (let i = 0; i < data.length; i++) {
        const percent = (data[i].value / total * 100).toFixed(2) + '%'
        if (data[i].name === name) {
          //可以显示名称和值和百分比
          return name + ' ' + data[i].value + '亿 ' + percent
          //只显示名称和百分比
          // return name + ' ' + percent;
        }
      }
    }
  },
  series: data.map(function (item, idx) {
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
    };
  })
};
export default () => {
  return (
    <div className={'wrapper'}>
      <Charts option={option} style={{height: '110px', width: '100%'}}/>
    </div>
  )
}
