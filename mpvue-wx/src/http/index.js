
//网络请求拦截器配置

import qs from 'qs'

const Fly = require('flyio/dist/npm/wx')
const fly = new Fly()

//后台请求基地址
fly.config.baseURL = 'https://www.xgllhz.top'

//请求拦截器
fly.interceptors.request.use(config => {
    //给所有请求添加请求头
    let body = qs.parse(config.body)
    if (config.url !== '后台登录接口' && (body.token === '' || body.token === undefined)) {   
        wx.redirectTo({
            url: '/pages/login/index'
        })
        return Promise.reject('缺少token')
    }
    return config
})

//请求响应器
fly.interceptors.response.use(res => {
    if(res.data.recode === 1001) {
        wx.redirectTo({
            url: '/pages/login/index'
        })
    }
    return res
},err => {
    return err
})

export default fly


