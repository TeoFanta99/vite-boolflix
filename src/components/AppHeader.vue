<script>
import axios from 'axios';
import { store } from '../store'
import AppSearch from './AppSearch.vue'

export default {
    name: "AppHeader",
    data() {
        return {
            store
        }
    },
    components: {
        AppSearch
    },
    methods: {
        search() {
            let myURL = store.apiURL;

            // quello che scrive l'utente nell'input va aggiunto al link API. Inizio col verificare se l'utente ha fatto una ricerca
            if (store.filmParam !== "") {

                // ora verifico se la richiesta API (il link) contiene già dei parametri. Se li contiene, aggiungo '&':
                if (myURL.includes('?')) {
                    myURL += `&query=${store.filmParam}`
                }
                // Se non contiene dei parametri aggiungo '?'
                else {
                    myURL += `?query=${store.filmParam}`
                }
            }

            // ora faccio partire la chiamata axios per cercare i film con i parametri aggiunti dall'utente
            axios
                .get(myURL)
                .then((res => {
                    store.filmList = res.data.results
                }))
                .catch((err) => {
                    console.log("errori", err);
                })



            // ora dobbiamo rifare la stessa cosa, ma stavolta per le serie tv
            let mySeriesURL = store.tvSeriesApiURL;

            if (store.filmParam !== "") {
                if (mySeriesURL.includes('?')) {
                    mySeriesURL += `&query=${store.filmParam}`
                } else {
                    mySeriesURL += `?query=${store.filmParam}`
                }
            }

            axios
                .get(mySeriesURL)
                .then((res => {
                    store.tvSeriesList = res.data.results
                    console.log(store.tvSeriesList);
                }))
                .catch((err) => {
                    console.log("errori", err);
                })
        }
    },
}
</script>

<template>
    <header>
        <div class="logo-container ms-4">
            BOOLFLIX
        </div>
        <AppSearch @ricerca="search" />
    </header>
</template>

<style lang="scss">
header {
    min-height: 80px;
    width: 100%;
    background-color: lightblue;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: black;

    .logo-container {
        color: red;
        font-size: 30px;
    }
}
</style>