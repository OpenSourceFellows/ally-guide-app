<template>
<div>

<div class="org-search">
    <input type="text" v-model="search" placeholder="Search by name or state" v-on:keyup="CheckInputContent" style="width:30%">
</div>

<div id="government-contact-info" v-show="hasContent">
    <div v-for="result in searchResults" :key="result.Name" style="width: 30%; display: inline-block;">
        <div style="border-style: dashed;">
            <p>Name: {{result.Name}}</p>
            <p>Description: {{result.Description}}</p>
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

<div class = "blm">
<a class="blm" href = "https://www.rebuildblackbusiness.com/"> Rebuild Black Owned Businesses </a>
</div>
</div>


</template>

<style>

.org-search{
 padding-top: 300px;
 padding-bottom: 100px;
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
  padding: 50px;
  width:100%;
  margin: 0px;
  color: white;
}
.blm{
cursor: pointer;
  background-color: #000000;
  opacity: .75;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;

}

.blm:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  opacity: 100%;
  text-decoration:none;
  color: yellow;
}

</style>

<script>

export default {
  data () {
    return{
      hasContent: false,
      search:'',
      searchCompleted: true,
      searchResults: [],
      error: '',
    }
  },
  methods: {
    CheckInputContent: function () {
    if (this.search != '') {
        this.hasContent = true;
    }
    else {
        this.hasContent = false;
    }
    },
    ToggleMessageUI: function (result) {

    },
  },
  computed: {
    filteredCauses: function(){
        return this.searchResults.filter((cause) => {
          return cause.name.toLowerCase().match(this.search.toLowerCase());
        });
    },
  },
  created() {
      this.$http.get(
          'https://murmuring-headland-63935.herokuapp.com/api/contribute'
      ).then(response => {
        this.searchResults = response.body;
        console.log(this.searchResults)
      }, response => {
          // error callback
      });
  }
}

</script>
