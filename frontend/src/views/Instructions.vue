<template>
  <div
    class="w-11/12 md:w-1/2 mx-auto rounded-md shadow-lg bg-blue-200 flex flex-col"
  >
    <A v-if="AorB" />
    <B v-else />
    <div class="flex justify-center mb-2">
      <button
        @click.prevent="next()"
        class="m-2 p-2 w-36 bg-blue-900 hover:bg-blue-800 text-white rounded-3xl shadow-lg focus:outline-none transition duration-150 ease-in-out transform active:-translate-y-1 active:scale-95"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import A from "@/components/Instructions-A.vue";
import B from "@/components/Instructions-B.vue";

export default {
  name: "Instructions",
  components: {
    A,
    B,
  },
  data: function () {
    return {
      AorB: -1,
    };
  },
  created() {
    this.AorB = Math.random() < 0.5;
  },
  methods: {
    // We need on post method for the consent. If they do not consent there is no study to be completed.
    next() {
      if (!this.AorB) {
        alert("This is the alert that B gets before they see the next page!");
      }
      this.$router.push("/task");
    },
  },
};
</script>
