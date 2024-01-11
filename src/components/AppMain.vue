<script>
import { store } from '../store'

export default {
    name: "AppMain",
    data() {
        return {
            store
        }
    },
    methods: {
        // metodo che serve a convertire le lingue dal testo alla bandiera corrispondente
        getFlagImageUrl: function (img) {

            const supportedLanguages = ['it', 'en', 'us', 'fr', 'es', 'de', 'ru', 'pl', 'pt'];

            if (supportedLanguages.includes(img)) {
                return new URL(`../assets/img/${img}.svg.png`, import.meta.url).href;
            } else {
                return new URL(`../assets/img/world-flag.svg.png`, import.meta.url).href;
            }
        },

        // metodo che restituisce l'immagine di copertina
        getBackgroundImg: function (img) {
            if (img)
                return new URL(`https://image.tmdb.org/t/p/w342/${img}`)
        },

        // metodo per sostituire il voto del film con il numero di stelle piene corrispondenti, arrotondando per eccesso i numeri decimali
        getStars: function (num) {
            const numStellePiene = Math.ceil(num / 2);
            const numStelleVuote = 5 - numStellePiene;

            const stellePiene = '★'.repeat(numStellePiene);
            const stelleVuote = '☆'.repeat(numStelleVuote);

            return stellePiene + stelleVuote
        }
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <h1>FILM</h1>
                <!-- elemento da iterare (film)-->
                <div v-for="(film, i) in store.filmList" :key="i" :info="film" class="film-card">
                    <img class="front-card" :src=getBackgroundImg(film.poster_path) alt="immagine di copertina non trovata">
                    <div class="back-card">
                        <span><b>Titolo</b>: {{ film.title }}</span>
                        <br>
                        <span><b>Titolo originale</b>: {{ film.original_title }}</span>
                        <br>
                        <span><b>Lingua originale</b>:
                            <img :src="getFlagImageUrl(film.original_language)" alt="bandiera" class="flag-language">
                        </span>
                        <br>
                        <span class="stars"><b>Valutazione:</b> {{ getStars(film.vote_average) }}</span>
                        <br>
                        <span><b>Overview</b>: {{ film.overview }}</span>
                    </div>


                </div>
            </div>
            <div class="row">
                <h1>SERIE TV</h1>
                <!-- elemento da iterare (serie tv) -->
                <div v-for="(tvserie, i) in store.tvSeriesList" :key="i" :info="film" class="film-card">
                    <img class="front-card" :src=getBackgroundImg(tvserie.poster_path)
                        alt="immagine di copertina non trovata">
                    <div class="back-card">
                        <span><b>Titolo</b>: {{ tvserie.name }}</span>

                        <span><b>Titolo originale</b>: {{ tvserie.original_name }}</span>
                        <br>
                        <span><b>Lingua originale</b>:
                            <img :src="getFlagImageUrl(tvserie.original_language)" alt="bandiera" class="flag-language">
                        </span>
                        <br>
                        <span class="stars"><b>Valutazione:</b> {{ getStars(tvserie.vote_average) }}</span>
                        <br>
                        <span><b>Overview</b>: {{ tvserie.overview }}</span>
                    </div>


                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss">
main {
    background-color: grey;
}

.row {
    margin: 30px auto;
    gap: 10px
}

.row>.film-card {
    min-height: 400px;
    width: calc((100% / 3) - 10px);
    background-color: rgb(0, 0, 0);
    display: flex;
    flex-direction: column;
    color: white;
    position: relative;
    overflow: hidden;

    .flag-language {
        width: auto;
        max-height: 20px;
    }

    span {
        margin-top: 2px;
        display: block;
    }
}



.front-card,
.back-card {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    color: white;
    transition: transform 0.5s ease;
}

.front-card {
    z-index: 10;
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding: 5px;
}

.back-card {
    font-size: 12px;
    padding: 10px;
}

.film-card:hover .front-card {
    transform: translateY(-100%);
}

.film-card:hover .back-card {
    transform: translateY(0);
    display: block;
}

.stars {
    color: yellow;

    b {
        color: white;
    }
}
</style>