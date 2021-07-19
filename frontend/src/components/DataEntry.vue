<template>
  <div class="flex flex-col">
    <InfoCard class="mb-4" :employee="currentEmployee" />
    <h3 class="pb-4">Enter the above data exactly as written.</h3>
    <!-- <form > -->
    <div class="form text-right mx-auto bg-blue-300 rounded-md shadow-lg">
      <div class="row">
        <label for="name">Name: </label>
        <input
          class="rounded-lg focus:outline-none focus:ring focus:border-blue-300 shadow-inner p-1"
          id="name"
          type="text"
          v-model="name"
        />
        <label for="department">Department: </label>
        <input
          class="rounded-lg focus:outline-none focus:ring focus:border-blue-300 shadow-inner p-1"
          id="department"
          type="text"
          v-model="department"
        />
      </div>
      <div class="row row-span-full">
        <label for="job">Job: </label>
        <input
          class="rounded-lg focus:outline-none focus:ring focus:border-blue-300 shadow-inner p-1"
          id="job"
          type="text"
          v-model="job"
        />
      </div>
      <div class="row">
        <label for="address">Address: </label>
        <input
          class="rounded-lg focus:outline-none focus:ring focus:border-blue-300 shadow-inner p-1"
          id="address"
          type="text"
          v-model="address"
        />

        <label for="city">City: </label>
        <input
          class="rounded-lg focus:outline-none focus:ring focus:border-blue-300 shadow-inner p-1"
          id="city"
          type="text"
          v-model="city"
        />
      </div>
      <div class="row">
        <label for="state">State: </label>
        <input
          class="rounded-lg focus:outline-none focus:ring focus:border-blue-300 shadow-inner p-1"
          id="state"
          type="text"
          v-model="state"
        />

        <label for="zip_code">Zip Code: </label>
        <input
          class="rounded-lg focus:outline-none focus:ring focus:border-blue-300 shadow-inner p-1"
          id="zip_code"
          type="text"
          v-model="zip_code"
          @keyup.enter="getNext()"
        />
      </div>
    </div>

    <div class="mx-auto my-4">
      <button
        @click.prevent="getNext"
        class="p-2 w-36 bg-blue-900 hover:bg-blue-800 text-white rounded-3xl shadow-lg focus:outline-none transition duration-150 ease-in-out transform active:-translate-y-1 active:scale-95"
      >
        Next
      </button>
    </div>
  </div>
</template>

<style scoped>
.form {
  display: table;
  border-spacing: 1rem;
}
.row {
  display: table-row;
}
label {
  display: table-cell;
  font-weight: 600;
}
input {
  display: table-cell;
}
</style>

<script>
import InfoCard from "./InfoCard.vue";
export default {
  name: "DataEntry",
  components: {
    InfoCard,
  },
  data() {
    return {
      task: Object,
      id: "",
      name: "",
      job: "",
      department: "",
      address: "",
      city: "",
      state: "",
      zip_code: "",
    };
  },
  computed: {
    currentEmployee() {
      return this.$root.$data.employeeInfo[this.$root.$data.currentID];
    },
  },
  methods: {
    getNext() {
      const dataIDs = [
        "name",
        "job",
        "department",
        "address",
        "city",
        "state",
        "zip_code",
      ];
      for (const key of dataIDs) {
        if (this[key] === null || this[key] === "") {
          return;
        }
      }
      this.id = this.$root.$data.currentID;
      let [fname, lname] = this.name.trim().split(" ");
      this.$root.$data.newDataEntry(
        this.task,
        fname,
        lname,
        this.job,
        this.department,
        this.address,
        this.city,
        this.state,
        this.zip_code
      );
      this.name = "";
      this.address = "";
      this.city = "";
      this.department = "";
      this.id = "";
      this.job = "";
      this.state = "";
      this.zip_code = "";
      this.$root.$data.entryCount++;
    },
  },
};
</script>
