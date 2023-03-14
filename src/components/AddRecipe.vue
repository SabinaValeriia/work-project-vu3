<template>
  <form class="form" @submit.prevent="submit">
    <h1>Добавить рецепт</h1>
    <div v-if="show">
      <div class="input">
        <input
          type="text"
          placeholder="Название рецепта"
          v-model="form.title"
        />
      </div>
      <div class="input">
        <input
          type="text"
          placeholder="Описание рецепта"
          v-model="form.description"
        />
      </div>
    </div>

    <div class="buttons">
      <button class="btn" type="submit" :disabled="!valid">Создать</button>
      <button class="btn secondary" type="button" @click="changeShow">
        {{ show ? "Убрать" : "Показать" }} форму
      </button>
    </div>
  </form>
</template>

<script lang="ts">
// @ts-ignore
import { useToggle } from "../composable/toggle.js";
// @ts-ignore
import { useForm } from "../composable/form.js";
export default {
  setup(props: any) {
    const { visible: show, toggle: changeShow } = useToggle();

    return {
      ...useForm(props),
      show,
      changeShow,
    };
  },
  props: {
    onAdd: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid #eee;
  margin-bottom: 1rem;
}

.form h1 {
  margin: 0;
  margin-bottom: 1rem;
}

.input {
  margin-bottom: 1rem;
}

.input input {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px 8px;
  width: 400px;
}

.buttons {
  width: 400px;
  display: flex;
  justify-content: space-around;
}
</style>
