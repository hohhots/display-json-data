<template>
    <div><h2>请选择时间</h2></div>
    <div v-for="(hour, index) in dat.days[day]" :key="index" class="width: 100px;padding: 1em"> 
         <router-link to="/hour">{{ hour }}</router-link>
    </div>
</template>

<script setup>
  const dat = await useData();
  const day = $route.params.day;
</script>
