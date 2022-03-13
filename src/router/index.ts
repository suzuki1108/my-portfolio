import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Profile from "@/views/Profile.vue";
import SkillSet from "@/views/SkillSet.vue";
import JobCareer from "@/views/JobCareer.vue";
import Contact from "@/views/Contact.vue";
import PersonalDevelop from "@/views/PersonalDevelop.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/skillset",
    name: "SkillSet",
    component: SkillSet,
  },
  {
    path: "/personaldevelop",
    name: "PersonalDevelop",
    component: PersonalDevelop,
  },
  {
    path: "/jobcareer",
    name: "JobCareer",
    component: JobCareer,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
