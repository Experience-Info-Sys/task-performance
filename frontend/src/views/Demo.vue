<template>
  <div
    class="w-11/12 md:w-1/2 mx-auto rounded-md shadow-lg bg-blue-200 flex flex-col"
  >
    <div class="p-2">
      <h1>Demo</h1>
      <hr />
      <!-- HAVEN, This is where you can write your consent form -->
      <!-- vvvvvvvvvvvvvvvvv -->
      <div id="description" class="p-4 text-left">
        <h1>This is the demo information</h1>
        <img src="@/assets/images/TSA_bw/File 1.jpg" />
      </div>
      <!-- ^^^^^^^^^^^^^^^^^^^^ -->
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
export default {
  name: "Demo",
  data: function () {
    return {
      consent: false,
      noConsent: false,
    };
  },
  methods: {
    // We need on post method for the consent. If they do not consent there is no study to be completed.
    next() {
      this.$router.push("/instructions");
    },
  },
};
</script>
