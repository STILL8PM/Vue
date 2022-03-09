/* 该文件专门创建整个应用的路由器 */
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

//创建并暴露一个路由器
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: { title: '关于', isAuth: true }
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: { title: '主页' },
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: { title: '新闻', isAuth: true },
                    /* 独享路由守卫 */
                    /* beforeEnter: (to, from, next) => {
                        console.log('独享路由守卫', to, from);
                        if (to.meta.isAuth) {//判断是否需要鉴权
                            if (localStorage.getItem('school') === 'atguigu') {
                                // document.title = to.meta.title || '硅谷系统'
                                next()
                            } else {
                                alert('无权查看')
                            }
                        } else {
                            // document.title = to.meta.title || '硅谷系统'
                            next()
                        }
                    } */

                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: { title: '消息', isAuth: true },
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail/:id/:title',//占位
                            component: Detail,
                            meta: { title: '详情', isAuth: true },


                            //props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件
                            // props:{a:1,b:'hello'}

                            //props的第一种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props形式传给Detail组件
                            props: true

                            //props的第一种写法，就会把该路由组件收到的所有query参数，以props形式传给Detail组件
                            // props($route) {
                            //     return { id: $route.query.id, title: $route.query.title }
                            // }
                            // props({ query: { id, title } }) {
                            //     return { id, title }
                            // }
                        }
                    ]
                },
            ]

        },
    ]
})

//全局前置路由守卫————初始化调用，每次路由切换之前被调用
/* router.beforeEach((to, from, next) => {
    console.log('前置路由守卫', to, from);
    //if (to.name === 'xinwen' || to.name === 'xiaoxi'){}      
    // if (to.path === '/home/news' || to.path === '/home/message'){}
    if (to.meta.isAuth) {//判断是否需要鉴权
        if (localStorage.getItem('school') === 'atguigu') {
            // document.title = to.meta.title || '硅谷系统'
            next()
        } else {
            alert('无权查看')
        }
    } else {
        // document.title = to.meta.title || '硅谷系统'
        next()
    }
}) */

//全局后置路由守卫————初始化调用，每次路由切换之后被调用
/* router.afterEach((to, from) => {
    console.log('后置路由守卫', to, from);
    if (to.meta.title) {
        document.title = to.meta.title//最佳
    } else {
        document.title = "硅谷系统"
    }
}) */
export default router
