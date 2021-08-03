<template>
  <div>
    <div
      class="font-bold bg-blue-900 rounded-t-md text-white px-4 py-1"
      v-bind:class="{ flash: flashing }"
    >
      Completed: {{ this.$root.$data.entryCount }}
    </div>
    <div
      class="select-none w-full flex p-6 m-8 mt-0 mx-auto bg-blue-300 rounded-b-md shadow-lg"
    >
      <div class="pr-2 w-5/12">
        <h3 class="text-left">Department:</h3>
        <h2>{{ employee.department }}</h2>
        <div class="text-left pl-2"></div>
      </div>
      <div class="border p-2 mx-auto w-7/12">
        <h1>{{ employee.first_name }} {{ employee.last_name }}</h1>
        <h3>{{ employee.job }}</h3>
        <div class="w-max mx-auto py-2">
          <p>{{ employee.address }}</p>
          <p>
            {{ employee.city }}, {{ employee.state }} {{ employee.zip_code }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flash {
  animation: flash 0.4s ease-in-out infinite;
}

@keyframes flash {
  50% {
    background: yellow;
  }
}
</style>

<script>
export default {
  name: "InfoCard",
  props: {
    employee: Object,
  },
  data: function () {
    return {
      flashing: false,
    };
  },
  created: async function () {
    this.flashing = true;
    await this.timeout(4000);
    this.flashing = false;
  },
  mounted: function () {
    this.$root.$on("nextData", async () => {
      // wait 30 sec then start flashing
      await this.timeout(32000);
      this.flashing = true;
      await this.timeout(4000);
      this.flashing = false;
    });
  },
  methods: {
    timeout(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
  },
};
</script>
