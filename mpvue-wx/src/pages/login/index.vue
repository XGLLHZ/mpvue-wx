<template>
    <div class="login">
        <div class="shouquan">
            <button @click="login" >授权登录</button>
        </div>
        <i-toast id="toast"></i-toast>
    </div>
</template>

<script>
import { $Toast } from '../../../dist/wx/static/iView/base'
export default {
    name: 'loginindex',
    data() {
        return {
        }
    },
    onUnload() {
            Object.assign(this.$data, this.$options.data())
        },

    methods: {
        login() {
            $Toast({
                content: '授权成功！',
                type: 'success'
            })
            this.$router.push({
                path: '/pages/home/index',
                query: {
                    userId: this.$store.state.userId
                }
            })
        }
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




