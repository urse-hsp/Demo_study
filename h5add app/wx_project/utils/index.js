const app = getApp();

export class BaseService {
  constructor() { }

  // get 方法
  async get(url) {
    return await this.request('GET', url);
  }

  // post 方法
  async post(url, data) {
    return await this.request('POST', url, data);
  }

  // put 方法
  async put(url, data) {
    return await this.request('PUT', url, data);
  }

  // 请求的根方法 这里的一些配置从 app 里面读的 我们也可以从配置项里面读取
  async request(method, url, data) {
  	// 这里就栽在做请求的拦截
    return new Promise((resolve, reject) => {
      wx.request({
        url: `https://${app.globalData.apiUrl}/${url}`,
        data: data || null,
        method: method || 'GET',
        header: {
        	// 这里可以配合后端做鉴权
          'ticket': app.globalData.ticket || null
        },
        success: (res) => {
          // 这里可以做响应拦截 比如 直接返回 res.data
          resolve(res);
        },
        fail: (err) => {
          // 这里可以配合后端做鉴权 返回403 就执行认证流程
          reject(err);
        }
      })
    })
  }
}