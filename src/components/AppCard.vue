<script>
export default {
    name: "AppCard",
    props: {
        info: Object
    }
}
</script>

<template>
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