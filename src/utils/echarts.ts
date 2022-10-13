import { EChartsOption } from 'echarts'

const mergeOptionS = (oldOpt: EChartsOption, newOpt: EChartsOption): EChartsOption => {
  return {
    ...oldOpt,
    ...newOpt
  }
}

export const getEChartsOptions = (options: EChartsOption): EChartsOption => {
  const baseOptions: EChartsOption = {}
  return mergeOptionS(baseOptions, options)
}

export const compare = (prop: string) => {
  return function (obj1: Record<string, any>, obj2: Record<string, any>) {
    let val1 = obj1[prop];
    let val2 = obj2[prop];
    if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
      val1 = Number(val1);
      val2 = Number(val2);
    }
    if (val1 < val2) {
      return -1;
    } else if (val1 > val2) {
      return 1;
    } else {
      return 0;
    }
  }
}

// 将表格的dataSource转化成chart的source. dimensions: ['Asset_Class', 'Asset_Bal']
// [
//   ['类目1', 41123123],
//   ['类目2', 20123123],
//   ['自定义类3', 52123123],
//   ['类目四', 3713123],
//   ['类目5', 2512312],
// ]
export const formatChartSource = (dataSource: Record<string, any>[] = [], dimensions: string[]): any[] => {
  const source: any[] = []
  dataSource.sort(compare(dimensions[1])).forEach(item => {
    const tmp: string[] = []
    for (let i = 0; i < dimensions.length; i++) {
      const key = dimensions[i]
      tmp.push(i === 0 ? item[key] : Number(item[key]))
    }
    source.push(tmp)
  })
  return source
}
