<template>
    <div><h2>请选择时间 - {{ $route.params.dayid }}</h2></div>

    <div v-for="(hour, index) in data.days[$route.params.dayid]" :key="index" class="width: 100px;padding: 1em"> 
         <router-link :to="'/day/' + $route.params.dayid + '/' + hour">{{ hour }}</router-link>
    </div>
</template>

<script setup>
  const data = await useData();
</script>