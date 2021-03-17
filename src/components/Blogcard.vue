<template>
<div id="blogcard">

  <newblog @addpost="showpost"></newblog>

  <blog
      @deletepost="nopost"
      @rayer="Coche"
      :posts="posts"
      id="blog"
  >
  </blog>
</div>
</template>



<script>

import newblog from "@/components/Newblog.vue";
import blog from "@/components/Blog.vue";

export default {


  name: "Blogcard",
  components: { newblog, blog },
  data() {
    return {
      titre: "VueJs Tutorial ToDo List",
      posts: [],
    };
  },

  computed: {
  },

  methods: {
    showpost(post) {
      this.posts.push({ description: post, checked: false });
      console.log(post);
    },
    nopost(no) {
      this.posts.splice(no, 1);
    },
    Coche(done) {
      if (this.posts[done].checked === false) {
        this.posts[done].checked = true;
      } else {
        this.posts[done].checked = false;
      }
    },
  },
};


</script>

<style>

</style>