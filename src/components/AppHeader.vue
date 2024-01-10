<script>
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
        saluta() {
            console.log("evento ricevuto");
        }
    }
}
</script>

<template>
    <header>
        <div class="logo-container"></div>
        <AppSearch @confirm="saluta" />
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