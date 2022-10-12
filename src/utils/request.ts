import axios from "axios"

axios.defaults.baseURL = '/api'
axios.defaults.withCredentials = true

axios.interceptors.request.use(
  config => {
    if (!config.headers) {
      config.headers = {}
    }
    config.headers['db-Type'] = 'subzgjs'
    config.headers['Content-Type'] = 'application/json'

    const token = sessionStorage.getItem('token')
    if (token) {
      config.headers.token = token
    } else {
      Promise.reject({message: 'token失效', code: -1})
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
