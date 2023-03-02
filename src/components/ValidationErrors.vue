<template>
  <div v-if="errors.length > 0" class="errors">
    <p v-for="(error, i) in errors" :key="i">{{ error }}</p>
  </div>
</template>

<script>
export default {
  props: {
    errors: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.errors {
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: red;

  p {
    word-wrap: break-word;
  }
}
</style>
