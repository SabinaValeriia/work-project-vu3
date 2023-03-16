<template lang="pug">
.pagination
  button.prev(@click="backPage") Prev
  button.item(
    v-for="item in Math.ceil(data.length / perPage)",
    :key="item",
    @click="() => goToPage(item)"
  ) {{ item }}
  button.next(@click="nextPage") Next
</template>
<script lang="ts" setup>
import { ref } from "vue";
// @ts-ignore
import {
  data,
  perPage,
  nextPage,
  backPage,
  goToPage,
} from "../composable/pagination.js";

const page = ref(1);
</script>
<style lang="scss">
.pagination {
  div {
    padding: 5px;
  }
  button {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #000000;
    border: none;
    background: transparent;
    cursor: pointer;
    height: 40px;
  }
  button.prev {
    margin-right: 20px;
  }
  button.next {
    margin-left: 20px;
  }
  button.prev::before {
    display: inline-block;
    content: "";
    width: 15px;
    height: 12px;
    margin-right: 10px;
    background-image: url("../assets/prev.svg");
    background-repeat: no-repeat;
  }
  button.next::after {
    display: inline-block;
    content: "";
    width: 15px;
    height: 12px;
    margin-left: 10px;
    background-image: url("../assets/next.svg");
    background-repeat: no-repeat;
  }
  button.item {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 130.02%;
    color: #959b9d;
    margin: 0 16px;
    &:hover,
    :focus,
    :active {
      width: 40px;
      height: 40px;
      background: #060606;
      border-radius: 68px;
      color: #fff;
    }
  }
}
</style>
