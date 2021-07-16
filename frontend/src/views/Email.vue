<template>
  <div
    class="w-11/12 md:w-1/2 mx-auto rounded-md shadow-lg bg-blue-200 flex flex-col"
  >
    <div class="p-2">
      <h1>Please enter your email address as an identifier for this study.</h1>
      <hr />
      <div id="description" class="p-4 text-left">
        <div class="text-center p-6">
          <input
            class="rounded-lg hover:bg-gray-100 border-2 border-transparent focus:outline-none focus:ring focus:border-blue-300 shadow-inner p-2"
            :placeholder="placeholderText"
            v-model="participantId"
            :class="{ 'border-2 border-red-800': isEmpty }"
          />
        </div>
        <h3 class="text-center">
          When you are ready to begin, <br />
          enter your email address above and press start!
        </h3>
      </div>
      <button
        @click.prevent="start()"
        class="p-2 w-36 bg-blue-900 hover:bg-blue-800 text-white rounded-3xl shadow-lg focus:outline-none transition duration-150 ease-in-out transform active:-translate-y-1 active:scale-95"
      >
        Start
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Email",
  data: function () {
    return {
      participantId: "",
      placeholderText: "Email",
      isEmpty: false,
    };
  },
  methods: {
    async start() {
      if (this.participantId !== "") {
        const response = await axios.post(`/api/data`, {
          participantId: this.participantId,
        });
        this.$root.$data.participant = response.data;
        this.$router.push("/demo");
      } else {
        this.placeholderText = "Enter email to begin";
        this.isEmpty = true;
      }
    },
  },
};
</script>
