<script>
import AppCard from './AppCard.vue'
import { store } from '../store'

export default {
    name: "AppMain",
    components: {
        AppCard
    },
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
            <AppCard />
        </div>
    </div>
</template>

<style lang="scss">
.row {
    margin: 30px auto;
    gap: 5px
}
</style>