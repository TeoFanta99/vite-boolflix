import { reactive } from 'vue'

export const store = reactive({
    apiURL: 'https://api.themoviedb.org/3/search/movie?language=it-IT&api_key=4236ad0339f4cfaee31f8ca61b211d01',
    filmList: [],
    filmParam: "",

    tvSeriesApiURL: 'https://api.themoviedb.org/3/search/tv?language=it-IT&api_key=4236ad0339f4cfaee31f8ca61b211d01',
    tvSeriesList: [],
    tvSeriesParam: "",
})