<template>
  <div id="new">
    <div id="add">
      <label for="Title"></label><input v-model="post" placeholder="Titre de la page" id="Title" /><br> <br>
      <label for="Meta Title"></label><input v-model="post" placeholder="Meta title" id="Meta Title" /> <br> <br>
      <label for="Meta description"></label><input v-model="post" placeholder="Meta description" id="Meta description" />



    </div>


  </div>
</template>

<script>
export default {
  name: "newblog",
  data() {
    return {
      post: "",
    };
  },


};
</script>

<style>
#add-post {
  height: 30px;
  width: 150px;

  background: green;
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
</style>

