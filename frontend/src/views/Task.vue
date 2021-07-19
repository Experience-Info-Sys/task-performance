<template>
  <div class="shadow-inner bg-gray-300">
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
// @ is an alias to /src
import DataEntry from "@/components/DataEntry.vue";
import ImageSearch from "@/components/ImageSearch.vue";

export default {
  name: "Task",
  components: {
    DataEntry,
    ImageSearch,
  },
};
</script>
