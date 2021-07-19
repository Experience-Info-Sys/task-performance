<template>
  <div
    class="w-11/12 md:w-1/2 mx-auto rounded-md shadow-lg bg-blue-200 flex flex-col"
  >
    <div class="p-2">
      <h1>Consent</h1>
      <hr />
      <div id="description" class="p-4 text-left">
        <p class="pb-4">
          This research is being conducted under the supervision of Professor
          Nathan Twyman, from the Department of Information Systems at Brigham
          Young University.
          <b>
            You are being invited to participate in this research study of task
            performance.
          </b>
          We are interested in finding out more about cognitive response to
          challenging tasks.
        </p>

        <p class="pb-4">
          <b>
            Your participation in this study will require the completion of the
            following tasks and survey and will take approximately 20 minutes of
            your time.
          </b>
          Your participation will be anonymous, and you will not be contacted
          again in the future. This survey involves minimal risk to you. The
          benefits, however, may impact society by helping increase knowledge
          about cognitive capability and we encourage you to try your best.
        </p>
        <p class="pb-4">
          You do not have to be in this study if you do not want to be. We will
          be happy to answer any questions you have about this study. If you
          have further questions about this project or if you have a
          research-related problem you may contact Dr. Twyman at
          nathantwyman@gmail.com.
        </p>
        <p class="pb-4">
          If you have any questions about your rights as a research participant
          you may contact the IRB Administrator at A-285 ASB, Brigham Young
          University, Provo, UT 84602; irb@byu.edu; (801) 422-1461. The IRB is a
          group of people who review research studies to protect the rights and
          welfare of research participants.
        </p>
        <p class="text-center">
          <b>
            Proceeding with the following tasks implies your consent to
            participate. Thank you!
          </b>
        </p>
      </div>
      <div class="flex justify-center pb-2">
        <div
          class="rounded-lg bg-gray-100 border-2 shadow-inner p-2 pr-4"
          :class="{ 'text-red-700': noConsent }"
        >
          <input
            class="p-6 m-2 text-xl"
            id="consentCheckbox"
            type="checkbox"
            v-model="consent"
          />
          <label for="consentCheckbox" class="select-none">
            I consent to participate in this research study.
          </label>
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
