<template>
  <form
    action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSc9fbnk9IezMBmO-2ysU9dydmZ-z8cj8TCIBPSaSnSp8bE_6A/formResponse"
    target="_self"
    method="POST"
    id="mG61Hd"
    jsmodel="TOfxwf Q91hve CEkLOc"
    data-shuffle-seed="6808717439518163128"
    data-response="%.@.[]]"
    data-first-entry="0"
    data-last-entry="4"
    data-is-first-page="true"
  >
    <h2>## お問い合わせ</h2>
    <span v-if="validateResult !== ''" class="error">{{ validateResult }}</span>
    <div class="form-wrapper">
      <div class="form__item">
        <p>氏名</p>
        <input v-model="state.name" type="text" name="entry.481838673" />
      </div>
      <div class="form__item">
        <p>メールアドレス</p>
        <input v-model="state.email" type="text" name="entry.1551030806" />
      </div>
      <div class="form__item">
        <p>題名</p>
        <input v-model="state.title" type="text" name="entry.566363035" />
      </div>
      <div class="form__item">
        <p>本文</p>
        <textarea v-model="state.message" name="entry.2038912896"></textarea>
      </div>
      <div class="submit-btn">
        <input @click="submit" type="submit" value="送信" />
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { CommonBeforeRouteEnter } from "@/Logic/CommonBeforeRouteEnter";

CommonBeforeRouteEnter();

type Form = {
  name: string;
  email: string;
  title: string;
  message: string;
};

const state = reactive<Form>({
  name: "",
  email: "",
  title: "",
  message: "",
});

const validateResult = ref("");

const submit = (event: Event) => {
  if (!validate()) {
    event.preventDefault();
    validateResult.value = "全ての項目を入力してください。";
    return;
  }

  validateResult.value = "";
};

const validate = (): boolean => {
  // google form 使用につき、バリデーションは最低限にしてます
  if (state.name === "") {
    return false;
  }

  if (state.email === "") {
    return false;
  }

  if (state.title === "") {
    return false;
  }

  if (state.message === "") {
    return false;
  }

  return true;
};
</script>

<style scoped>
form {
  color: rgb(144, 144, 144);
  margin-top: 16px;
  margin-left: 16px;
}

input,
textarea {
  background-color: rgb(50, 50, 51);
  color: rgb(144, 144, 144);
  border-radius: 5px;
  border: 1px solid rgb(144, 144, 144);
}

input {
  width: 300px;
}

textarea {
  width: 600px;
  height: 200px;
}

@media screen and (max-width: 480px) {
  textarea {
    width: 300px;
  }
}

input:focus,
textarea:focus {
  outline: none;
}

h2 {
  color: rgb(71, 139, 203);
  margin-bottom: 16px;
}

.form-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-wrapper p {
  color: rgb(142, 213, 254);
  margin-bottom: 8px;
}

.error {
  color: red;
}
</style>
