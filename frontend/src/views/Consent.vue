<template>
  <div
    class="w-11/12 md:w-1/2 mx-auto rounded-md shadow-lg bg-blue-200 flex flex-col"
  >
    <div class="p-2">
      <h1>Consent Form</h1>
      <hr />
      <!-- HAVEN, This is where you can write your consent form -->
      <!-- vvvvvvvvvvvvvvvvv -->
      <div id="description" class="p-4 text-left">
        This is a consent form. These are all the things that you'll be agreeing
        to accept as a participant of this study.
        <ul class="list-disc list-inside">
          <li>Privacy</li>
          <li>Something about your identifier can be used to track you</li>
          <li></li>
        </ul>
      </div>
      <!-- ^^^^^^^^^^^^^^^^^^^^ -->
      <div class="flex justify-center">
        <div
          class="text-center mb-2 p-2 w-3/4 rounded shadow-md bg-gray-50"
          :class="{ 'text-red-700': noConsent }"
        >
          <input
            class="p-6 m-2 text-xl"
            id="consentCheckbox"
            type="checkbox"
            v-model="consent"
          />
          <label for="consentCheckbox" class="select-none"
            >I consent to the use of my responses</label
          >
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
  name: "Consent",
  data: function () {
    return {
      consent: false,
      noConsent: false,
    };
  },
  methods: {
    // We need on post method for the consent. If they do not consent there is no study to be completed.
    next() {
      if (this.consent) {
        this.$router.push("/email");
      } else {
        this.noConsent = true;
      }
    },
  },
};
</script>
