<template>
  <div><h2>请选择日期</h2></div>

  <div
    v-for="(day, index) in Object.keys(data.days)"
    :key="index"
    class="width: 100px;padding: 1em"
  >
    <nuxt-link :to="'/day/' + day">{{ day }}</nuxt-link>
  </div>
</template>

<script setup>
  const data = await useData();
</script>