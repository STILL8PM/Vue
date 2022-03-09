<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",

  //组件内守卫
  //通过路由规则，进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    // console.log("beforeRouteEnter");
    if (to.meta.isAuth) {//判断是否需要鉴权
        if (localStorage.getItem('school') === 'atguigu') {
            next()
        } else {
            alert('无权查看')
        }
    } else {
        next()
    }
    next()
  },
  //通过路由规则，离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave");
    next()
  },
};
</script>
