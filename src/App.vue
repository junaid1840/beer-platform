<template>
  <v-app>
    <Header />
    <v-main>
      <Filters @filterQuery="filterBeers" />
      <Datatable :beerItems="beerItems" />
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header';
import Datatable from './components/Datatable';
import Filters from './components/Filters';
import { getAllBeers, getFilteredBeers } from "./services/api"

export default {
  name: 'App',

  components: {
    Header,
    Datatable,
    Filters
  },

  data: () => ({
    beerItems: []
  }),

  async created() {
    this.beerItems = await getAllBeers();
  },
  methods: {
    async filterBeers(filterQuery) {
      this.beerItems = await getFilteredBeers(filterQuery);
    }
  }
};
</script>
