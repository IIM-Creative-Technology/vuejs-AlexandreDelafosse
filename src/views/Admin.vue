<template>
<div>
  <button id="add-post" ><router-link to="/newpost">Ajouter une page</router-link></button>

<div class="content" v-for="(posts, index) in this.$store.getters.Post" :key="(posts, index)">

  <div class="Postscontent">

    <h2>
      {{posts[0]}}
    </h2>

    <p>
      {{posts[3]}}
    </p>
  </div>

  </div>

</div>

</template>

<script>
export default {
  name: "Admin",
}
</script>

<style scoped>

</style>