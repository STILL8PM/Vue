//该文件用于创建Vuex中最核心的store

import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'

//求和功能的相关配置
const countOptions = {
    namespaced:'true',//开启命名空间后，才能...mapState("countAbout",{})
    actions: {
        jiaOdd(context, value) {
            if (context.state.sum % 2) {
                context.commit('JIA', value)
            }
        },
        jiaWait(context, value) {
            setTimeout(() => {
                context.commit('JIA', value)
            }, 500)
        },
    },
    mutations: {
        JIA(state, value) {
            state.sum += value
        },
        JIAN(state, value) {
            state.sum -= value
        },
    },
    state: {
        sum: 0, //当前的和
        school: '尚硅谷',
        subject: '前端',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    },
}

//人员管理功能的相关配置
const personOptions = {
    namespaced:'true',
    actions: {},
    mutations: {
        ADD_PERSON(state, value) {
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [
            { id: '001', name: '张三' },
        ]
    },
    getters: {},
}


//使用Vuex插件
Vue.use(Vuex)
//创建并暴露store
export default new Vuex.Store({
    modules: {
        countAbout:countOptions,
        personAbout:personOptions
    }
})