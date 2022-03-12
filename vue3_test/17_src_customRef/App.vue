<template>
  <input type="text" v-model="keyWord" />
  <h3>{{ keyWord }}</h3>
</template>

<script>
import { ref, customRef } from "vue";

export default {
  name: "App",

  setup() {
    //自定义ref
    function myref(value,delay) {
      let Timer
      return customRef((track, trigger) => {
        return {
          get() {
            track(); //通知Vue去追踪value的变化（提前通知get）
            return value;
          },
          set(newValue) {
            value = newValue;
            clearTimeout(Timer)
            Timer= setTimeout(() => {
              trigger(); //通知Vue去重新解析模板
            },delay);
          },
        };
      });
    }
    // let keyWord = ref("hello");//使用Vue提供的ref
    let keyWord = myref("hello",500); //使用程序员提供的ref
    return {
      keyWord,
    };
  },
};
</script>
