<template>
  <div class="child">
    <h3>我是Child组件(子),{{name}}--{{price}}</h3>
    <Son></Son>
  </div>
</template>

<script>
import { inject, toRefs } from 'vue'
import Son from "./Son.vue";
export default {
  name: "Child",
  components: { Son },
	/* setup(){
		let car = inject('car')
		return{...toRefs(car)}
	} */
};
</script>

<style>
.child {
  background-color: skyblue;
  padding: 10px;
}
</style>
