import { isQiankun } from "@/config";

export * from './echarts'
export * from './formatter'
export { default as request } from './request'

export const getAssets = (path: string): string => {
  const assets = '/assets/' + path.replace('/assets', '')
  return (isQiankun ? (window as any).__INJECTED_PUBLIC_PATH_BY_QIANKUN__ : process.env.PUBLIC_URL || '')  + assets.replace('//', '/')
}
