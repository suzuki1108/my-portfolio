<template>
  <BaseLayout />
</template>

<script setup lang="ts">
import BaseLayout from "@/components/BaseLayout.vue";
import { provide, reactive, Ref, ref } from "vue";
import { Display } from "@/types/Display";

const display = reactive<Display[]>([
  {
    route: "/",
    title: "プロフィール",
  },
  {
    route: "/skillset",
    title: "スキルセット",
  },
  {
    route: "/personaldevelop",
    title: "個人開発",
  },
  {
    route: "/jobcareer",
    title: "職務経歴",
  },
  {
    route: "/contact",
    title: "お問い合わせ",
  },
]);

const displayTab = reactive<Display[]>([
  {
    route: "/",
    title: "プロフィール",
  },
]);

const currentRoute = ref("/");

provide<Display[]>("Display", display);
provide<Display[]>("DisplayTab", displayTab);
provide<Ref<string>>("currentRoute", currentRoute);
</script>

<style></style>
