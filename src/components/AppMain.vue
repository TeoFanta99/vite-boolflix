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
            <AppCard />
            <AppCard />
        </div>
    </div>
</template>

<style lang="scss"></style>