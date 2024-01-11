<script>
import { store } from '../store'

export default {
    name: "AppMain",
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div class="container">
        <div class="row">
            <!-- elemento da iterare -->
            <div v-for="(film, i) in store.filmList" :key="i" :info="film" class="film-card">
                <h2>{{ film.title }}</h2>
                <span>{{ film.original_title }}</span>
                <span>{{ film.original_language }}</span>
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
        width: 100%;
    }
}
</style>