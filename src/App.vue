<script>
// importo componenti vue
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

// importo axios
import axios from 'axios';

// importo file store.js
import { store } from './store'

export default {
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getFilm() {
      let myURL = store.apiURL;
      console.log("i'm in");
    }
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;
</style>
