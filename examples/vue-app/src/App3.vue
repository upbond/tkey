<template>
  <div>
    <a href="#/">Home</a> | <a href="#/about">About</a> |
    <a href="#/non-existent-path">Broken Link</a>
    <component :is="currentView" />
  </div>
</template>

<script>
import Home from "./Home.vue";
// import About from './About.vue'
import NotFound from "./NotFound.vue";

const routes = {
  "/": Home,
  //   '/about': About
};

export default {
  name: "App",
  data() {
    return {
      currentPath: window.location.hash,
    };
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || "/"] || NotFound;
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
  },
};
</script>

