<template>
  <div id="app">
    <div class="flex justify-between">
      <div
        class="text-left p-2 flex items-center"
        v-bind:class="[user ? 'w-1/5' : 'w-full']"
      >
        <img src="@/assets/logo.png" class="h-6 pr-2" />
        <router-link to="/"><h1>Task Performance</h1> </router-link>
      </div>
      <div>
        <Timer 
          v-if="this.$route.path === '/task'"
          v-bind:time="10"
          to="survey"
          from="task"
          class="p-4"
        />
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";

import Timer from "@/components/Timer.vue";

export default {
  components: {
    Timer,
  },
  computed: {
    user() {
      return this.$root.$data.user;
    },
  },
  methods: {
    async logout() {
      try {
        await axios.delete("/api/users");
        this.$root.$data.user = null;
      } catch (error) {
        this.$root.$data.user = null;
      }
    },
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
