<template>
    <div class='detail-view-frame'> 
        <img v-if="image" class="image" :src="image" :alt="`image of ${title}`">
        <div v-else class="image">No image</div>
        <div>
            <div class='title'> {{ name }}</div>
            <div class='rating'> {{ rating }}</div>
            <div class='summary'>{{ summary }}</div>
        </div>
    </div>
</template>

<script setup>

defineProps({
    id: {
        type:Number,
    },

    name: {
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
    },

    summary: {
        type:String,
        default:null,
    }

})

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
    width: 80%;
    height:80%;

}

</style>