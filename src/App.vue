<template>
  <BaseLayout />
</template>

<script setup lang="ts">
import BaseLayout from "@/components/BaseLayout.vue";
import { provide, reactive, Ref, ref } from "vue";
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

const displayTab = reactive<Display[]>([
  {
    route: display[0].route,
    title: display[0].title,
  },
]);

const currentRoute = ref(route.path);

provide<Display[]>("Display", display);
provide<Display[]>("DisplayTab", displayTab);
provide<Ref<string>>("currentRoute", currentRoute);
</script>

<style></style>
