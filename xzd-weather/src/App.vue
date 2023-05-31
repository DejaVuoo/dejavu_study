<template>
  <div class="home">
    <TopContainer />
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import TopContainer from './components/Header/TopContainer.vue';




</script>

<style lang="scss" scoped>
.home{
  display: flex;
  flex-direction: column;
  // align-items: center;
  min-height: 100vh;
}

</style>