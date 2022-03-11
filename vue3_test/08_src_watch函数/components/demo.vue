<template>
  <h2>当前求和为:{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr />
  <h2>当前的信息为：{{ msg }}</h2>
  <button @click="msg += '!'">点我+!</button>
  <hr />
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>薪资：{{ person.job.j1.salary }}</h2>
  <button @click="person.name += '~'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">涨薪水</button>
</template>

<script>
import { reactive, ref, watch } from "vue";
export default {
  name: "Demo",
  //vue2的watch
  watch: {
    //简写
    /* sum(newValue,oldValue){
      console.log('sum的值变了',newValue,oldValue);
    }, */
    //完整
    /* sum: {
      immediate:true,//立即监听一下，初始监听
      deep:true,//深度监视
      handler(newValue, oldValue) {
        console.log("sum的值变了", newValue, oldValue);
      },
    }, */
  },
  setup() {
    //数据
    let sum = ref(0);
    let msg = ref("你好啊");
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    //情况一：监视ref所定义的一个响应式数据（监视值，监视回调，{监视其他配置}）
    /* watch(sum, (newValue, oldValue) => {
      console.log("sum的值变了", newValue, oldValue);
    },{immediate:true}); */

    //情况二：监视ref所定义的多个响应式数据
    /* watch([sum,msg], (newValue, oldValue) => {
      console.log("sum或msg的值变了", newValue, oldValue);
    },{immediate:true});
 */
    //情况三：监视reactive所定义的多个响应式数据的全部属性
    // 注意：此处无法正确获取oldValue，强制开启深度监视
    /* watch(person,(newValue, oldValue) => {
        console.log("person的值变了", newValue, oldValue);
      },{immediate: true, deep: false }); */

    // 情况四：监视reactive所定义的一个响应式数据中的某个属性
    /* watch(() => person.age,(newValue, oldValue) => {
        console.log("person的age值变了", newValue, oldValue);
      },{ immediate: true }
    ); */

    // 情况五：监视reactive所定义的一个响应式数据中的某些属性
    /*  watch([() => person.name,()=> person.age],(newValue, oldValue) => {
        console.log("person的name或age值变了", newValue, oldValue);
      },{ immediate: true }
    ); */

    //特殊情况
    /*  watch(()=> person.job,(newValue, oldValue) => {
        console.log("person的job值变了", newValue, oldValue);
      },{deep:true});//此处由于监视的是reactive所定义的对象中的某个属性，deep配置有效
    */
    return {
      sum,
      msg,
      watch,
      person,
    };
  },
};
</script>
