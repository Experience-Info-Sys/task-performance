<template>
  <div
    class="w-11/12 md:w-1/2 mx-auto rounded-md shadow-lg bg-blue-200 flex flex-col"
  >
    <div class="p-2">
      <h1>Instructions</h1>
      <div id="description" class="p-4 text-left">
        <p class="pb-4">
          <b
            >You will have 10 minutes to complete BOTH of the following
            tasks.</b
          >
          You may divide your time any way you like. In order to be compensated
          for your performance, <b>please do not refresh the page.</b>
        </p>

        <p class="pb-8">
          <b>Tasks:</b> You must enter at least <b>30 employee cards </b>and
          complete <b>100 luggage scan searches</b>.
        </p>

        <p class="text-center">When you are prepared to begin, click “Next.”</p>
      </div>
    </div>
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

<style scoped>
.swal2-styled.swal2-default-outline:focus {
  box-shadow: 0 0 0 0 !important;
}
</style>

<script>
import Swal from "sweetalert2";

export default {
  name: "Instructions",
  data: function () {
    return {
      AorB: -1,
    };
  },
  async created() {
    this.AorB = this.$root.$data.participant.instructionSetAorB;
  },
  methods: {
    async next() {
      if (this.AorB === "B") {
        Swal.fire({
          title: "Wait!",
          html:
            "<p class='text-left pb-4'>The <b>tasks will flash randomly</b> throughout the exercise. Please <b>disregard these distractions</b> and divide your time however you'd like.</p>",
          icon: "warning",
          confirmButtonText: "Continue",
          confirmButtonColor: "#1E3A8A",
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
