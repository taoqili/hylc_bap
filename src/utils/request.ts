import axios from "axios"
import mockToken from "@/config/mockToken"

axios.defaults.baseURL = '/api'
axios.defaults.withCredentials = true

axios.interceptors.request.use(
  config => {
    if (!config.headers) {
      config.headers = {}
    }
    config.headers['db-Type'] = 'subzgjs'
    config.headers['Content-Type'] = 'application/json'

    const token = sessionStorage.getItem('token') || mockToken
    if (token) {
      config.headers.token = token
    } else {
      Promise.reject({message: '用户尚未登录', code: -1})
    }
  },
  err => {
    Promise.reject({message: err.message || '请求异常', code: -999})
  }
)

export default {
  get: axios.get,
  post: axios.post
}
