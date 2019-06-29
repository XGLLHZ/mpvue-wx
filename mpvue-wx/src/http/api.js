
//网络请求接口配置

import fly from './index'
import qs from 'qs'

export const login = params => {
    return fly.post('/api/mp/login',qs.stringify(params))
}

