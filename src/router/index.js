import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import InsDash from "@/views/InsDash.vue";
import ProjectGuidelines from "@/views/ProjectGuidelines.vue";

import MilestoneGuidelines from "@/views/MilestoneGuidelines.vue";
import ProjectList from "@/views/ProjectList.vue";
import DocumentReview from "@/views/DocumentReview.vue";
import AllStudents from "@/views/AllStudents.vue";


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/instructor/:id",
    name: "instructordashboard",
    component: InsDash,
  },
  {
    path: "/projectguidelines/:id",
    name: "projectguidelines",
    component: ProjectGuidelines,
  },

  {
    path: "/milestoneguidelines/:id",
    name: "milestoneguidelines",
    component: MilestoneGuidelines,
  },
  {
    path: "/projectlist/:id",
    name: "projectlist",
    component: ProjectList,
  },
  {
    path: "/documentreview/:id",
    name: "documentreview",
    component: DocumentReview,
  },
  {
    path: "/allstudents/:id",
    name: "allstudents",
    component: AllStudents,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
