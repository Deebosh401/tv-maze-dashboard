<template>
    <div class="row">
        <div class="genre-label">{{ genre }}</div>
        <div class="shows-container">
            <ShowCard
                v-for="show in shows"
                :key="show.id"
                :title="show.name"
                :rating="show.rating?.average"
                :image="show.image?.original || show.image?.medium"
                :genre="genre"
                :id="show.id"
            ></ShowCard>
        </div>
    </div>
</template>
<script lang="ts" setup>

import ShowCard from "./ShowCard.vue";

defineProps({
    genre: {
        type: String,
        default: "",
    },
    shows: {
        type: Array,
        default: null,
    }
})
</script>

<style>
.genre-label {
    font-size: 16px;
    height: 24px;
    margin: 0 8px;
}
.row {
    width: 100%;
    overflow: scroll;
    scroll-behavior: smooth;
    overflow-x: scroll;
}
.shows-container {
    display: flex;
    flex-direction: row;
    height: 240px;
    align-content: center;
}
</style>