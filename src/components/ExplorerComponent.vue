<template>
  <aside v-if="props.isShowExplorer" class="explorer">
    <p class="explorer__title">メニュー</p>
    <div class="explorer__menu">
      <p
        @click="isShowDirectory = !isShowDirectory"
        class="explorer__menu-title"
      >
        <span>{{ isShowDirectory ? "∨ " : "> " }}</span
        >SUZUKI'S-PORTFOLIO
      </p>
      <div class="explorer__menu-item" v-if="isShowDirectory">
        <router-link
          v-for="item in display"
          :key="item.route"
          :to="item.route"
          class="router-link"
          :class="{
            router__link_active: item.route === currentRoute,
          }"
          @click="addTab(item)"
        >
          <fa icon="file" class="fa-icon" /> {{ item.title }}
        </router-link>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import { Ref, inject } from "vue";
import { Display } from "@/types/Display";

const props = defineProps({
  isShowExplorer: Boolean,
});

const display = inject<Display[]>("Display");
const displayTab = inject<Display[]>("DisplayTab");
const currentRoute = inject<Ref<string>>("currentRoute");

const isShowDirectory = ref(true);

const addTab = (item: Display) => {
  if (!displayTab) return;

  if (displayTab[0].route === "/" && item.route === "/") return;

  if (!displayTab.includes(item)) displayTab.push(item);
};
</script>

<style scoped>
.explorer {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 300px;
  height: 100vh;
  background-color: rgb(37, 37, 38);
}

.explorer__title {
  margin: 12px 0 0 12px;
  font-size: 12px;
  color: rgb(144, 144, 144);
}

.explorer__menu {
  margin-top: 16px;
  margin-left: 12px;
  font-size: 12px;
  font-weight: bold;
  color: rgb(144, 144, 144);
}

.explorer__menu-item {
  margin-top: 16px;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.fa-icon {
  margin-right: 8px;
}

.router-link {
  color: rgb(144, 144, 144);
}

.router__link_active {
  background-color: rgb(52, 52, 58);
}
</style>
