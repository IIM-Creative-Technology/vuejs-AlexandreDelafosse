<template>
  <div>
    <br>
    <br>
    <br>

    <div class="content" v-for="(posts, index) in this.$store.getters.Post" :key="(posts, index)">

      <div class="Postscontent">

        <img class="Alde" src="https://risibank.fr/cache/stickers/d1951/195157-full.jpg">

        <div>
          <h2>
            {{posts[0]}}
          </h2>

          <p>
            {{posts[3]}}
          </p>
        </div>

        <div>

          <router-link :to="'/' + index">Afficher l'article</router-link>

        </div>

      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Blog"
  }
</script>

<style scoped>
  .Alde {
    width: 200px;
  }

  .Postscontent {
    display: flex;
    margin: 25px;
    border: solid 1px red;
    padding: 10px;
    justify-content: space-around;
  }
</style>