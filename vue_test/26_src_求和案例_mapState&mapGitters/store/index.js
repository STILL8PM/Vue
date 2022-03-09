//该文件用于创建Vuex中最核心的store

import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'

//准备actions————用于响应组件中的动作
const actions = {
    // jia(context, value) {
    //     // console.log("actions",context,value);
    //     context.commit('JIA', value)
    // },
    // jian(context, value) {
    //     // console.log("actions",context,value);
    //     context.commit('JIAN', value)
    // },
    jiaOdd(context, value) {
        console.log("actions", context, value);
        if (context.state.sum % 2) {
            context.commit('JIAODD', value)
        }
        // context.dispatch('demo1',value)//可用dispath继续分发
    },
    /* demo1(context, value) {
        console.log("demo1", context, value);
        context.dispatch('demo2',value)
    },
    demo2(context, value) {
        console.log("demo2", context, value);
        if (context.state.sum % 2) {
            context.commit('JIAODD', value)
        }
    }, */
    jiaWait(context, value) {
        // console.log("actions",context,value);
        setTimeout(() => {
            context.commit('JIAWAIT', value)
        }, 500)
    },
}

//准备 mutations————用于操作数据（state）
const mutations = {
    JIA(state, value) {
        // console.log('mutations',state,value);
        state.sum += value
    },
    JIAN(state, value) {
        // console.log('mutations',state,value);
        state.sum -= value
    },
    JIAODD(state, value) {
        // console.log('mutations',state,value);
        state.sum += value
    },
    JIAWAIT(state, value) {
        // console.log('mutations',state,value);
        state.sum += value
    },
}

//准备 state————用于存储数据
const state = {
    sum: 0, //当前的和
    school:'尚硅谷',
    subject:'前端'
}
//准备getters————用于将state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

//使用Vuex插件
Vue.use(Vuex)
//创建并暴露store
export default new Vuex.Store({
    actions: actions,
    mutations: mutations,
    state: state,
    getters:getters,
})