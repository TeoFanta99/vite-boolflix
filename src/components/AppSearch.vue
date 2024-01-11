<script>
import { store } from '../store'

export default {
    name: "AppSearch",
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div class="search-container">
        <input v-model.trim="store.filmParam" type="text" placeholder="Cerca" class="me-2">
        <button type="button" class="me-2" @click.prevent="$emit('ricerca')">SEARCH</button>
    </div>
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