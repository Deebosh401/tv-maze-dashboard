<template>
    <div class="show-card-container" @click="clicked(genre,id)">
        <div class="show-card">
            <img v-if="image" class="show-card-img" :src="image" :alt="`image of ${title}`">
            <div v-else class="show-card-img">No image</div>
            <div class="rating">{{ rating }}</div>
        </div>
        <div class="title" >{{ title }}</div>
    </div>
</template>
<script setup>
import { useShowStore } from "@/stores/shows";
import router from "@/router";

defineProps({
    id: {
        type:Number,
    },

    genre: {
        type:String,
    },

    title: {
        type: String,
        default: "title",
    },
    image: {
        type: String,
        default: null,
    },
    rating: {
        type: Number,
        default: 0.0,
    }
})

const clicked = (genre,id) => {
    console.log(id);
    console.log(genre);
    useShowStore().setShowDetail(genre,id);
    router.push(`/detail`);
}

</script>

<style>
.show-card-container {
    height: 240px;
    width: 120px;
    margin: 0 8px;
}
.show-card {
    position: relative;
}
.show-card-img {
    width: 100%;
}
.rating {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 30px;
    background-color: #f3d138;
    color: white;
    text-align: center;
}
.title {
    height: 40px;
}
</style>