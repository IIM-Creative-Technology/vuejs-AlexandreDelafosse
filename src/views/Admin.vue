<template>
<div id="app">

   <button id="add-post" ><router-link to="/newpost">Ajouter une page</router-link></button>

<Blogcard></Blogcard>
</div>
</template>

<script>

import Blogcard from "@/components/Blogcard.vue";

export default {

name: "Admin",
  components: { Blogcard},
  methods: {
    addpost() {
      this.$emit("addpost", this.post);
    },
  },
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