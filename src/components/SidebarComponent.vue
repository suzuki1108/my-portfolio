<template>
  <aside class="sidebar">
    <div class="sidebar-icons">
      <fa
        :icon="props.isShowExplorer ? 'xmark' : 'bars'"
        :data-icon-xmark="props.isShowExplorer"
        class="fa-icon fa-icon_current"
        @click="$emit('sidebar_toggle')"
      />
      <a href="https://github.com/suzuki1108/">
        <fa :icon="['fab', 'github']" class="fa-icon" />
      </a>
      <a href="https://techkinoko.com/">
        <fa icon="blog" class="fa-icon" />
      </a>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  isShowExplorer: Boolean,
});
</script>

<style scoped>
.sidebar {
  width: 48px;
  background-color: rgb(51, 51, 51);
  display: flex;
  height: 100vh;
  flex-direction: column;
}

.sidebar-icons {
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  gap: 12px;
}

.sidebar-icons a {
  display: block;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.fa-icon {
  font-size: 26px;
  padding: 8px 0;
  color: rgb(122, 122, 122);
}

.fa-icon[data-icon-xmark="true"] {
  padding: 8px 14px;
}

.fa-icon_current {
  color: rgb(255, 255, 255);
  border-left: 2px solid rgb(255, 255, 255);
}

.fa-icon:hover {
  color: rgb(255, 255, 255);
}

.fa-icon_current:active {
  border-left: 2px solid rgb(0, 109, 200);
}
</style>
