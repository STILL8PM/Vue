//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭生产提示
Vue.config.productionTip = false

//创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    /* mounted() {
        setTimeout(()=>{
            this.$destroy()//vm销毁，组件及子组件的实例的自定义事件全部不奏效
        },3000)
    }, */
})