export * from './echarts'
export * from './formatter'
export { default as request } from './request'

export const getAssets = (path: string): string => {
  const assets = '/assets/' + path.replace('/assets', '')
  return process.env.PUBLIC_URL || ''  + assets.replace('//', '/')
}
