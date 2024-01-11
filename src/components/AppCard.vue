<script>
import { store } from '../store'

export default {
    name: "AppCard",
    props: {
        info: Object
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <!-- elemento da rendere dinamico -->
    <div class="film-card">
        CARD
    </div>
</template>

<style lang="scss">
.row>.film-card {
    min-height: 400px;
    width: calc((100% / 3) - 5px);
    background-color: orange;

    img {
        width: 100%;
    }
}
</style>