<template lang="pug">
.pagination
  div(v-for="item in paginatedData", :key="item.index")
    div(v-if="item.value") {{ item.value }}
</template>
<script lang="ts" setup>
import { computed } from "vue";
// @ts-ignore
import { paginatedData } from "../composable/pagination.js";
</script>
<style lang="scss">
.pagination {
  padding: 20px;
  text-align: center;
}
</style>
