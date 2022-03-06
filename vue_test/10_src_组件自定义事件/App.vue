<template>
  <div class="app">
    <h1>{{ msg }} {{ studentName }}</h1>
    <!-- 通知父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName" />

    <!-- 通知父组件给子组件绑定一个自定义事件实现：子给父传递数据(第一种写法，使用@或v-on) -->
    <!-- <Student v-on:atguigu="getStudentName" /> -->
    <!-- <Student @atguigu="getStudentName" @demo='m1' /> -->

    <!-- <Student @atguigu.once="getStudentName" /> -->

    <!-- 通知父组件给子组件绑定一个自定义事件实现：子给父传递数据(第二种写法，使用ref) -->
    <Student ref="student" @click.native="show" /><!-- 组件使用内置事件需要加native标注 -->
  </div>
</template>

<script>
//引入School组件
import School from "./components/School.vue";
import Student from "./components/Student.vue";
export default {
  name: "App",
  components: { School, Student },
  data() {
    return {
      msg: "你好啊！",
      studentName: "",
    };
  },
  methods: {
    getSchoolName(name) {
      console.log("@getSchoolName", name);
    },
    /* getStudentName(name,...params) {
      console.log("@getStudentName", name,params);
      this.studentName=name
    }, */
    m1() {
      console.log("@demo事件");
    },
    show(){
      alert('123')
    }
  },
  mounted() {
    this.$refs.student.$on("atguigu", (name, ...params) => {
      console.log("@getStudentName", name, params);
      this.studentName = name;
    }); //绑定自定义事件
    // this.$refs.student.$once("atguigu", this.getStudentName);//绑定自定义事件，（一次性）
    //灵活添加延时
    /* setTimeout(()=>{
      this.$refs.student.$on('atguigu',this.getStudentName)
    },3000) */
  },
};
</script>
<style>
.app {
  background-color: gray;
  padding: 5px;
}
</style>
