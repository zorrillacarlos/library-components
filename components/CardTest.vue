<template>
  <div class="containter-card">
    <div class="card-test">
      <h4 class="tittle">{{ title }}</h4>
      <p class="secundary-text">{{ subtext }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { title, subtext } = defineProps({
  title: String,
  subtext: String,
});
</script>

<style scoped>
@import url("../assets/style-components.css");
</style>
