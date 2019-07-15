module.exports = [
    {
        path: 'pages/home/index',
        name: 'homeindex',
        config: {   //这部分代码为小程序样式配置（包括小程序顶部小标题/）
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: '主界面',
            navigationBarTextStyle: 'black',
            disableScroll: true
        }
    },
    {
        path: 'pages/login/index',
        name: 'loginindex',
        config: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: '登录',
            navigationBarTextStyle: 'black',
            disableScroll: true,
            usingComponents: {   //iView组件库使用实例
                'i-toast': '/static/iView/toast/index'
            }
        }
    },
    //注：在app.json文件中，tabBar的三个路由必须放在最前面
    {
        path: 'pages/center/index',
        name: 'centerindex'
    },
    {
        path: 'pages/buy-car/index',
        name: 'buycarindex'
    },
    {
        path: 'pages/shops/index',
        name: 'shopsindex'
    }
]

