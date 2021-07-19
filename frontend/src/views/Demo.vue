<template>
  <div
    class="w-11/12 md:w-1/2 mx-auto rounded-md shadow-lg bg-blue-50 flex flex-col mb-8"
  >
    <div class="p-2">
      <h1>Demo</h1>
      <hr />
      <div id="description" class="p-4 text-left">
        <p class="pb-4"></p>
        <div id="description" class="p-4 text-left">
          <p class="pb-4">
            You have two tasks that you complete day-to-day. One is to add
            employee records into the database. You are given cards like the
            ones below and asked to transcribe the information from the cards
            into the entry fields.
          </p>
          <img
            class="shadow-lg mx-auto rounded-md"
            src="@/assets/images/info_card_demo.png"
          />
          <p class="py-4">
            The other task is determining whether or not there is contraband
            present in employee and guest’s backpacks and briefcases. Contraband
            items include guns and knives. You are provided with scans like the
            ones below that show the bags’ contents, and it’s up to you to
            determine if they are safe.
          </p>
          <img
            class="shadow-lg mx-auto rounded-md"
            src="@/assets/images/image_search_demo.png"
          />
        </div>
      </div>
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
