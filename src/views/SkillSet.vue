<template>
  <section class="skillset-wrapper">
    <h2 class="skillset__title">## Skill Set</h2>
    <div class="skillset">
      <div class="skillset-item">
        <h2 class="skillset-item__title">言語</h2>
        <p>HTML / CSS / JavaScript / TypeScript / PHP / Swift / Java</p>
      </div>
      <div class="skillset-item">
        <h2 class="skillset-item__title">フレームワーク</h2>
        <p>
          Vue.js / React.js / Node.js / Express / jQuery / Laravel / SwiftUI /
          Spring / BootStrap / TailwindCSS / Vuetify / Material-UI
        </p>
      </div>
      <div class="skillset-item">
        <h2 class="skillset-item__title">データベース</h2>
        <p>
          Oracle / Postgres / SQLserver / MySQL / SQLite / Firebase Realtime
          Database
        </p>
      </div>
      <div class="skillset-item">
        <h2 class="skillset-item__title">その他</h2>
        <p>Docker / Linux / Firebase / Git / GitHub / Subversion / WordPress</p>
      </div>
      <div class="skillset-item">
        <h2 class="skillset-item__title">保有資格 / 合格試験</h2>
        <p>
          Oracle認定Javaプログラマ資格 SE8 Silver / Oracle認定Javaプログラマ資格
          SE8 Gold / 情報処理技術者（FE）
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skillset-wrapper {
  margin-top: 16px;
  margin-left: 16px;
  color: rgb(144, 144, 144);
}

.skillset__title {
  color: rgb(71, 139, 203);
}

.skillset {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.skillset-item {
  color: rgb(144, 144, 144);
}

.skillset-item__title {
  color: rgb(142, 213, 254);
  margin-bottom: 8px;
}
</style>
