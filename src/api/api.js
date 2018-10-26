import axios from 'axios'

const api = axios.create()
api.defaults.baseURL = 'http://api.com'
api.defaults.timeout = 5000
api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
api.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'

// POST传参序列化
axios.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

// 返回状态判断
axios.interceptors.response.use((res) => {
  if (!res.data.success) {
    return Promise.reject(res)
  }
  return res
}, (error) => {
  // 404等问题可以在这里处理
  return Promise.reject(error)
})

export default api
