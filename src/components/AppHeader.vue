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
        searchFilm() {
            // quello che scrive l'utente nell'input ora deve apparire in console
            console.log(store.filmParam);

            let myURL = store.apiURL;
            console.log(myURL);

            // quello che scrive l'utente nell'input va aggiunto al link API. Inizio col verificare se l'utente ha fatto una ricerca
            if (store.filmParam !== "") {

                // ora verifico se la richiesta API (il link) contiene già dei parametri. Se li contiene, aggiungo '&':
                if (myURL.includes('?')) {
                    myURL += `&query=${store.filmParam}`
                }
                // Se non contiene di parametri aggiungo '?'
                else {
                    myURL += `?query=${store.filmParam}`
                }
                console.log(myURL);
            }

            // ora faccio partire la chiamata axios per cercare i film con i parametri aggiunti dall'utente
            axios
                .get(myURL)
                .then((res => {
                    console.log(res.data);
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
        <div class="logo-container"></div>
        <AppSearch @ricerca="searchFilm" />
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
}
</style>