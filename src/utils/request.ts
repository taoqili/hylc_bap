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
    return config
  },
  err => {
    Promise.reject(err)
  }
)

export default {
  get: (url: string, params: Record<string, any>) => {
    return new Promise((resolve, reject) => {
      axios.get(url, params)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  post: (url: string, data: Record<string, any>) => {
    return new Promise((resolve, reject) => {
      axios.post(url, data)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
