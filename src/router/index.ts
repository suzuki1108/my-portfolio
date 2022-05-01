import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Profile from "@/views/Profile.vue";
import SkillSet from "@/views/SkillSet.vue";
import JobCareer from "@/views/JobCareer.vue";
import Contact from "@/views/Contact.vue";
import PersonalDevelop from "@/views/PersonalDevelop.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "プロフィール",
    component: Profile,
  },
  {
    path: "/skillset",
    name: "スキルセット",
    component: SkillSet,
  },
  {
    path: "/personaldevelop",
    name: "個人開発",
    component: PersonalDevelop,
  },
  {
    path: "/jobcareer",
    name: "職務経歴",
    component: JobCareer,
  },
  {
    path: "/contact",
    name: "お問い合わせ",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (routes.find((i) => i.path === to.fullPath)) {
    next();
    return;
  }

  // 存在しないパスへの遷移はルートへリダイレクト
  next("/");
});

export default router;
