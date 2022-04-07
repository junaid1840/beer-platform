<template>
  <v-container>
    <v-card>
      <v-card-title>
        Beer List
        <v-spacer></v-spacer>
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
          dense
          :headers="headers"
          :items="beerItems"
          :search="search"
          :items-per-page="10"
          class="elevation-1"
      >
        <template v-slot:item.image_url="{ item }">
          <div class="img-wrapper">
            <img class="img-cell" :src="item.image_url" alt="beer">
          </div>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      beerItems: Array
    },
    data: () => ({
      search: "",
      headers: [
        {
          text: 'Index',
          align: 'start',
          sortable: true,
          value: 'id',
        },
        {
          text: 'Image',
          align: 'start',
          sortable: true,
          value: 'image_url',
        },
        {
          text: 'Name',
          align: 'start',
          sortable: true,
          value: 'name',
        },
        {
          text: 'Brewed',
          align: 'start',
          sortable: true,
          value: 'first_brewed',
        },
        {
          text: 'ABV',
          align: 'start',
          sortable: true,
          value: 'abv',
        },
        {
          text: 'IBU',
          align: 'start',
          sortable: true,
          value: 'ibu',
        },
        {
          text: 'EBC',
          align: 'start',
          sortable: true,
          value: 'ebc',
        },
      ],
    }),

  }
</script>

<style scoped>
.img-cell {
  height: 70px;
  width: 30px;
}
.img-wrapper {
  padding: 3px;
}
</style>
