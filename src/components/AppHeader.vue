<script>
import { store } from '../store'

export default {
    name: "AppHeader",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <header>
        <div class="logo-container"></div>
        <div class="search-container">
            <input type="text" placeholder="Cerca" class="me-2">
        </div>
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