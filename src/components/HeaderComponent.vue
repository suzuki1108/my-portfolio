<template>
  <header class="header">
    <div class="header__left-item">
      <div class="header__fake-button close"></div>
      <div class="header__fake-button minimization"></div>
      <div class="header__fake-button maximization"></div>
    </div>
    <div class="header__center-item">
      <h2 class="header__title">Suzuki's Portfolio Site</h2>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
  background-color: rgb(50, 50, 51);
  height: 30px;
  display: flex;
  align-items: center;
  position: relative;
}

.header__left-item {
  display: flex;
  margin-left: 10px;
  gap: 8px;
}

.header__fake-button {
  width: 16px;
  height: 16px;
  border-radius: 50%;
}

.close {
  background-color: rgb(255, 84, 77);
}

.minimization {
  background-color: rgb(254, 180, 41);
}

.maximization {
  background-color: rgb(36, 193, 56);
}

.header__center-item {
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
}

.header__title {
  color: rgb(144, 144, 144);
}
</style>
