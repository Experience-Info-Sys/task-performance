<template>
  <div class="felx flex-col m-2 bg-blue-300 shadow-lg rounded-md">
    <div
      class="font-bold bg-blue-900 rounded-t-md text-white px-4 py-1 w-full"
      v-bind:class="{ flash: flashing }"
    >
      Completed: {{ this.$root.$data.imgCount }}
    </div>
    <div class="bg-blue-300 py-2">
      <h3>Guns and knives are not allowed.</h3>
      <h1 class="text-2xl font-bold">Is This Bag Safe?</h1>
    </div>
    <div class="flex items-center justify-center">
      <img
        :src="
          require(`@/assets/images/TSA_bw/File ${
            this.$root.$data.imageOrder[this.$root.$data.imageIndex]
          }.jpg`)
        "
        :class="rotation"
        @load="onImgLoad"
        style="height: 30rem; width: 30rem"
        class="pb-4 transform"
      />
    </div>
    <div class="bg-blue-300 rounded-b-md">
      <button
        class="p-1 mx-2 w-36 bg-red-700 hover:bg-red-600 text-white rounded-3xl shadow-lg focus:outline-none transition duration-150 ease-in-out transform active:-translate-y-1 active:scale-95 my-2"
        @click="nextImage(false)"
      >
        No
      </button>
      <button
        class="p-1 mx-2 w-36 bg-green-600 hover:bg-green-500 text-white rounded-3xl shadow-lg focus:outline-none transition duration-150 ease-in-out transform active:-translate-y-1 active:scale-95 my-2"
        @click="nextImage(true)"
      >
        Yes
      </button>
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
  name: "ImageSearch",
  data() {
    return {
      angles: ["rotate-0", "rotate-90", "rotate-180", "-rotate-90"],
      rotation: "rotate-0",
      task: Object,
      flashing: false,
    };
  },
  created: async function () {
    if (this.$root.$data.imageOrder.length === 0) {
      this.shuffleArray(52);
    }

    // initial flash (in case the participant hasn't touched the image search buttons yet)
    await this.timeout(30000);
    this.flashing = true;
    await this.timeout(4000);
    this.flashing = false;
  },
  methods: {
    timeout(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    shuffleArray(size) {
      // let a = [];
      if (this.$root.$data.imageOrder.length === 0) {
        for (let i = 0; i < size; i++) {
          this.$root.$data.imageOrder.push(i + 1);
        }
      }
      for (let i = this.$root.$data.imageOrder.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.$root.$data.imageOrder[i], this.$root.$data.imageOrder[j]] = [
          this.$root.$data.imageOrder[j],
          this.$root.$data.imageOrder[i],
        ];
      }
    },
    randomOrientation() {
      this.rotation = this.angles[Math.floor(Math.random() * 4)];
    },
    nextImage(safetyChecked) {
      this.$root.$data.participant.imageSearches.push({
        task: this.task,
        imageNumber: this.$root.$data.imageOrder[this.$root.$data.imageIndex],
        imageOrientation: this.rotation,
        bagIsSafe: safetyChecked,
      });
      this.$root.$data.imageIndex++;
      if (this.$root.$data.imageIndex % 52 === 0) {
        this.shuffleArray(52);
        this.$root.$data.imageIndex = 0;
      }
      this.$root.$data.imgCount++;

      this.distractionFlash();
    },
    onImgLoad() {
      // stops immediate rotation that is confusing when this was in the above method.
      this.randomOrientation();
    },
    async distractionFlash() {
      await this.timeout(32000);
      this.flashing = true;
      await this.timeout(4000);
      this.flashing = false;
    },
  },
};
</script>
