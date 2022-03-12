<template>
  <div class="main">
    <article class="tab">
      <div class="tab__items">
        <p>tab</p>
      </div>
    </article>
    <div class="main-content">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.tab {
  width: 100%;
  height: 32px;
  background-color: rgb(37, 37, 38);
  display: flex;
}
</style>
