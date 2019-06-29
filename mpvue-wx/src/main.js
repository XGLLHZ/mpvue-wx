import Vue from 'vue'
import App from './App'
import MpvueRouterPatch from 'mpvue-router-patch'
import store from './store'

Vue.prototype.$store = store
Vue.config.productionTip = false
Vue.use(MpvueRouterPatch)
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

/**
 * 在使用mpvue开发小程序时：
 *    created()：在小程序加载时，会一次性执行每个页面的created()生命周期函数
 *             ：可以使用mpvue的mounted()生命周期函数或者小程序原生的onLoad()或者onReady()生命周期函数代替
 *    onLoad(options)：在小程序页面加载时执行，options为页面路径中的参数
 *    onShow()：onLoad()执行完后执行onShow()
 */

 /**
  * Vue生命周期：
  *    beforeCreate ，created ，beforeMount mounted ，beforeUpdate ，updated ，activated ，
  *    deactivated ，beforeDestroy ，destroyed
  * 
  * 小程序生命周期：
  *    onLoad(options)：监听页面加载
  *    onShow：监听页面显示
  *    onReady：监听页面初次渲染完成
  *    onHide：监听页面隐藏
  *    onUnload：监听页面卸载
  *    onPullDownRefresh：监听页面下拉动作
  *    onReachBottom：监听页面上拉触底动作
  *    onShareAppMessage：页面分享
  *    onPageScroll：监听页面滚动
  *    onResize：监听页面宽高改变
  *    onTabItemTap：当前是tab页时，点击tab时触发  
  */

