<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue';
import { useShowStore } from "./stores/shows";

const showsStore = useShowStore();

</script>

<template >
   <div>
      <Header/>
      <RouterView/>
   </div>
</template>