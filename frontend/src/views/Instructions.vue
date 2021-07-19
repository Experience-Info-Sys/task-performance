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
import Swal from "sweetalert2";

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
    async next() {
      if (!this.AorB) {
        Swal.fire({
          title: "ASAP",
          html:
            "<p class='text-left pb-4'>Wait! Before you begin, your employer stops by your desk and hands you a stack of 100 luggage scans.</p>" +
            "<p class='text-left pb-8'>''Please complete these right away. I need both the data entry cards AND these luggage scans in the next 10 minutes.”</p>" +
            "<p><b>New Task:</b> You must enter at least <b>30 employee cards </b>and<b> 100 luggage scan searches</b>.</p>",
          icon: "warning",
          confirmButtonText: "Continue",
        }).then(() => {
          this.$router.push("/task");
        });
      } else {
        this.$router.push("/task");
      }
    },
  },
};
</script>
