import { ref, computed } from 'vue'
import { defineStore } from 'pinia';
import axios from 'axios';
import { useRoute } from 'vue-router';

const divideShows = (shows) => {
    const showsByGenres = new Map();
    shows.forEach((show) => {
        show.genres.forEach((genre) => {
            if (showsByGenres.has(genre)) {
                const curArr = showsByGenres.get(genre);
                const newArr = curArr.concat([show]);
                showsByGenres.set(genre, newArr);
            } else {
                showsByGenres.set(genre, [show]);
            }
        })
    })
    showsByGenres.forEach((shows, genre) => {
        const sortedShows = shows.sort((a, b) => b.rating.average - a.rating.average);
        const topTenShows = sortedShows.slice(0, 10);
        showsByGenres.set(genre, topTenShows);
    })
    return showsByGenres;
}

export const useShowStore = defineStore('showsStore',() => {
    const showDetail = ref();
    const showsByGenres = ref(null);

    const setShowDetail = (genre, id) => {
        const shows = showsByGenres.value;
        console.log(id); 
        console.log(shows);
        const showsByGenre = shows.get(genre);

        console.log(showsByGenre)

        for (const show of showsByGenre) {
            if (show.id === id) { 
                showDetail.value = show;
                break;
            }
        };
        console.log(showDetail.value);
    }

    const getShowDetail = () => showDetail.value;
    // For the home page
    const getShows = async () => {
        if (showsByGenres.value){
            return showsByGenres.value;
        } else {
            let allShows = [];
            try {
                for (let i = 0; i < 100; i++) {
                    const { data } = await axios.get(`https://api.tvmaze.com/shows?page=${i}`);
                    allShows = allShows.concat(data);
                }
            } catch (error) {
                alert(error);
            }
            showsByGenres.value = divideShows(allShows);
            return showsByGenres.value;
        }
    } 
        
    return {
        getShows,
        getShowDetail,
        setShowDetail
    }
})