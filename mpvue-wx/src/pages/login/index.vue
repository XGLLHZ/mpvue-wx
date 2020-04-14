<template>
    <div class="login">
        <div class="shouquan">
            <button @click="grantUser" >授权登录</button>
        </div>
        <i-toast id="toast"></i-toast>
    </div>
</template>

<script>
import { login } from '../../http/api'
import { $Toast } from '../../../dist/wx/static/iView/base'
import { mapActions } from 'vuex'
export default {
    name: 'loginindex',
    data() {
        return {
            code: '',
            once: true
        }
    },
    
    //小程序页面加载时执行
    onLoad() {
        this.code = ''
        const _this = this
        wx.login({
            success(res) {
                if (res.code) {
                    _this.code = res.code
                    console.log(_this.code)
                } else {
                    _this.code = ''
                    console.log('登录失败！' + res.code)
                }
            }
        })
    },

    //监听页面加载
    onUnload() {
        Object.assign(this.$data, this.$options.data())
    },
    
    methods: {
        /**
         * 微信登录小程序流程：
         *      首先用户从微信进入到授权页面时执行onLoad()方法，获取小程序code,
         *      点击授权按钮时好像能通过e.mp.detail获得微信用户信息，
         *      然后这些信息和code一起作为参数调用后台登录接口，获取微信用户唯一标识openid，数据库里的用户id和用户登录后的token，
         *      最后将这些信息返回给前台，前台将其存入store中和小程序的sessionStorage中，然后进入小程序主界面
         */
        grantUser(e) {
            if (this.once) {
                this.once = false
                const detail = e.mp.detail
                const _this = this
                const options = {
                    code: _this.code,
                    iv: detail.iv,
                    rawData: detail.rawData,
                    signature: detail.signature,
                    encryptedData: detail.encryptedData
                }
                console.log(options)
                login(options).then(res => {
                    console.log(res.data)
                    const { body } = res.data
                    wx.setStorage({
                        key: 'openid',
                        data: body.openid
                    })
                    wx.setStorage({
                        key: 'userid',
                        data: body.userid
                    })
                    wx.setStorage({
                        key: 'token',
                        data: body.token
                    })
                    _this.cacheData({
                        openid: body.openid,
                        userid: body.userid,
                        token: body.token
                    })
                    _this.$router.push({
                        path: '/pages/home/index',
                        reLaunch: true
                    })
                }).catch(err => {
                    console.log(err)
                    this.once = true
                    $Toast({
                        content: '登录失败！',
                        type: 'info'
                    })
                    //此时的登录失败跳转到主页面只是为了测试
                    this.$router.push({
                        path: '/pages/home/index',
                        reLaunch: true
                    })
                })
            }
        },
        ...mapActions([
            'cacheData'
        ])
    }

}
</script>

<style lang="scss" scoped>   //scss语法，scoped：只作用于当前页面
.login {
    width: 100%;
    height: 100%;

    .shouquan {
        padding-top: 60%;
        text-align: center
    }
}
</style>




