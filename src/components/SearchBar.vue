<template>
    <div class="search-bar">
        <div class ="search-box">
            <button class="btn" @click="router.push(`/`)"><i class="fa fa-home"></i> Home</button>
            <input class="search-box"
            type="text"
            placeholder="Search.."
            name="search"
            v-model="searchQuery">
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, watch } from "vue";
import { useSearchQueryStore } from "../stores/store";
import router from "@/router";
let searchQuery = ref();


watch(
    () => searchQuery.value,
    (newValue) => {useSearchQueryStore().setSearchQuery(newValue);
    router.push(`/result`);},
);

</script>
<style scoped>
.search-bar {
    position: relative;
    box-sizing: border-box;
    display: block;
    font-size: 16px;
    width: 30%;
    height: 40%;
}

.search-box {
    position: relative;
    border-radius: 5%;
    width: 120%;
    float:left; 
    display: flex;
    justify-content: center;
}   

.btn {
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 3% 3%;
  font-size: 90%;
  cursor: pointer;
  border-radius: 5%;
  overflow: hidden;
  width: 20%;
  height: 35%;
  position: relative;
  display:inline;
  text-align: center;
}

.btn:hover {
  background-color: RoyalBlue;
}

.btn,.search-box {float:left; display:inline}
</style>