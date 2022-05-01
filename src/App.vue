<template>
  <BaseLayout />
</template>

<script setup lang="ts">
import BaseLayout from "@/components/BaseLayout.vue";
import { provide, reactive, ComputedRef, computed } from "vue";
import { Display } from "@/types/Display";
import router from "./router";
import { useRoute } from "vue-router";

const route = useRoute();

const display = reactive<Display[]>(
  router.getRoutes().map((i) => {
    return {
      route: i.path,
      title: i.name?.toString() || "",
    };
  })
);

const currentRoute = computed(() => {
  return route.path;
});

const getInitDisplayTab = (): Display => {
  const initDisplay = display.find((i) => i.route === location.pathname);
  return {
    route: initDisplay?.route || "/",
    title: initDisplay?.title || "プロフィール",
  };
};

const displayTab = reactive<Display[]>([getInitDisplayTab()]);

provide<Display[]>("Display", display);
provide<Display[]>("DisplayTab", displayTab);
provide<ComputedRef<string>>("currentRoute", currentRoute);
</script>

<style></style>
