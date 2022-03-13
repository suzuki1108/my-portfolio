<template>
  <div class="main">
    <article class="tab">
      <div class="tab__items">
        <p>tab</p>
      </div>
    </article>
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
</style>
