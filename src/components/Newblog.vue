<template>
  <div id="new">
    <div id="add">
      <label for="message"></label><input v-model="post" placeholder="Add a post" id="message" />

      <button id="add-post" v-on:click="addpost">+</button>
    </div>
  </div>
</template>

<style>
#add-post {
  height: 30px;
  width: 30px;
  border-radius: 100%;
  background: green;
  border: none;
  margin: 5px;
}

#add-post:focus {
  outline: none;
}
#message {
  border-bottom-color: lightblue;
  background-color: white;
  border-left: none;
  border-top: none;
  border-right: none;
}

#add {
  padding-top: 20px;
  width: 27.5%;
  margin: auto;
}
</style>

<script>
export default {
  name: "newblog",
  data() {
    return {
      post: "",
    };
  },

  methods: {
    addpost() {
      this.$emit("addpost", this.post);
      document.getElementById("message").value = "";
    },
  },
};
</script>
