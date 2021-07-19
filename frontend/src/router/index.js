import Vue from "vue";
import VueRouter from "vue-router";
import Consent from "../views/Consent.vue";
import Demo from "../views/Demo.vue";
import Email from "../views/Email.vue";
import Instructions from "../views/Instructions.vue";
import Survey from "../views/Survey.vue";
import Task from "../views/Task.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Consent",
    component: Consent,
  },
  {
    path: "/email",
    name: "Email",
    component: Email,
  },
  {
    path: "/demo",
    name: "Demo",
    component: Demo,
  },
  {
    path: "/instructions",
    name: "Instructions",
    component: Instructions,
  },
  {
    path: "/task",
    name: "Task",
    component: Task,
  },
  {
    path: "/survey",
    name: "Survey",
    component: Survey,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
