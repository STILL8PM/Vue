<template>
  <div>
    <Student name='李四' sex='男' :age='19' />
    <hr />
    <!-- <Student name='王五' sex='男' age=20 />
    <hr />
    <Student name='小红' sex='女' age=17 /> -->
  </div>
</template>

<script>
//引入School组件
import Student from "./components/Student.vue";
export default {
  name: "App",
  components: { Student },
};
</script>
