<template>
  <div id="app">
    <div class="flex justify-between">
      <div
        class="text-left p-2 flex items-center"
      >
        <img src="@/assets/logo.png" class="h-6 pr-2" />
        <router-link to="/"><h1>Task Performance</h1> </router-link>
      </div>
      <div>
        <Timer
          v-if="this.$route.path === '/task'"
          v-bind:time="600"
          to="survey"
          from="task"
          class="p-3"
        />
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import Timer from "@/components/Timer.vue";

export default {
  components: {
    Timer,
  },
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  min-height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  @apply text-blue-500;
}
</style>
