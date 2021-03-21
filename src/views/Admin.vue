<template>
<div>
  <br>
  <br>
  <br>
  <button id="add-post" ><router-link to="/newpost">Ajouter une page</router-link></button>

<div class="content" v-for="(posts, index) in this.$store.getters.Post" :key="(posts, index)">

  <div class="Postscontent" @deletePost="noPost">

    <img class="Alde" src="https://risibank.fr/cache/stickers/d1951/195157-full.jpg">

<div class="content">

    <h2>
      {{posts[0]}}
    </h2>

    <p>
      {{posts[3]}}
    </p>

</div>

    <a class="Edit">Editer</a>

    <a v-on:click="deletePost(index)" class="trash">X</a>

  </div>

  </div>

</div>

</template>

<script>
export default {
  name: "Admin",
  data() {
    return {
      posts: [],
    };
  },
  methods: {

    deletePost(index) {
      this.$store.getters.Post.splice(index, 1);
    },

    noPost(no) {
      this.posts.splice(no, 1);
    },
  },
}
</script>

<style scoped>

.Postscontent{
  display: flex;
  margin:25px;
  border: solid 1px red;
  padding: 10px;
}
.Alde{
  width: 200px;
}
.trash{
  width: 2%;
  height:5%;
  background: grey;
  padding: 10px;
  border-radius:9%;
}
.Edit{
  background: grey;
  height: 15px;
  padding: 15px;
  border-radius:9%;
}
a, .content{
  margin-left: 10px;
}
</style>