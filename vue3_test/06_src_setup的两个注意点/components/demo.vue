<template>
  <h1>一个人的信息</h1>
  <h2 v-show="person.name">姓名:{{ person.name }}</h2>
  <h2>年龄:{{ person.age }}</h2>
  <button @click="test">测试触发一下Demo组件的hello事件</button>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Demo",
  /* beforeCreate() {
    console.log("----beforeCreate----");
  }, */
  props: ["msg", "school"],
  emits: ["hello"],
  setup(props, context) {
    //数据
    // console.log("----setup----",this);//执行比beforeCreate早，this是undefined
    // console.log(props);
    // console.log(context);
    // console.log(context.attrs);//相当于Vue2中的$attrs
    // console.log(context.emit);//触发自定义事件
    // console.log(context.slots);//插槽
    let person = reactive({
      name: "张三",
      age: 18,
    });

    //方法
    function test() {
      context.emit("hello", 666);
    }

    return {
      person,
      test,
    };
  },
};
</script>
