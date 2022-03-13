<template>
  <section class="profile">
    <h2 class="profile__title">## About Me</h2>
    <div class="about-me">
      <div class="about-me__image">
        <img src="../assets/profileImage.jpeg" />
      </div>
      <div class="about-me__list">
        <li class="about-me__list-item">
          <span class="about-me__list-title">名前: </span>Suzuki.S
        </li>
        <li class="about-me__list-item">
          <span class="about-me__list-title">年齢: </span>{{ age() }}
        </li>
        <li class="about-me__list-item">
          <span class="about-me__list-title">住所: </span>北海道札幌市
        </li>
        <li class="about-me__list-item">
          <span class="about-me__list-title">職業: </span>フリーランスエンジニア
        </li>
        <li class="about-me__list-item">
          <span class="about-me__list-title">趣味: </span>個人開発, ギター演奏
        </li>
      </div>
      <div class="about-me__description">
        <p>
          音楽の専門学校卒業後、4年間営業職に従事。
          業務中に社員の実績管理システムを作成したことでエンジニアに興味を抱く。
          2020/4 ~ ITエンジニアとしてSESや受託開発会社で経験を積み、 2022/4 ~
          フリーランスエンジニアとして活動開始。
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CommonBeforeRouteEnter } from "@/Logic/CommonBeforeRouteEnter";

const age = (): number => {
  const birthday = {
    year: 1993,
    month: 11,
    date: 8,
  };
  const today = new Date();
  const thisYearsBirthday = new Date(
    today.getFullYear(),
    birthday.month - 1,
    birthday.date
  );
  let age = today.getFullYear() - birthday.year;
  if (today < thisYearsBirthday) age--;

  return age;
};

CommonBeforeRouteEnter();
</script>

<style scoped>
.profile {
  margin-top: 16px;
  margin-left: 16px;
  color: rgb(144, 144, 144);
}

.profile__title {
  color: rgb(71, 139, 203);
}

.about-me {
  margin-top: 16px;
}

.about-me__image img {
  border-radius: 50%;
  width: 200px;
  height: 200px;
}
.about-me__list {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.about-me__list-item {
  list-style: none;
  color: rgb(201, 134, 106);
}

.about-me__list-title {
  color: rgb(142, 213, 254);
}

.about-me__description {
  margin-top: 8px;
  width: 50%;
  line-height: 1.5;
}

@media screen and (max-width: 480px) {
  .about-me__description {
    width: 80%;
    line-height: 1.5;
  }
}
</style>
