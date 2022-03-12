<template>
  <div class="app">
    <h3>我是App组件</h3>
    <Suspense>
      <template v-slot:default>
        <Child />
      </template>
      <template v-slot:fallback>
        <h3>Loadinng......</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
// import Child from "./components/Child.vue";//静态引入

import { defineAsyncComponent } from "vue";
const Child = defineAsyncComponent(() => import("./components/Child")); //异步&动态引入
export default {
  name: "App",
  components: { Child },
};
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>
