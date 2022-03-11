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
  setup() {
    //数据
    let sum = ref(0);
    let msg = ref("你好啊");
    let person = ref({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });
    //基本类型
    watch(sum,(newValue,oldValue)=> {
      console.log('sum值变化了',newValue,oldValue);
    })

    //监视的是ref生成的person里面value——Proxy对象
    watch(person.value,(newValue,oldValue)=> {
      console.log('person值变化了',newValue,oldValue);
    })

    //监视的是ref生成的person,开启深度监视可监视里面value——Proxy对象
    watch(person,(newValue,oldValue)=> {
      console.log('person值变化了',newValue,oldValue);
    },{deep:true})


    return {
      sum,
      msg,
      watch,
      person,
    };
  },
};
</script>
