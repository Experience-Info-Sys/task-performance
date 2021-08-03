import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import mock from "./mock_data";

Vue.config.productionTip = false;

const data = {
  participant: { dataEntries: [], imageSearches: [] }, // email, instructionSetAorB dataEntries, imageSearches
  employeeInfo: mock,
  currentID: 500,
  imageOrder: [],
  imageIndex: 0,
  imgCount: 0,
  entryCount: 0,
  newDataEntry(task, first, last, job, dept, address, city, state, zip) {
    this.currentID++;
    this.participant.dataEntries.push({
      task: task,
      id: this.currentID,
      first_name: first,
      last_name: last,
      job: job,
      department: dept,
      address: address,
      city: city,
      state: state,
      zip_code: zip,
    });
  },
};

new Vue({
  router,
  data: data,
  render: (h) => h(App),
}).$mount("#app");
