<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    getStudents() {
      //协议名，主机名，端口号

      /* 解决跨域 
        1、cors 后端解决跨域，服务器返回响应携带特殊的响应头  
        2、jsonp： script src前后端配合，只能呢解决get请求 
        3、代理服务器（代理服务器与服务器之间不用ajax，所有没有跨域）
          开启代理服务器：1、nginx  2、vue-cli
      */
      axios.get("http://localhost:8080/atguigu/students").then(
        (response) => {
          console.log("请求成功", response.data);
        },
        (error) => {
          console.log("请求失败", error.message);
        }
      );
    },
    getCars() {
      axios.get("http://localhost:8080/demo/cars").then(
        (response) => {
          console.log("请求成功", response.data);
        },
        (error) => {
          console.log("请求失败", error.message);
        }
      );
    },
  },
};
</script>
