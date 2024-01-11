<script>
import { store } from '../store'

export default {
    name: "AppMain",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <!-- elemento da iterare -->
            <div v-for="(film, i) in filmList" :key="i" :info="film" class="film-card">
                <h2>{{ res.data.results[i].title }}</h2>
                <span>{{ res.data.results[i].original_title }}</span>
                <span>{{ res.data.results[i].original_language }}</span>
                <span>{{ res.data.results[i].vote_average }}</span>
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

    img {
        width: 100%;
    }
}
</style>