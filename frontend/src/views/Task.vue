<template>
  <div class="p-2 shadow-inner bg-gray-300">
    <div id="content" class="flex items-center justify-evenly px-12 py-4">
      <DataEntry />
      <div
        class="flex flex-col w-full md:w-5/12 px-6 items-center justify-center"
      >
        <ImageSearch />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
import DataEntry from "@/components/DataEntry.vue";
import ImageSearch from "@/components/ImageSearch.vue";

export default {
  name: "Task",
  components: {
    // Timer,
    DataEntry,
    ImageSearch,
  },
  data() {
    return {
      taskName: "data_with_image_search",
      taskId: "",
    };
  },
  created() {
    this.getTaskId();
  },
  methods: {
    async getTaskId() {
      try {
        const response = await axios.get(`/api/task/${this.taskName}`);
        this.taskId = response.data._id;
        console.log(this.taskId);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
