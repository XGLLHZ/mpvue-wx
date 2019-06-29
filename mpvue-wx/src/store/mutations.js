
//单个改变用户信息的值

import * as types from './mutationtypes'

const mutations = {
    [types.SET_OPENID](state,openid) {
        state.openid = openid
    },
    [types.SET_USERID](state,userid) {
        state.userid = userid
    },
    [types.SET_TOKEN](state,token) {
        state.token
    }
}

export default mutations
