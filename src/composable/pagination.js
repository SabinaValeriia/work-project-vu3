import { ref, reactive, computed } from "vue";
export const dataArray = Array.from(Array(50).keys()).map((item) => {
  return { index: item, value: `this_${item}` };
});
export const perPage = 10;
export let page = ref(1);
export function nextPage() {
  if (page.value !== Math.ceil(dataArray.length / perPage)) {
    page.value += 1;
  }
}
export function goToPage(numPage) {
  page.value = numPage;
}
export const paginatedData = computed(() =>
  dataArray.slice((page.value - 1) * perPage, page.value * perPage)
);
export function backPage() {
  if (page.value !== 1) {
    page.value -= 1;
  }
}
