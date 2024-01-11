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

        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <!-- elemento da iterare -->
            <div v-for="(film, i) in store.filmList" :key="i" :info="film" class="film-card">
                <h2>{{ film.title }}</h2>
                <span>{{ film.original_title }}</span>
                <span>Lingua originale:
                    <img :src="getFlagImageUrl(film.original_language)" alt="bandiera">
                </span>
                <span>{{ film.vote_average }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.row {
    margin: 30px auto;
    gap: 5px
}

.row>.film-card {
    min-height: 400px;
    width: calc((100% / 3) - 5px);
    background-color: orange;
    display: flex;
    flex-direction: column;

    img {
        width: auto;
        max-height: 30px;
    }
}
</style>