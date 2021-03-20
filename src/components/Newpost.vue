<template>
  <div id="new">

    <h1>Creer une nouvelle page de blog</h1>

    <div id="add">
      <section>
        <article>
          <h3> Titre de la page</h3>

          <h3> Meta Title </h3>

          <h3> Meta Description</h3>

          <h3> Corps du post</h3>
        </article>
        <article id="labels">
          <label for="Title"></label><input v-model="title" placeholder="Titre de la page" id="Title" /><br> <br>
          <label for="Meta Title"></label><input v-model="metat" placeholder="Meta title" id="Meta Title" /> <br> <br>
          <label for="Meta description"></label><input v-model="metad" placeholder="Meta description" id="Meta description" /><br> <br>
          <label for="Corps du post"></label><textarea v-model="content" placeholder="Corps du post" id="Corps du post" />
        </article>
        <article>
          <div id="ajoutimage"></div>
        </article>
      </section>
    </div>

    <button id="add-post" type="text" v-on:click="addPost"> Créer la page</button>

  </div>
</template>

<script>
export default {
  name: "newpost",
  data() {
    return {
      title: "",
      metat:"",
      metad:"",
      content: "",
    };
  },
  methods: {
    addPost() {
      this.$store.dispatch('addPost', [this.title, this.metat, this.metad, this.content])
    },
  },

};
</script>

<style scoped>
#add-post {
  height: 30px;
  width: 150px;

  float: right;
  border: none;
  margin: 5px;
}

#add-post:focus {
  outline: none;
}
#add {
  padding-top: 20px;
  width: 27.5%;
  margin: auto;
}

section{
  display: flex;
  text-align: left;
}

#labels{
  padding-left: 50px;
  padding-top: 20px;
}

#ajoutimage{
  height: 30px;
  width: 30px;
  border-radius: 100%;
  background: green;
  border: none;
  margin: 5px;
}
</style>

