import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import Config from '@/config'
import router from '@/router'
import qs from 'qs'
import { debounce } from '@/utils'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: Config.timeout // request timeout
})
// request拦截器
service.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    config.headers['Content-Type'] = 'application/json'
    if (config.formdata === true) {
      config.data = qs.stringify(config.data, { arrayFormat: 'brackets' })
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
    if (config.upload === true) {
      config.headers['Content-Type'] = 'multipart/form-data'
    }
    // eslint-disable-next-line no-undef
    _czc.push(['_trackPageview', config.url, document.referrer])

    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)
// 节流处理
const sessionTimeout = debounce(
  () => {
    MessageBox.confirm(
      '登录状态已过期，您可以继续留在该页面，或者重新登录',
      '系统提示',
      {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }
    ).then(() => {
      store.dispatch('user/logout').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    })
  },
  2000,
  true
)

const dialogTips = debounce(
  (code, msg) => {
    MessageBox.confirm(msg, '系统提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).finally(() => {
      if (store.getters.token) {
        store.dispatch('user/logout').then(() => {
          location.reload()
        })
      }
    })
  },
  2000,
  true
)

// response 拦截器
service.interceptors.response.use(
  response => {
    // TODO: mock过期
    // return Promise.reject(response.data)
    // response.data = {
    //   success: false,
    //   msg: '套餐已过期请联系客服续费！（1233.。）',
    //   code: 70012
    // }

    const success = response.data.success

    const code = response.data.code
    if (code === 70012 || code === 70014) {
      // 套餐过期
      dialogTips(code, response.data.msg || response.data.message)
      return Promise.reject()
    }
    if (code === '5000') {
      sessionTimeout()
      return Promise.reject()
    }
    if (success === false) {
      Message({
        message: response.data.msg,
        type: 'error'
      })
      return Promise.reject(response.data)
    }
    return response.data
  },
  error => {
    let code = 0
    try {
      code = error.response.data.status
    } catch (e) {
      if (error.toString().indexOf('Error: timeout') !== -1) {
        Message({
          message: '网络请求超时',
          type: 'error',
          duration: 2500
        })
        return Promise.reject(error)
      }
      if (error.toString().indexOf('Error: Network Error') !== -1) {
        Message({
          message: '网络请求错误',
          type: 'error',
          duration: 2500
        })
        return Promise.reject(error)
      }
    }
    if (code === 401) {
      sessionTimeout()
    } else if (code === 403) {
      router.push({ path: '/401' })
    } else {
      const errorMsg = error.response.data.message

      if (errorMsg !== undefined) {
        Message({
          message: errorMsg,
          type: 'error',
          duration: 2500
        })
      }
    }
    return Promise.reject(error) // error.response.data
  }
)
window.axios = service
export default service
