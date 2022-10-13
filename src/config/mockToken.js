//！！！只适用于本地调试，线上环境必须清空。
// token获取方式：通过postman或者经营分析平台请求login/loginCheck接口
const isLocal = location.href.indexOf('//localhost') !== -1 || location.href.indexOf('//127.0.0.1') !== -1
const mockToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0YW9xaWxpIiwiaXNzIjoiN2MzNzc4ODAwYmMwY2RjOWQxNWI3MzUxZjlhNmYzYzIiLCJpYXQiOjE2NjU2MzExMzcsImV4cCI6MTY2NTYzMzIzN30.0Rllu2b1M5lEXuuPtIR8nIAjIFeQ6Z_ZoSQuR6lDcUAL3vqJVhXW9QjeCEd3QqvEtquKOhcFoOGiy82LTSCD4g'
export default isLocal ? mockToken : ''