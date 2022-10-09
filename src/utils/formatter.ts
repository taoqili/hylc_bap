// 万元转换成亿元且小数保留两位小数并显示千分位,数据不存在显示0.00
export const formatMoney = (value: string|number) => {
  const money = Number(value) / 10000
  if (!money) return '0.00'
  return  money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
}
