import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';
 

export const useSearchQueryStore = defineStore('counter', () => {
  const searchQuery = ref();
  const searchResult = ref({});

  // Gettter
  const getSearchQuery = () => {
    console.log(searchResult.value);
    return searchResult.value;
  }

  const retrieveResults = async () => {
        const { data } = await axios.get(`https://api.tvmaze.com/search/shows?q=:${searchQuery.value}`);
        searchResult.value = data;
        console.log(searchResult.value);
  };

  // Setter
  const setSearchQuery = (newQuery) => {
    searchQuery.value = newQuery;
    retrieveResults();
  };

  return {
    getSearchQuery,
    setSearchQuery,
  }
})