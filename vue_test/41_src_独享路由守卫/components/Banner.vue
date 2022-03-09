<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
      <button @click="back">后退</button>
      <button @click="forward">前进</button>
      <button @click="go">GO</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    back() {
      // console.log(this.$router);
      this.$router.back();
    },
    forward() {
      this.$router.forward();
    },
    go() {
      this.$router.go(2);
    },
  },
};
</script>
