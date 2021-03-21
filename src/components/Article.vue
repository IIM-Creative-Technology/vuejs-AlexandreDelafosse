<template>

  <div class="Postscontent">
    

    <img class="Alde" src="https://risibank.fr/cache/stickers/d1951/195157-full.jpg">

    <div>
      <h1>
        {{posts[0]}}
      </h1>

      <h2>
        {{posts[1]}}
      </h2>

      <h3>
        {{posts[2]}}
      </h3>

      <p>
        {{posts[3]}}
      </p>
    </div>

  </div>

</template>

<style scoped>

</style>

<script>
  export default {
    name: "Article"
  }
</script>