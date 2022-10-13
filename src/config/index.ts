export * from './menu'
export * from './routes'

export const isQiankun = (window as any).__POWERED_BY_QIANKUN__
// 路由根路经
export const rootPath = isQiankun ? '/ve/' : '/'



// 接口路经
export const apiBaseUrl = process.env.API_BASE_URL


// 默认异常提醒语
export const defaultErrMessage = '系统异常，请稍后重试！'

