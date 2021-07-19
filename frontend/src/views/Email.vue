<template>
  <div
    class="w-11/12 md:w-1/2 mx-auto rounded-md shadow-lg bg-blue-200 flex flex-col"
  >
    <div class="p-2">
      <h1>Please enter your email address.</h1>
      <hr />
      <div id="description" class="text-left">
        <div class="text-center pt-8 p-4">
          <input
            class="rounded-lg hover:bg-gray-100 border-2 border-transparent focus:outline-none focus:ring focus:border-blue-300 shadow-inner p-2"
            type="email"
            required
            :placeholder="placeholderText"
            v-model="email"
            :class="{ 'border-2 border-red-800': isEmpty }"
            @keyup.enter="start()"
          />
        </div>
      </div>
      <button
        @click.prevent="start()"
        class="mb-2 p-2 w-36 bg-blue-900 hover:bg-blue-800 text-white rounded-3xl shadow-lg focus:outline-none transition duration-150 ease-in-out transform active:-translate-y-1 active:scale-95"
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
      email: "",
      placeholderText: "Email",
      isEmpty: false,
    };
  },
  methods: {
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    async start() {
      if (this.validateEmail(this.email)) {
        const response = await axios.post(`/api/data`, {
          email: this.email,
        });
        this.$root.$data.participant = response.data;
        this.$router.push("/demo");
      } else {
        this.email = "";
        this.placeholderText = "Invalid email address";
        this.isEmpty = true;
      }
    },
  },
};
</script>
