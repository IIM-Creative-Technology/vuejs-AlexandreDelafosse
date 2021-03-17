<template>
  <ul>
    <li
        v-bind:class="{ Rayure: post.checked }"
        v-for="(post, index) in posts"
        :key="(post, index)"
    >
      <input v-on:click="rayer(index)" type="checkbox" /> {{ post.description }}
      <button v-on:click="deletepost(index)" class="trash">🗑</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "blog",
  props: ["posts"],

  methods: {
    deletepost(index) {
      this.$emit("deletepost", index);
    },
    rayer(index) {
      this.$emit("rayer", index);
    },
  },
};
</script>

<style scoped>
.trash {
  border-radius: 100%;
  height: 50px;
  width: 50px;
}

.trash:focus {
  outline: none;
}

.Rayure {
  text-decoration: line-through;
}

li {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 2%;
}
</style>