<template>
<div id="app">
  <h1>L'admin</h1>
<Blogcard></Blogcard>
</div>
</template>

<script>

import Blogcard from "@/components/Blogcard.vue";

export default {

name: "Admin",
  components: { Blogcard},
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

body {
  background-color: rgb(216, 216, 83);
  min-height: 100vh;
}

#app {
  padding-top: 100px;
}
</style>