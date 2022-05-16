<template>
    <div>
        <router-link to="/"> HOME </router-link>
        <router-link to="/about"> ABOUT </router-link>
        <router-view></router-view>
    </div>
</template>

<script>
import Home from "./views/Home.vue";
// import About from './About.vue'
import NotFound from "./views/NotFound.vue";

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
    // window.addEventListener("hashchange", () => {
    //   this.currentPath = window.location.hash;
    // });
  },
};
</script>

