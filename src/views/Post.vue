<template>
<div>
  <newpost @addPost="showpost"></newpost>
</div>
</template>

<script>
import newpost from "@/components/Newpost.vue";
export default {
  name: "Post",
  components:{ newpost },
  data() {
    return {
      posts:[],
    };
  },
  methods: {
    showpost(post) {
      this.posts.push({ description: post, checked: false });
      console.log(post);
    },}
}
</script>

<style scoped>

</style>