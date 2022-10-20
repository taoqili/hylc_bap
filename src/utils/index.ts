import { isQiankun } from "@/config";

export * from './echarts'
export * from './formatter'
export { default as request } from './request'

export const getAssets = (path: string): string => {
  const assets = '/assets/' + path.replace('/assets', '')
  return (isQiankun ? (window as any).__INJECTED_PUBLIC_PATH_BY_QIANKUN__ : process.env.PUBLIC_URL || '')  + assets.replace('//', '/')
}

export const getLastDate = () => {
  const now = Date.now()
  const lastDay = new Date(now - 24 * 60 * 60 * 1000)
  let year = lastDay.getFullYear()
  let month = lastDay.getMonth() + 1 < 10 ? '0' + (lastDay.getMonth() + 1) : lastDay.getMonth() + 1
  let day = lastDay.getDate() < 10 ? '0' + lastDay.getDate() : lastDay.getDate()
  return year + '-' + month + '-' + day
}

export const params2Str = (params: Record<string, any> = {}) => {
  const str = Object.keys(params).reduce((pre: string[], cur) => {
    pre.push(cur + '=' + params[cur])
    return pre
  }, [])
  return str.join('&')
}
