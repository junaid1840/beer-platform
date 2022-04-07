<template>
  <v-container>
    <div v-for="(filterInput, index) in filterInputs" :key="'filter-input-'+index">
      <div class="d-flex flex-row mb-6" >
        <b>{{filterInput.label}}</b>
        <v-select
            :items="filterInput.conditionOptions"
            v-model="filterInput.conditionValue"
            label="Condition"
        ></v-select>
        <v-text-field v-if="filterInput.conditionType === 'text'" label="filter value" v-model="filterInput.value"></v-text-field>
        <v-menu v-if="filterInput.conditionType === 'date'" v-model="menu" :close-on-content-click="false" offset-y min-width="290px">
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
                type="text"
                v-model="filterInput.value"
                readonly
                v-bind="attrs"
                v-on="on"
                label="Date"
            />
          </template>
          <v-date-picker v-model="filterInput.value" @input="menu = false"></v-date-picker>
        </v-menu>
      </div>
    </div>
    <v-btn @click="filter"> Filter </v-btn>
  </v-container>
</template>

<script>
export default {
  name: "Filters",
  data() {
    const that = this;
    return {
    menu: false,
    filterInputs: [
        {
          label: "ID",
          value: "",
          conditionOptions: ['Equal to'],
          conditionValue: 'Equal to',
          conditionType: 'text',
          getQuery() {
            return this.value ? `ids=${this.value}` : ""
          }
      },
        {
          label: "Beer Name",
          value: "",
          conditionOptions: ['Equal to'],
          conditionValue: 'Equal to',
          conditionType: 'text',
          getQuery() {
            return this.value ? `beer_name=${this.value}` : ""
          }
      },
        {
          label: "Brewed",
          value: "",
          conditionOptions: [{text:'Before', value: 'brewed_before'}, {text: "After", value: 'brewed_after'}],
          conditionValue: '',
          conditionType: 'date',
          getQuery() {
            return this.value && this.conditionValue ? `${this.conditionValue}=${that.getFormattedDate(this.value)}` : ""
          }
      },
        {
          label: "ABV",
          value: "",
          conditionOptions: [{text:'Greater Than', value: 'abv_gt'}, {text: "Less Than", value: 'abv_lt'}],
          conditionValue: '',
          conditionType: 'text',
          getQuery() {
            return this.value && this.conditionValue ? `${this.conditionValue}=${this.value}` : ""
          }
      },
        {
          label: "IBU",
          value: "",
          conditionOptions: [{text:'Greater Than', value: 'ibu_gt'}, {text: "Less Than", value: 'ibu_lt'}],
          conditionValue: '',
          conditionType: 'text',
          getQuery() {
            return this.value && this.conditionValue ? `${this.conditionValue}=${this.value}` : ""
          }
      },
        {
          label: "EBC",
          value: "",
          conditionOptions: [{text:'Greater Than', value: 'ebc_gt'}, {text: "Less Than", value: 'ebc_lt'}],
          conditionValue: '',
          conditionType: 'text',
          getQuery() {
            return this.value && this.conditionValue ? `${this.conditionValue}=${this.value}` : ""
          }
      },
    ]
  }},
  methods: {
    filter() {
      this.$emit('filterQuery', this.getFinalFilterQuery());
    },
    getFinalFilterQuery() {
      const query = this.filterInputs.map((filterInput) => filterInput.getQuery()).join("&");
      console.log(query);
      return query;
    },
    getFormattedDate(dateString) {
      const splitDateString = dateString.split("-");
      return splitDateString[2]+"-"+splitDateString[0];
    }
  }
}
</script>

<style scoped>

</style>