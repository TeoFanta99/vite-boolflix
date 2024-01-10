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
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss"></style>
