//！！！只适用于本地调试，线上环境必须清空
const isLocal = location.href.indexOf('//localhost') !== -1 || location.href.indexOf('//127.0.0.1') !== -1
export default isLocal ? '' : ''
