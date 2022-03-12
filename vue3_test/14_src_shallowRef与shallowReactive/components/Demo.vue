<template>
  <h4>当前x的值为:{{ x.y }}</h4>
  <button @click="x.y++">点我x++</button>
  <hr />
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}</h2>

  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪水</button>
</template>

<script>
import { reactive, toRefs, shallowRef, shallowReactive, ref } from "vue";
export default {
  name: "Demo",
  setup() {
    //数据

    let person = shallowReactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    let x = shallowRef({
      y: 0,
    });
    return {
      x,
      ...toRefs(person),
    };
  },
};
</script>
