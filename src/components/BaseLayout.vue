<template>
  <div class="editor">
    <HeaderComponent />
    <div class="content-wrapper">
      <div class="editor__container">
        <SidebarComponent />
        <ExplorerComponent :is-show-explorer="true" />
        <TabComponent />
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import SidebarComponent from "@/components/SidebarComponent.vue";
import TabComponent from "@/components/TabComponent.vue";
import ExplorerComponent from "./ExplorerComponent.vue";
</script>

<style scoped>
.editor {
  width: 100vw;
  height: 100vh;
  background-color: rgb(30, 30, 30);
}

.content-wrapper {
  display: flex;
  flex-direction: column;
}

.editor__container {
  display: flex;
}

.explorer-tab-wrapper {
  display: flex;
}
</style>
