<template>
    <div>
    <ResultCard
        v-for="show in searchResultData"
        :key="show.id"
        :summary="show.summary"
        :title="show.name"
        :rating="show.rating" 
        :id ="show.id"
        :image="show.image?.original || show.image?.medium"
        >
    </ResultCard>
    </div>
</template>

<script setup>
import { useSearchQueryStore } from "../stores/store";
import ResultCard from "../components/ResultCard.vue";
const fetchData = () => useSearchQueryStore().getSearchQuery();
const searchResultData = fetchData();
console.log(searchResultData);

</script>


<style scoped>

.detail-view-frame {
    max-width: 700 px;
    max-height: fit-content;
    color:black;
    display: flex;
}


.title{
    height: 80px;
    color: black;

}

.image {


}

</style>