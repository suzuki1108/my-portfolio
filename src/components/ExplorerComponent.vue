<template>
  <aside v-if="props.isShowExplorer" class="explorer">
    <p class="explorer__title">メニュー</p>
  </aside>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  isShowExplorer: Boolean,
});
</script>

<style scoped>
.explorer {
  width: 300px;
  height: 94vh;
  background-color: rgb(37, 37, 38);
}

.explorer__title {
  margin: 12px 0 0 12px;
  font-size: 12px;
  color: rgb(144, 144, 144);
}
</style>
