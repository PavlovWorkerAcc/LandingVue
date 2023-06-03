<script setup>

import PreloaderItem from "@/components/preloader.vue";
</script>

<template>
  <PreloaderItem/>
  <router-view/>
</template>


<script>

  export default {
    name: 'App',
  }
</script>
