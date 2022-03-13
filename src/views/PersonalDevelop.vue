<template>
  <section class="develop-wrapper">
    <h2 class="develop">## Personal Develop</h2>
    <div class="develop">
      <div class="develop-item">
        <h2 class="develop-item__title">VSCode風ポートフォリオサイト</h2>
        <div class="develop-item__description">
          <p>作成:2021/3</p>
          <p>
            概要:
            VSCode風のポートフォリオサイト(本サイト)。突貫工事的に作成したため、随時リファクタ予定。
          </p>
          <p>技術: Vue.js 3系 / TypeScript</p>
        </div>
      </div>
      <div class="develop-item">
        <h2 class="develop-item__title">nanitabe</h2>
        <div class="develop-item__description">
          <p>作成:2021/12</p>
          <a href="https://nanitabe-web.netlify.app/">成果物リンク</a>
          <p>
            概要:
            HotPepperAPIから飲食店情報を取得し、現在位置検索や、詳細検索、お気に入り登録などが行えるWebアプリケーション
          </p>
          <p>
            技術: Vue.js 3系 / TypeScript / TailwindCSS / netlify
            ※バックエンドは個人開発仲間がJavaで開発
          </p>
        </div>
      </div>
      <div class="develop-item">
        <h2 class="develop-item__title">シンプル冷蔵庫</h2>
        <div class="develop-item__description">
          <p>作成:2021/9</p>
          <a
            href="https://apps.apple.com/jp/app/%E3%82%B7%E3%83%B3%E3%83%97%E3%83%AB%E5%86%B7%E8%94%B5%E5%BA%AB%E7%AE%A1%E7%90%86/id1584354483"
            >成果物リンク</a
          >
          <p>
            概要:
            家族間で冷蔵庫の中身を共有しながら管理できるiOSアプリケーション
          </p>
          <p>
            技術: Swift / SwiftUI / Firebase / FirebaseAuthentication /
            FirebaseRealtimeDatabase
          </p>
        </div>
      </div>
      <div class="develop-item">
        <h2 class="develop-item__title">プログラミング言語ランキングサイト</h2>
        <div class="develop-item__description">
          <p>作成:2021/7</p>
          <a href="https://programming-ranking.com/">成果物リンク</a>
          <p>
            概要:
            Qiitaの投稿数や、GitHubのリポジトリ数を言語ごとに毎日夜間にバッチ処理で集計し、独自の言語ランキングを表示するサイト
          </p>
          <p>技術: Laravel ※フロントは個人開発仲間がAngularで開発</p>
        </div>
      </div>
      <div class="develop-item">
        <h2 class="develop-item__title">その他</h2>
        <div class="develop-item__description">
          <p>
            LINEBotを書いたり、GASでLINEにメール転送するサービスを書いたり、暇があれば色々個人的に使うものなどを書いています。
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.develop-wrapper {
  margin-top: 16px;
  margin-left: 16px;
  color: rgb(144, 144, 144);
}

.develop {
  color: rgb(71, 139, 203);
}

.develop {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.develop-item {
  color: rgb(144, 144, 144);
}

.develop-item__title {
  color: rgb(142, 213, 254);
  margin-bottom: 8px;
}

.develop-item__description {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.develop-item__description a {
  color: rgb(144, 144, 144);
  display: block;
  width: 200px;
}
</style>
