<template>
    <div class='detail-view-frame'>
        <img v-if="showDetailData.image.medium" class="image" :src="showDetailData.image.medium" :alt="`image of ${title}`">
        <div v-else class="image">No image</div>
        <div>
            <div class='title'> {{ showDetailData.name }}</div>
            <div class='rating'> {{ showDetailData.rating }}</div>
            <div class='summary'>{{ showDetailData.summary}}</div>
        </div>
    </div>
</template>

<script setup>
import { useShowStore } from "../stores/shows";
const showDetailData = useShowStore().getShowDetail();
</script>

<style scoped>

.detail-view-frame {
    max-width: 1000 px;
    max-height: fit-content;
    color:black;
    border-style: double;
    display: flex;
    border-color: black;
}

.title{
    height: 80px;
    color: black;

}

.image {
    width: 80%;
    height:80%;
    left: 50px;
}

.summary{
font-style: normal;

}

.rating{


}
</style>