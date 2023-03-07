<template>
  <div v-for="item in paginatedData" :key="item.index">{{ item.value }}</div>
  <button @click="backPage">prev</button>
  <button
    v-for="item in Math.ceil(data.length / perPage)"
    :key="item"
    @click="() => goToPage(item)"
  >
    {{ item }}
  </button>
  <button @click="nextPage">next</button>
</template>

<script>
import handlePagination from "../pagination.js";

export default {
  name: "App",
  setup() {
    const handlePaginationValue = handlePagination();

    return { ...handlePaginationValue };
  },
};
</script>

<style></style>
