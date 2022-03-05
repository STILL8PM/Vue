<template>
  <div >
    <h1>{{msg}}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ myAge }}</h2>
    <button @click="updateAge">尝试修改收到的年龄</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg:'我是一个学生',
      myAge:this.age
    };
  },
  methods: {
    updateAge(){
      this.myAge++
    }
  },
  // props:['name','sex','age'],//简单声明接收

  //接收的同时对数据进行类型限制
  /* props:{//限制类型接收
    name:String,
    sex:String,
    age:Number,
  }, */

  //接收的同时对数据进行类型限制，必要性限制，默认值指定
  props:{
    name:{
      type:String,//类型
      required:true
    },
    sex:{
      type:String,
      required:true//必要的
    },
    age:{
      type:Number,
      default:99//默认值
    },
  }
};
</script>
