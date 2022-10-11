// 万元转换成亿元且小数保留两位小数并显示千分位,数据不存在显示0.00
export const formatMoney = (value: string|number = 0, noDecimals?: boolean) => {
  const money = Number(value) / 10000
  if (!money) return noDecimals ? '0' : '0.00'
  return  money.toFixed(noDecimals ? 0 : 2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
}

export const pickGroups = (data: Record<string, any>[], groupNames: string[], dataIndex: string): any => {
  const groups: Record<string, any> = {}
  groupNames.forEach(name => {
    groups[name] = []
  })
  data.forEach(item => {
    const key = item[dataIndex]
    groups[key].push(item)
  })
  return groups
}
