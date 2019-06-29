
//统一改变用户信息的值

import * as types from './mutationtypes'

export const cacheData = ({ commit },{ openid, userid, token }) => {
    commit(types.SET_OPENID,openid)
    commit(types.SET_USERID,userid)
    commit(types.SET_TOKEN,token)
}


