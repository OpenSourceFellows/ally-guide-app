<template>
<div>

<div>
    <input type="text" v-model="search" placeholder="Search by name or state" v-on:keyup="CheckInputContent" style="width:30%">
    <button type="button" v-on:click='FetchSearchResults()'>Search</button>
</div>

<div id="government-contact-info" v-show="searchCompleted">
    <div v-for="result in searchResults" :key="result.Name" style="width: 30%; display: inline-block;">
        <div style="border-style: dashed;">
            <p>Name: {{result.Name}}</p>
            <p>Causes: {{result.Cause}}</p>
        </div>
    </div>
</div>

<div v-show="error" style="color: red; font-weight: bolder;">
  {{ error }}
</div>

<div v-show="searchCompleted && searchResults.length == 0 && !error" style="font-weight: bolder;">
  <h1>Sorry, no results found.</h1>
</div>
</div>


</template>

<style>
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
}

button.accordion {
    background-color: #000000;
    color: #eee;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
    transition: 0.4s;
}

button.accordion.active, button.accordion:hover {
    background-color: #ddd;
    color: #000000;
}

div.panel {
    padding: 0 18px;
    background-color: white;
    display: none;
}

div.panel.show {
    display: block !important;
}

div.panel {
    padding: 0 18px;
    background-color: white;
    max-height: 0;
    overflow: hidden;
    transition: 0.6s ease-in-out;
    opacity: 0;
}

div.panel.show {
    opacity: 1;
    max-height: 500px; /* Whatever you like, as long as its more than the height of the content (on all screen sizes) */
}

.blm{
cursor: pointer;
  opacity: .75;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;

}

a.blm:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  opacity: 1;
}

</style>

<script>
const Airtable = require('airtable');
const base = new Airtable({ apiKey: process.env.VUE_APP_AIRTABLE_API_KEY }).base(process.env.VUE_APP_AIRTABLE_BASE);

export default {
  data () {
    return{
      search:'',
      searchCompleted: false,
      searchResults: [],
      error: '',
    }
  },
  methods: {
    CheckInputContent: function () {

    },
    ToggleMessageUI: function (result) {

    },
    FetchSearchResults: function (result) {
      this.searchCompleted = false;
      this.searchResults = [];
      this.error = '';

      function page(records, fetchNextPage) {
        for (const record of records) {
            console.log('Retrieved', record.get('Name'));
            console.log('Retrieved', record.fields);
            this.searchResults.push(record.fields);
        }

        fetchNextPage();
      }

      function done(err) {
        this.searchCompleted = true;

        if (err) {
          console.error(err);
          this.error = `Search error: ${err.message ?? err}`;
        }
      }

      // Remove backslashes and double quotes from the user input to avoid injection. These characters aren't treated
      // as literals by airtable. See https://support.airtable.com/hc/en-us/articles/203255215-Formula-Field-Reference#text
      // I don't see a way in Airtable's API to have a prepared statement ("formula") and bind parameters to it.
      // So we'll have to make due with sanitizing our inputs.
      const searchText = this.search.replace(/[\\"]/g, '');

      // search the Distribute table by Name and State fields, case-insensitively.
      base('Distribute').select({
        view: "Grid view",
        filterByFormula: `OR(FIND(LOWER("${searchText}"), LOWER({Name})), FIND(LOWER("${searchText}"), LOWER({State})))`,
      }).eachPage(page.bind(this), done.bind(this));
    }
  },
  computed: {

  },
  created() {

  }
}

</script>
