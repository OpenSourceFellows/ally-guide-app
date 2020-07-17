<template>
<div>

<div class="org-search" style="padding-top: 300px">
    <input class="org-bar" type="text" v-model="search" placeholder="Search by name or topic" v-on:keyup="CheckInputContent" style="width:30%">
</div>
<div class="banner">
 <p>While we fight for individual police officers to be held accountable for their actions, we need to make sure we can fund every aspect of that fight.</p>
</div>
<div id="government-contact-info" v-show="hasContent">
			<div>
				<b-card
					class="mb-2 cards"
					v-for="result in searchResults"
					:key="result.name"
					style="max-width: 24rem; display:inline-block; margin:10px;"
					:title="result.name"
					:sub-title="result.contentLink"
					:img-src="result.imageUrls"
					img-alt="Image"
					img-top
					tag="article"
				>
        <b-link to="/">
          <p>{{result.contentLink}}</p>
       </b-link>
        <b-card-text>
						<h4>{{result.Name}}</h4>

						<p>
							<i class="fas fa-map-marker-alt" style="font-size:20px;width:1.5rem;"></i>
							{{result.City}},{{result.State}}
						</p>
						<p>
							{{result.Description}}
						</p>

					</b-card-text>

					<b-button type="button" variant="primary" v-on:click="ToggleMessageUI(member)">Contribute to fund</b-button>
				</b-card>
      </div>
  </div>

<div v-show="error" style="color: red; font-weight: bolder;">
  {{ error }}
</div>

<div v-show="searchCompleted && searchResults.length == 0 && !error" style="font-weight: bolder;">
  <h1>Sorry, no results found.</h1>
</div>

<div class="rebuild-btn">
<a  href = "https://www.rebuildblackbusiness.com/"> Rebuild Black Owned Businesses </a>
</div>
</div>


</template>

<style>
.rebuild-btn{
    background-color: #000000;
    text-decoration: none;
    padding: 30px;
}

.rebuild-btn a{
  padding: 30px;
  width:100%;
  color: white;
}
.rebuild-btn a:hover{
  background-color:yellow;
  text-decoration:none;
  color:#000000;
}
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

.banner{
  background-color:#537260;
  width:100%;
  padding: 50px;
  color: #ffffff;
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
          return cause.Name.toLowerCase().match(this.search.toLowerCase());
        });
    },
  },
  created() {
    this.$http.get(
        'https://murmuring-headland-63935.herokuapp.com/api/contribute'
    ).then(response => {
      this.searchResults = response.body;
    }, response => {
        // error callback
    });
  }
}

</script>
