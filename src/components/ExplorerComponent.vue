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
        <router-link to="/" class="router-link">
          <fa icon="file" class="fa-icon" />
          プロフィール
        </router-link>

        <router-link to="/skillset" class="router-link">
          <fa icon="file" class="fa-icon" />
          スキルセット
        </router-link>

        <router-link to="/personaldevelop" class="router-link">
          <fa icon="file" class="fa-icon" />
          個人開発
        </router-link>

        <router-link to="/jobcareer" class="router-link">
          <fa icon="file" class="fa-icon" />
          職務経歴
        </router-link>

        <router-link to="/contact" class="router-link">
          <fa icon="file" class="fa-icon" />
          お問い合わせ
        </router-link>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";

const props = defineProps({
  isShowExplorer: Boolean,
});

const isShowDirectory = ref(true);
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
</style>
