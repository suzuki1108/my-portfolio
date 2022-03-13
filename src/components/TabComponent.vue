<template>
  <div class="main">
    <article class="tab">
      <div
        v-for="item in displayTab"
        :key="item.route"
        class="tab__item"
        :class="{
          tab__item_active: item.route === currentRoute,
        }"
      >
        <router-link class="link" :to="item.route">
          <p><fa icon="file" class="fa-icon" />{{ item.title }}</p>
        </router-link>
      </div>
    </article>
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, inject } from "vue";
import { Display } from "@/types/Display";

const displayTab = inject<Display[]>("DisplayTab");
const currentRoute = inject<Ref<string>>("currentRoute");
</script>

<style scoped>
.main {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: auto;
}

.tab {
  width: 100%;
  height: 32px;
  background-color: rgb(37, 37, 38);
  display: flex;
}

.tab__item {
  width: 160px;
  height: 100%;
  background-color: rgb(45, 45, 45);
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid rgb(30, 30, 30);
  overflow: hidden;
  white-space: nowrap;
}

.tab__item_active {
  background-color: rgb(30, 30, 30);
}

.link {
  color: rgb(144, 144, 144);
}

.fa-icon {
  margin-right: 8px;
}

@media screen and (max-width: 480px) {
  .tab {
    display: none;
  }
}
</style>
