<template>
  <div>
    <Student />
    <hr />
    <School />
  </div>
</template>

<script>
//引入School组件
import School from "./components/School.vue";
import Student from "./components/Student.vue";
export default {
  name: "App",
  components: { School, Student },
};
</script>
