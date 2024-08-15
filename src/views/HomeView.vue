<template>
  <div>
    <SlideShow
      v-for="[genre, shows] in showsByGenres"
      :key="genre"
      :genre="genre"
      :shows="shows"  
    ></SlideShow>
  </div>
</template>
<script setup lang="ts">
import SlideShow from "../components/SlideShow.vue";
import { useShowStore } from "../stores/shows";
import { onMounted, ref } from "vue";


const showStore = useShowStore();

const showsByGenres = ref();

onMounted(async () => {
  showsByGenres.value = await showStore.getShows();
})
</script>
