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
      console.log("console log per vedere se il metodo funziona");

      // chiamati API per i film
      axios
        .get(myURL)
        .then((res => {
          console.log(res.data);
          store.filmList = res.data
        }))
        .catch((err) => {
          console.log("errori", err);
        })

      // filtrare film per nome
      if (store.filmParam !== "") {

        // verifico se la richiesta API (il link) contiene già dei parametri
        if (myURL.includes('?')) {
          myURL += `&query=${store.filmParam}`
        } else {
          myURL += `?query=${store.filmParam}`
        }
      }
    }
  },
  created() {
    this.getFilm()
  }
}
</script>

<template>
  <AppHeader @confirm="this.getFilm" />
  <AppMain />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;
</style>
